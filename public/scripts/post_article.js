tinymce.init({
    selector: 'textarea',
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
    ]
});