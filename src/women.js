let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

function getData() {
  fetch("https://cult-am5d.onrender.com/women")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      appendData(res);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
getData();

let container = document.querySelector("#container");

function appendData(data) {
  data.map(function (el, i) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", el.image);

    let brand = document.createElement("p");
    brand.setAttribute("class", "brand");
    brand.innerText = el.brand;

    let category = document.createElement("p");
    category.setAttribute("class", "category");
    category.innerText = el.category;

    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "innerDiv");

    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.innerText = "₹ " + el.price;

    let ogPrice = document.createElement("p");
    ogPrice.setAttribute("class", "og");
    ogPrice.innerText = el.ogPrice;

    let off = document.createElement("p");
    off.setAttribute("class", "off");
    off.innerText = el.offer;

    let cartBtn = document.createElement("button");
    cartBtn.innerText = "Add to Cart";
    cartBtn.addEventListener("click", function () {
      addToCart(el);
    });

    innerDiv.append(price, ogPrice, off);

    div.append(image, brand, category, innerDiv, cartBtn);

    container.append(div);
  });
}

function addToCart(el) {
  console.log(el);
  el.quant = 1;
  cartArr.push(el);
  console.log(cartArr);
  localStorage.setItem("cart", JSON.stringify(cartArr));

  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
