// 1. Lấy Dữ Liệu:
const dataUrl = 'https://cdn.crfnetwork.cyou/database/shopee.json'

fetch(dataUrl)
    .then(response => response.json())
    .then(renderItem)
    .then(responsive)
    .then(handlePagination)


// 3. Hiển Thị Sản Phẩm:main product
function renderItem(items) {
    var listProduct = document.getElementById('list-product');
    var htmls = items.map(function (item) {
        return `
        <div data="${item.id} " class="col l-2-4 m-3 c-6 home-product-item">
            <a class="home-product-item-link" href="#">
                <div class="home-product-item__img" style="background-image: url(./assets/img/home/${item.id}.PNG);"></div>
                <div class="home-product-item__info">
                    <h4 class="home-product-item__name">${item.name}</h4>
                    <div class="home-product-item__price">
                        <p class="home-product-item__price-old">${item.oldPrice}đ</p>
                        <p class="home-product-item__price-new">${item.newPrice}đ</p>
                        <i class="home-product-item__ship fas fa-shipping-fast"></i>
                    </div>
                    <div class="home-product-item__footer">
                        <div class="home-product-item__save">
                            <input type="checkbox" id="heart-save-${item.id}">
                            <label for="heart-save-${item.id}" class="far fa-heart"></label>
                        </div>
                        <div class="home-product-item__rating-star">
                            <i class="star-checked far fa-star"></i>
                            <i class="star-checked far fa-star"></i>
                            <i class="star-checked far fa-star"></i>
                            <i class="star-checked far fa-star"></i>
                            <i class="star-uncheck far fa-star"></i>
                        </div>
                        <div class="home-product-item__saled">Đã bán ${item.saled}</div>
                    </div>
                    <div class="home-product-item__origin">${item.origin}</div>
                    <div class="home-product-item__favourite">
                        Yêu thích
                    </div>
                    <div class="home-product-item__sale-off">
                        <div class="home-product-item__sale-off-value">${item.saleOff}%</div>
                        <div class="home-product-item__sale-off-label">GIẢM</div>
                    </div>
                </div>
                <button class="home-product-item-footer" onclick="addToCart()">Thêm vào giỏ hàng</button>
            </a>
        </div>`;
    })
    listProduct.innerHTML = htmls.join('');
}


// 4. Điều Chỉnh Giao Diện Theo Kích Thước Màn Hình:
function responsive() {
    var listItem = document.querySelectorAll('.home-product-item');
    var bodyWidth = document.body.clientWidth;
    var listItemLength = listItem.length;

    if (bodyWidth < 740) {
        for (var i = listItemLength - 1; i >= Math.floor(listItemLength / 2) * 2; i--) {
            listItem[i].remove();
        }
    } else if (bodyWidth < 1024) {
        for (var i = listItemLength - 1; i >= Math.floor(listItemLength / 4) * 4; i--) {
            listItem[i].remove();
        }
    }
}

function checkPageArrow() {
    var paginationLink = document.querySelectorAll('.pagination-item-link');
    // Check if active page is 1
    if (document.querySelector('.pagination-item--active a').textContent == 1) {
        paginationLink[0].classList.add('pagination-item-link--disable');
        if (paginationLink[0].attributes.href) {
            paginationLink[0].attributes.removeNamedItem('href');
        }
    } else {
        paginationLink[0].classList.remove('pagination-item-link--disable');
        if (!paginationLink[0].attributes.href) {
            paginationLink[0].href = '#';
        }
    }

    if (document.querySelector('.pagination-item--active a').textContent == 14) {
        paginationLink[paginationLink.length - 1].classList.add('pagination-item-link--disable');
        if (paginationLink[paginationLink.length - 1].attributes.href) {
            paginationLink[paginationLink.length - 1].attributes.removeNamedItem('href');
        }
    } else {
        paginationLink[paginationLink.length - 1].classList.remove('pagination-item-link--disable');
        if (!paginationLink[paginationLink.length - 1].attributes.href) {
            paginationLink[paginationLink.length - 1].href = '#';
        }
    }
}

function handlePagination() {
    var paginationItem = document.querySelectorAll('.pagination-item');
    var paginationLength = paginationItem.length;
    checkPageArrow();

    for (var i = 0; i < paginationLength; i++) {
        if (i != 0 && i != paginationLength - 1) {
            // handle active button
            var isActive = document.querySelector('.pagination-item--active a');
            if (isActive.attributes.href) {
                isActive.attributes.removeNamedItem('href');
            } else {
                var paginationItemLink = document.querySelectorAll('.pagination-item-link');
                paginationItemLink[i].setAttribute('href', '#');
            }
            // handle other button
            paginationItem[i].onclick = function () {
                var content = this.querySelector('a').textContent;
                var paginationItemLink = document.querySelectorAll('.pagination-item-link');
                if (content >= 2) {
                    for (var j = 1; j <= 3; j++) {
                        paginationItemLink[j].textContent = Number(paginationItemLink[j].textContent) - 1;
                    }
                    document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                    paginationItem[2].classList.add('pagination-item--active');
                    shuffer();
                }
                if (content < 2) {
                    document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                    this.classList.add('pagination-item--active');
                }
                checkPageArrow();
            }
        } else if (i == 0 || i == paginationLength - 1) {
            var paginationItemLink = document.querySelectorAll('.pagination-item-link');
            // arrow left
            paginationItem[0].onclick = function () {
                if (document.querySelector('.pagination-item--active a').textContent == 14) {
                    document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                    paginationItem[paginationLength - 3].classList.add('pagination-item--active');
                } else if (document.querySelector('.pagination-item--active a').textContent == 2) {
                    document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                    paginationItem[1].classList.add('pagination-item--active');
                } else if (document.querySelector('.pagination-item--active a').textContent > 1) {
                    for (var j = 1; j <= 3; j++) {
                        paginationItemLink[j].textContent = Number(paginationItemLink[j].textContent) - 1;
                    }
                    shuffer();
                }
                checkPageArrow();
            }
            // arrow right
            paginationItem[paginationLength - 1].onclick = function () {
                if (document.querySelector('.pagination-item--active a').textContent == 13) {
                    document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                    paginationItem[paginationLength - 2].classList.add('pagination-item--active');
                } else if (document.querySelector('.pagination-item--active a').textContent == 1) {
                    document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                    paginationItem[2].classList.add('pagination-item--active');
                } else if (document.querySelector('.pagination-item--active a').textContent < 13) {
                    for (var j = 1; j <= 3; j++) {
                        paginationItemLink[j].textContent = Number(paginationItemLink[j].textContent) + 1;
                    }
                    shuffer();
                }
                checkPageArrow();
            }
        }
    }
}




