$(document).ready(function () {
    $(".sidebar ul li").on('click', function () {
        $(".sidebar ul li.active").removeClass('active');
        $(this).addClass('active');

        if ($(this).hasClass('content-1')) {
            $(".content div.content-active").addClass('content-hidden');
            $(".content div.content-active").removeClass('content-active');

            $(".content div.content-1").removeClass('content-hidden');
            $(".content div.content-1").addClass('content-active');
        }
        else if ($(this).hasClass('content-2')) {
            $(".content div.content-active").addClass('content-hidden');
            $(".content div.content-active").removeClass('content-active');

            $(".content div.content-2").removeClass('content-hidden');
            $(".content div.content-2").addClass('content-active');
        }
        else if ($(this).hasClass('content-3')) {
            $(".content div.content-active").addClass('content-hidden');
            $(".content div.content-active").removeClass('content-active');

            $(".content div.content-3").removeClass('content-hidden');
            $(".content div.content-3").addClass('content-active');
        }
    });

    // document.querySelectorAll('.fa-trash').forEach(item => {
    //     item.addEventListener('click', (e) => {
    //         if (confirm('Are you sure you want to remove this category?')) {
    //             e.target.parentElement.remove();
    //         }
    //     });
    // });

    // $('#menu-category p').on('click', function () {
    //     var txt = ($(this).text());
    //     let ul = document.getElementById('list-category');
    //     let li = document.createElement('li');
    //     li.className = 'item-child col-lg-5 d-flex justify-content-between align-items-center rounded p-2 mt-5';
    //     let p = document.createElement('p');
    //     p.className = 'ms-2';
    //     p.innerText = txt;
    //     let i = document.createElement('i');
    //     i.className = 'fa-solid fa-trash me-2';
    //     i.style = 'cursor: pointer';
    //     li.appendChild(p);
    //     li.appendChild(i);
    //     ul.insertBefore(li, ul.lastChild);
    // });



    // $('#menu-tag p').on('click', function () {
    //     var txt = ($(this).text());
    //     let ul = document.getElementById('list-tag');
    //     let li = document.createElement('li');
    //     li.className = 'item-child col-lg-5 d-flex justify-content-between align-items-center rounded p-2 mt-5';
    //     let p = document.createElement('p');
    //     p.className = 'ms-2';
    //     p.innerText = txt;
    //     let i = document.createElement('i');
    //     i.className = 'fa-solid fa-trash me-2';
    //     i.style = 'cursor: pointer';
    //     li.appendChild(p);
    //     li.appendChild(i);
    //     ul.insertBefore(li, ul.lastChild);
    // });



    let hour = document.getElementById('accept-hour');
    console.log(hour);
    for (let i = 0; i <= 23; i++) {
        let h = document.createElement('option');
        h.value = i;
        h.text = i;
        hour.options.add(h, i + 1);
    }

    let minute = document.getElementById('accept-minute');
    for (let i = 0; i <= 60; i++) {
        let m = document.createElement('option');
        m.value = i;
        m.text = i;
        minute.options.add(m, i + 1);
    }

    let day = document.getElementById('accept-day');
    for (let i = 1; i <= 31; i++) {
        let d = document.createElement('option');
        d.value = i;
        d.text = i;
        day.options.add(d, i);
    }

    let month = document.getElementById('accept-month');
    for (let i = 1; i <= 12; i++) {
        let m = document.createElement('option');
        m.value = i;
        m.text = i;
        month.options.add(m, i);
    }

    let year = document.getElementById('accept-year');
    let currentYear = new Date().getFullYear();
    let j = 1;
    for (let i = currentYear; i <= currentYear + 10; i++) {
        let y = document.createElement('option');
        y.value = i;
        y.text = i;
        year.options.add(y, j);
        j++;
    }
});

async function updateCategory(idArticle, idCategory) {
    await fetch(`/editor/${idArticle}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ idCategory, type: 1 })
    }).then(res => {
        if (res.ok) {
            location.reload(); // Reload lại trang khi nhận được phản hồi thành công
        }
    }).catch(error => {
        console.log('Error:', error);
    });
}

async function removeCategory(idArticle, idCategory, numOfCategories) {
    if (numOfCategories > 1) {
        if (confirm('Bạn có chắc chắn muốn xóa chuyên mục này?')) {
            await fetch(`/editor/${idArticle}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ idCategory, numOfCategories, type: 1 })
            }).then(res => {
                if (res.ok) {
                    location.reload(); // Reload lại trang khi nhận được phản hồi thành công
                }
            }).catch(error => {
                console.log('Error:', error);
            });
        }
    }
    else {
        alert('Chuyên mục không được để trống!');
    }
}

async function updateTag(idArticle, idTag) {
    await fetch(`/editor/${idArticle}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ idTag, type: 2 })
    }).then(res => {
        if (res.ok) {
            location.reload(); // Reload lại trang khi nhận được phản hồi thành công
        }
    }).catch(error => {
        console.log('Error:', error);
    });
}

async function removeTag(idArticle, idTag, numOfTags) {
    if (numOfTags > 1) {
        if (confirm('Bạn có chắc chắn muốn xóa thẻ này?')) {
            await fetch(`/editor/${idArticle}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ idTag, numOfTags, type: 2 })
            }).then(res => {
                if (res.ok) {
                    location.reload(); // Reload lại trang khi nhận được phản hồi thành công
                }
            }).catch(error => {
                console.log('Error:', error);
            });
        }
    }
    else {
        alert('Thẻ không được để trống!');
    }
}
