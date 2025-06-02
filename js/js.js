//items-list
const cart = JSON.parse(localStorage.getItem("CartArray")) || [];
function tabingChange(Section) {
    let btnsArray = Array.from(
      document.querySelectorAll(`${Section} .tabs button`)
    );
    let superArray = Array.from(
      document.querySelectorAll(`${Section} .items-list`)
    );
    var i = 0;
    btnsArray.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        btnsArray.forEach((b) => {
          b.setAttribute("data-show", "false");
        });
        i = btnsArray.indexOf(btn);
        superArray.forEach((arr) => {
          arr.classList.replace("d-flex", "d-none");
        });
        e.target.setAttribute("data-show", "true");
        superArray[i].classList.replace("d-none", "d-flex");
      });
    });
  }
tabingChange("#super");
tabingChange("#newArrival");

// Cart //
const numWish = document.querySelector(".num-wish");
const numCart = document.querySelector(".num-cart");
let addBtns = document.querySelectorAll(".btn-add");
let favBtns = document.querySelectorAll(".fav");
const wish = JSON.parse(localStorage.getItem("WishArray")) || [];

addBtns.forEach((btn, ind) => {
  btn.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn-remove")) {
      let item = {
        id: ind,
        name: `${e.target.parentElement.children[1].children[2].children[0].innerHTML}`,
        price: `${e.target.parentElement.children[1].children[0].innerHTML}`,
        cat: `${e.target.parentElement.children[1].children[1].innerHTML}`,
        count: 1,
        imgSrc: `${e.target.parentElement.children[0].children[0].getAttribute(
          "src"
        )}`,
      };

      cart.push(item);
      localStorage.setItem("CartArray", JSON.stringify(cart));
      e.target.classList.add("btn-remove");
      e.target.innerHTML = "Remove Cart";
      displayCart();
    } else {
      cart.splice(cart[cart.find((obj) => obj.id === ind)], 1);
      localStorage.setItem("CartArray", JSON.stringify(cart));
      e.target.classList.remove("btn-remove");
      e.target.innerHTML = "Add Cart";
      displayCart();
    }
  });
});
let numOfCart = 0;
addBtns.forEach((btn, ind) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart.find((obj) => obj.id === ind)) {
      btn.classList.add("btn-remove");
      btn.innerHTML = "Remove Cart";
    }
  }
});
let totalPriceText = document.querySelector(".total-price");
function displayCart() {
  let totalPrice = 0;
  numOfCart = cart.length;
  numCart.innerHTML = numOfCart;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price.substring(1) * cart[i].count;
  }
  totalPriceText.innerHTML = "$ " + totalPrice;
}

displayCart();

// Wish 
// favBtns.forEach((btn, ind) => {
//   btn.addEventListener("click", (e) => {
//     if (!e.target.parentElement.classList.contains("wish-remove")) {
//       let item = {
//         id: ind,
//         name: `${e.target.parentElement.parentElement.children[4].children[0].innerHTML}`,
//         price: `${e.target.parentElement.parentElement.children[4].children[1].innerHTML}`,
//         cat: `${e.target.parentElement.parentElement.children[3].innerHTML}`,
//         imgSrc: `${e.target.parentElement.parentElement.children[2].getAttribute(
//           "src"
//         )}`,
//       };
//       wish.push(item);
//       localStorage.setItem("WishArray", JSON.stringify(wish));
//       e.target.parentElement.classList.add("wish-remove");
//       e.target.parentElement.innerHTML =
//         "<i class='fa-solid fa-heart-crack'></i>";
//       displayWish();
//     } else {
//       wish.splice(wish[wish.find((obj) => obj.id === ind)], 1);
//       e.target.parentElement.classList.remove("wish-remove");
//       localStorage.setItem("WishArray", JSON.stringify(wish));
//       e.target.parentElement.innerHTML = "<i class='fa-solid fa-heart'></i>";
//       displayWish();
//     }
//   });
// });

// let numOfWish = 0;
// favBtns.forEach((btn, ind) => {
//   for (let i = 0; i < wish.length; i++) {
//     if (wish.find((obj) => obj.id === ind)) {
//       btn.classList.add("wish-remove");
//       btn.innerHTML = "<i class='fa-solid fa-heart-crack'></i>";
//     }
//   }
// });
// function displayWish() {
//   numOfWish = wish.length;
//   numWish.innerHTML = numOfWish;
// }
// displayWish();

// trending
const nextBtn = document.querySelector(".next-trend-btn")
const prevBtn = document.querySelector(".prev-trend-btn")
const trendFlex = document.querySelector(".trend-flex")
let x = 0;
nextBtn.addEventListener("click", () => {
  x += 100;
  if(window.screen.width < 550){
    if(x > trendFlex.clientWidth - 250){
      x = trendFlex.clientWidth - 250
    }
  }else if(window.screen.width > 950){
    if(x > trendFlex.clientWidth - 600){
      x = trendFlex.clientWidth - 600
    }
  }else{
    if( trendFlex.clientWidth - 800){
      x = trendFlex.clientWidth - 800
    }
  }
  trendFlex.style.transform = `translateX(${-x}px)`
})
prevBtn.addEventListener("click", () => {
  x -=100;
  if(x < 0){
    x = -50
  }
  trendFlex.style.transform = `translateX(${-x}px)`
})


// arrowUp scroll
const arrowUp = document.querySelector(".arrow-Up")
const homeScroll = document.getElementById("home")
window.addEventListener("scroll", () => {
  homeScroll.getBoundingClientRect().bottom < 0
    ? arrowUp.classList.add("show-arrow")
    : arrowUp.classList.remove("show-arrow");
})


// loading
const loadingDiv = document.querySelector(".loading-page")
window.onload = function(){
  loadingDiv.classList.replace("opacity-1", "opacity-0")
  setTimeout(function(){
    loadingDiv.classList.add("d-none")
  }, 500)
}

// Brands scrolling
// const brandScroll = document.querySelector(".brand-flex")
// const brandsInner = Array.from(brandScroll.children)
// brandsInner.forEach((brandI) => {
//   const dup1 = brandI.cloneNode(true)
//   brandScroll.appendChild(dup1)
// })


