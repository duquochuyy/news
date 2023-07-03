// $(document).ready(() => {

//     VirtualSelect.init({
//         ele: '#multipleSelect'
//     });

// })

document.querySelectorAll('#pagination li').forEach((li, index) => {
    li.classList.add('pagination__item');
});
document.querySelectorAll('#pagination a').forEach((a, index) => {
    a.classList.add('pagination__link')
});

async function setDataModal(id) {
    document.getElementById('idEditor').innerHTML = id;

    try {
        let res = await fetch('/admin/category-assignment', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ id })
        });

        if (res.ok) {
            let json = await res.json();

            // Lấy tham chiếu đến select trong form của modal
            let mySelect = document.getElementById('selectCategory');

            // Thêm các option mới vào select
            let options = ``;
            for (const category of json.data) {
                console.log(category.selected);
                if (category.selected) {
                    options += `<option value="${category.id}" selected>${category.name}</option>`;
                }
                else {
                    options += `<option value="${category.id}">${category.name}</option>`;
                }
            }

            mySelect.innerHTML = `<label for="multipleSelect" class="col-form-label">Chọn chuyên mục</label>
            <select id="multipleSelect" multiple name="" placeholder="Nhấn để chọn chuyên mục"
                data-search="false" data-silent-initial-value-set="true">
                ${options}
            </select>`;

            VirtualSelect.init({
                ele: '#multipleSelect'
            });

        } else {
            console.error('Response error:', res.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function updateCateAssign(catesAssign) {
    let id = document.getElementById('idEditor').innerHTML;

    await fetch('/admin/category-assignment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ id, catesAssign })
    }).then(res => {
        if (res.ok) {
            location.reload(); // Reload lại trang khi nhận được phản hồi thành công
        }
    }).catch(error => {
        console.log('Error:', error);
    });
}