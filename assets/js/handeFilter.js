// 2. Xáo Trộn Dữ Liệu:
function shuffer() {
  fetch(dataUrl)
      .then(response => response.json())
      .then(list => {
          list = list.sort(() => Math.random() - 0.5)
          return list;
      })
      .then(renderItem)
      .then(responsive)
      .then(handlePagination)
}


function sortDataPriceUp() {
  fetch(dataUrl)
      .then(response => response.json())
      .then(list => {
          // Sắp xếp theo trường 'newPrice' từ nhỏ đến lớn
          list = list.sort((a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice));
          return list;
      })
      .then(renderItem)
      .then(responsive)
      .then(handlePagination)
}


function sortDataPriceDown() {
  fetch(dataUrl)
      .then(response => response.json())
      .then(list => {
          // Sắp xếp theo trường 'newPrice' từ lớn đến nhỏ
          list = list.sort((a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice));
          return list;
      })
      .then(renderItem)
      .then(responsive)
      .then(handlePagination)
}

function selling() {
  fetch(dataUrl)
      .then(response => response.json())
      .then(list => {
          // Sắp xếp theo trường 'saled' từ lớn đến nhỏ
          list = list.sort((a, b) => parseFloat(b.saled) - parseFloat(a.saled));
          return list;
      })
      .then(renderItem)
      .then(responsive)
      .then(handlePagination)
}



// Hande Sort header :
var homeFilter = document.querySelectorAll('.home-filter-btn');

for (var i = 0; i < 2; i++) {
    homeFilter[i].onclick = function () {
        var homeFilterActive = document.querySelector('.home-filter-btn.btn--primary');
        homeFilterActive.classList.remove('btn--primary');
        this.classList.add('btn--primary');
        shuffer();
    }
}

var selling = document.getElementById("saled");

selling.onclick = function(){
    var homeFilterActive = document.querySelector('.home-filter-btn.btn--primary');
    homeFilterActive.classList.remove('btn--primary');
    this.classList.add('btn--primary');
    selling();
}

var homeFilterSortDown = document.getElementById("sort_down");
var homeFilterSortUp = document.getElementById("sort_up");

homeFilterSortDown.onclick = function () {
    sortDataPriceDown();
}

homeFilterSortUp.onclick = function () {
    sortDataPriceUp();
}

var homeFilterPage = document.querySelectorAll('.home-filter-page-btn');

homeFilterPage[0].onclick = function () {
    var currentPage = document.querySelector('.home-filter-page-now');
    if (currentPage.textContent != 1) {
        currentPage.textContent = Number(currentPage.textContent) - 1;
        shuffer();
    }
    if (currentPage.textContent != 14) {
        homeFilterPage[1].classList.remove('home-filter-page-btn--disable');
    }
    if (currentPage.textContent == 1) {
        homeFilterPage[0].classList.add('home-filter-page-btn--disable');
    }
}
homeFilterPage[1].onclick = function () {
    var currentPage = document.querySelector('.home-filter-page-now');
    if (currentPage.textContent != 14) {
        currentPage.textContent = Number(currentPage.textContent) + 1;
        shuffer();
    }
    if (currentPage.textContent != 1) {
        homeFilterPage[0].classList.remove('home-filter-page-btn--disable');
    }
    if (currentPage.textContent == 14) {
        homeFilterPage[1].classList.add('home-filter-page-btn--disable');
    }
}
