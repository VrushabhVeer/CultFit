document.querySelector("#form").addEventListener("submit", formSubmit);

let addressArr = JSON.parse(localStorage.getItem("address")) || [];

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

function formSubmit(event) {
  event.preventDefault();

  let addressObj = {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    street: document.querySelector("#street").value,
    apt: document.querySelector("#apt").value,
    zip: document.querySelector("#zip").value,
    street: document.querySelector("#street").value,
    city: document.querySelector("#city").value,
    state: document.querySelector("#state").value,
    mobile: document.querySelector("#mobile").value,
  };

  addressArr.push(addressObj);
  localStorage.setItem("address", JSON.stringify(addressArr));
  window.location = "./payment.html";
}

// left

console.log(cartArr);

function displayProducts() {
  document.querySelector(".innerLeft").innerHTML = "";

  cartArr.map(function (el, i) {
    let product = document.createElement("div");
    product.setAttribute("id", "product");

    let img = document.createElement("img");
    img.setAttribute("src", el.image);

    let leftdiv = document.createElement("div");
    leftdiv.setAttribute("class", "productLeft");
    leftdiv.append(img);

    let rightDiv = document.createElement("div");
    rightDiv.setAttribute("class", "productRight");

    let rightTop = document.createElement("div");
    rightTop.setAttribute("class", "productRightTop");

    let brand = document.createElement("p");
    brand.setAttribute("class", "brand");
    brand.textContent = el.brand;

    var deleteicon = document.createElement("i");
    deleteicon.className = "fa-solid fa-xmark";
    deleteicon.addEventListener("click", function () {
      deleteItem(i);
    });

    let category = document.createElement("p");
    category.setAttribute("class", "category");
    category.textContent = el.category;

    let price = document.createElement("p");
    category.setAttribute("class", "price");
    price.textContent = "₹ " + el.price;

    let qtyNo = document.createElement("div");
    qtyNo.innerText = "Qty : " + el.quant;

    rightTop.append(brand, deleteicon);
    rightDiv.append(rightTop, category, price, qtyNo);

    product.append(leftdiv, rightDiv);

    document.querySelector(".innerLeft").append(product);
  });
}

displayProducts(cartArr);

function Total() {
  var cartTotal = cartArr.reduce(function (acc, el, i) {
    return acc + el.price * el.quant;
  }, 0);

  document.querySelector(".total").innerText = cartTotal;
}
Total();

function deleteItem(i) {
  cartArr.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  displayProducts(cartArr);
  Total();
}
