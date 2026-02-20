// Toggle class active untuk humberger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchButton = document.querySelector('#search-button');
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault(); // hilangkan aksi default tag a/ button submit
}

// Toggle class active untuk Shopping cart
const cartButton = document.querySelector('#shopping-cart-button');
const containerCart = document.querySelector('.shopping-cart');
cartButton.onclick = (e) => {
  containerCart.classList.toggle("active");
  e.preventDefault();
}


// klik di luar elemen
const hamburger = document.querySelector("#hamburger-menu"); // Tolong carikan elemen yang nama selectornya adalah #hamburger-menu atau yang idnya #hamburger-menu
const searchBtn = document.querySelector('#search-button');

document.addEventListener("click", function(e) {
  // jika yg diklik bukan hamburger dan navbar
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  
  // jika yg diklik bukan tombol search dan form search/input
  if(!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // jika yg diklik bukan tombol cart dan container cart
  if(!cartButton.contains(e.target) && !containerCart.contains(e.target)) {
    containerCart.classList.remove("active");
  }
});


// Modal
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');
const closeButton = document.querySelector('.modal .close-icon');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    console.log('tes')
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// itemDetailButton.onclick = (e) => {
//   itemDetailModal.style.display = "flex";
//   e.preventDefault();
// }

// klik tombol icon
closeButton.onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
}

// klik di luar modal
 window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
 }
