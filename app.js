////////////// Elements selector
let plusBtn = document.querySelector(".plus-btn");
let minusBtn = document.querySelector(".minus-btn");
let deleteBtn = document.querySelectorAll(".delete-btn");
let displayImg__2 = document.querySelector(".display-img__2");

let counter = document.querySelector(".counter");
let addToCartBtn = document.querySelector(".add-to-cart-btn");
let cart = document.querySelector(".cart");
let nbItems = document.querySelector(".cart-item-number");
let imgs = document.querySelectorAll(".thumbnail-img");
let displayImg = document.querySelector(".display-img");
let itemsContainer = document.querySelector(".purshased-items");
let checkoutBtn = document.querySelector(".checkout-btn");
let emptyLabel = document.querySelector(".empty-label");
let price = document.querySelector(".price");
let chariotIcon = document.querySelector(".chariot-icon");
let menuBtn = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu-slide");
let closeBtn = document.querySelector(".close-icon");

let purshasedItems = [];

function add() {
  plusBtn.addEventListener("click", function () {
    document
      .querySelector(".chariot-icon-container")
      .classList.remove("tilt-shaking");
    counter.textContent++;
  });
}
function remove() {
  minusBtn.addEventListener("click", function () {
    document
      .querySelector(".chariot-icon-container")
      .classList.remove("tilt-shaking");
    if (counter.textContent > 0) counter.textContent--;
  });
}
function addToCart(purshasedItems) {
  addToCartBtn.addEventListener("click", function () {
    if (counter.textContent * 1 > 0) {
      nbItems.textContent = nbItems.textContent * 1 + counter.textContent * 1;
      if (document.querySelector(".cart").classList.contains("hidden")) {
        document
          .querySelector(".chariot-icon-container")
          .classList.add("tilt-shaking");
      }
      const priceNumber = Number(
        price.textContent.slice(-price.textContent.length + 1)
      );
      item = {
        src: displayImg.src,
        quantity: counter.textContent * 1,
        price: priceNumber.toFixed(2),
        total: (counter.textContent * priceNumber).toFixed(2),
      };
      purshasedItems.push(item);
      counter.textContent = "0";
      displayPurshasedItems(purshasedItems);
    } else {
      alert("Please choose the number of items!");
    }
  });
}
function addActiveImg(imgs, displayImg) {
  displayImg = document.querySelector(".current-display-img");
  console.log(displayImg);
  imgs.forEach((img, i) => {
    img.addEventListener("click", (e) => {
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove("active-img");
      }
      img.classList.add("active-img");
      console.log(displayImg);
      displayImg.src = `images/image-product-${i + 1}.jpg`;
      console.log(displayImg.src);
    });
  });
}
function deleteItem() {
  deleteBtn = itemsContainer.querySelectorAll(".delete-btn");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      id = Number(e.target.closest("div").id);

      nbItems.textContent -= purshasedItems[id].quantity;
      purshasedItems.splice(id, 1);
      displayPurshasedItems(purshasedItems);
    });
  });
}
function displayCart() {
  chariotIcon.addEventListener("click", function () {
    //deleteItem();
    if (cart.classList.contains("hidden")) cart.classList.remove("hidden");
    else {
      cart.classList.add("hidden");
    }
  });
}
function displayPurshasedItems(purshasedItems) {
  if (purshasedItems.length === 0) {
    itemsContainer.innerHTML = "";
    emptyLabel.classList.remove("hidden");
    checkoutBtn.classList.add("hidden");
  } else {
    itemsContainer.innerHTML = "";

    purshasedItems.forEach((item, index) => {
      const itemHTML = `
      <div id="${index}" class="purshased-item">
            <img
              class="purshased-item-img"
              src="images/image-product-1-thumbnail.jpg"
              alt=""
            />
            <div class="item-text">
              <p>Fall Limited Edition Sneakers</p>
              <p>$${item.price} x ${item.quantity}<span class="span">$${item.total}</span></p>
            </div>
            <button class="delete-btn">
            <img
              src="images/icon-delete.svg"
              alt="delete icon"
            />
            </button>
          </div>
    `;
      itemsContainer.insertAdjacentHTML("afterbegin", itemHTML);
    });
    emptyLabel.classList.add("hidden");
    checkoutBtn.classList.remove("hidden");
  }
  deleteItem();
}
function reload() {
  let menu = document.querySelector(".menu-slide");
  let plusBtn = document.querySelector(".plus-btn");
  let minusBtn = document.querySelector(".minus-btn");
  let deleteBtn = document.querySelectorAll(".delete-btn");
  let counter = document.querySelector(".counter");
  let addToCartBtn = document.querySelector(".add-to-cart-btn");
  let cart = document.querySelector(".cart");
  let nbItems = document.querySelector(".cart-item-number");
  let imgs = document.querySelectorAll(".thumbnail-img");
  let displayImg = document.querySelector(".display-img");
  let itemsContainer = document.querySelector(".purshased-items");
  let checkoutBtn = document.querySelector(".checkout-btn");
  let emptyLabel = document.querySelector(".empty-label");
  let price = document.querySelector(".price");
  let chariotIcon = document.querySelector(".chariot-icon");
  let forwardBtn = document.querySelector(".forward");
  let backwardBtn = document.querySelector(".backward");
  let menuBtn = document.querySelector(".menu-icon");
  let closeBtn = document.querySelector(".close-icon");
}
function displaySlider() {
  let displayImg = document.querySelector(".display-img");
  displayImg.addEventListener("click", function () {
    document.querySelector(".slider").classList.remove("hidden");
  });
  document.querySelector(".bg").addEventListener("click", function () {
    document.querySelector(".slider").classList.add("hidden");
  });
  addActiveImg(document.querySelectorAll(".thumbnail-img__2"), displayImg__2);
}
function displayMenu() {
  let menuBtn = document.querySelector(".menu-icon");
  let menu = document.querySelector(".menu-slide");
  let closeBtn = document.querySelector(".close-icon");
  menuBtn.addEventListener("click", function () {
    menu.classList.remove("hidden");
    menu.style.transform = `translateX(-3%)`;
  });
  closeBtn.addEventListener("click", function () {
    menu.style.transform = `translateX(-200%)`;
  });
}
const slider = function () {
  const slides = document.querySelectorAll(".display-img__2");
  const btnLeft = document.querySelector(".left");
  const btnRight = document.querySelector(".right");
  const littleImg = document.querySelectorAll(".thumbnail-img__2");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
      if (s.style.transform !== `translateX(0%)`) {
        s.classList.add("hidden");
        littleImg[i].classList.remove("active-img");
      } else {
        if (
          s.style.transform === `translateX(0%)` &&
          s.classList.contains("hidden")
        )
          s.classList.remove("hidden");
        littleImg[i].classList.add("active-img");
      }
    });
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
const sliderMobile = function () {
  const btnLeft = document.querySelector(".backward");
  const btnRight = document.querySelector(".forward");
  const littleImg = document.querySelectorAll(".thumbnail-img");

  // Functions
  const insertImages = function () {
    const slideContainer = document.querySelector(".display-imgs");
    slideContainer.innerHTML = "";
    for (let i = 1; i < 5; i++) {
      let html = `
                <img
            class="display-img"
            src="images/image-product-${i}.jpg"
            alt="product picture"
          />
      `;
      if (i === 1)
        html = `
                <img
            class="display-img current-display-img"
            src="images/image-product-${i}.jpg"
            alt="product picture"
            style="z-index: 99999"
          />
      `;
      slideContainer.insertAdjacentHTML("beforeend", html);
    }
  };
  let slides = document.querySelector(".display-img");
  insertImages();
  slides = document.querySelectorAll(".display-img");
  let curSlide = 0;
  const maxSlide = slides.length;
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
      if (s.style.transform !== `translateX(0%)`) {
        s.classList.add("hidden");
        littleImg[i].classList.remove("active-img");
      } else {
        if (
          s.style.transform === `translateX(0%)` &&
          s.classList.contains("hidden")
        )
          s.classList.remove("hidden");
        littleImg[i].classList.add("active-img");
      }
    });
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};

function main() {
  reload();
  add();
  remove();
  addToCart(purshasedItems);
  displayPurshasedItems(purshasedItems);
  displayCart();
  slider();
  displayMenu();
  sliderMobile();
  displaySlider();
  addActiveImg(imgs, displayImg);
}
main();
