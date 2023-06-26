VirtualSelect.init({
    ele: '#inputCategory',
});

VirtualSelect.init({
    ele: '#inputTag',
});


tinymce.init({
    selector: '#inputContent',
    height: 200,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
    content_css: [
        'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        'https://www.tiny.cloud/css/codepen.min.css'
    ],
    content_style: 'body { line-height: 1.2; }',
    // forced_root_block: false 
});

$(document).ready(function () {
    const btnSubmit = document.querySelector('#btnSubmit');
    const form = document.querySelector('#postArticle-form');
    const textHidden = document.querySelector('#hiddenContent');
    const inputImage = document.querySelector('#inputImage');
    const previewImage = document.querySelector('#previewImage');

    inputImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
          previewImage.src = e.target.result;
        };
    
        reader.readAsDataURL(file);
    });

    btnSubmit.addEventListener('click', async (e) => {
        // e.preventDefault();

        const title = document.querySelector('#inputTitle').value;
        const abstract = document.querySelector('#inputSumary').value
        const content = tinymce.get('inputContent').getContent({ format: 'text' })
        const categories = document.querySelector('#inputCategory').value
        const tags = document.querySelector('#inputTag').value
        textHidden.value = content;

        console.log(categories, tags);

        if (!inputImage.files[0] || !title || !abstract || !content || !categories.length || !tags.length) {
            return;
        }

        btnSubmit.disabled = true;
        const formData = new FormData();
        formData.append('mainImg', inputImage.files[0]);
        formData.append('title', title)
        formData.append('abstract', abstract)
        formData.append('content', content)
        formData.append('categories', categories)
        formData.append('tags', tags)
        
        try {
            const response = await fetch('/writer/post-article', {
              method: 'POST',
              body: formData
            });
            if (response.ok) {
                window.location.href = '/writer';
            }
        } catch (error) {
            console.error('Lỗi khi tải lên hình ảnh:', error);
        }
   })
})


