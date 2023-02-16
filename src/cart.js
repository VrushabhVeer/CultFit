let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

console.log(cartArr);

function displayProducts() {
  document.querySelector(".left").innerHTML = "";

  cartArr.map(function (el, i) {
    let product = document.createElement("div");
    product.setAttribute("id", "product");

    let img = document.createElement("img");
    img.setAttribute("src", el.image);
    img.setAttribute("class", "productImage");

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

    let inc = document.createElement("button");
    inc.textContent = "+";
    inc.addEventListener("click", function () {
      increaseQuant(i);
    });

    let dec = document.createElement("button");
    dec.textContent = "-";
    dec.addEventListener("click", function () {
      decreaseQuant(i);
    });

    let qtyNo = document.createElement("div");
    qtyNo.innerText = "Qty : " + el.quant;

    let qty = document.createElement("div");
    qty.setAttribute("class", "qty");
    qty.append(inc, qtyNo, dec);

    rightTop.append(brand, deleteicon);
    rightDiv.append(rightTop, category, price, qty);

    product.append(leftdiv, rightDiv);

    document.querySelector(".left").append(product);
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

function increaseQuant(i) {
  cartArr[i].quant++;
  localStorage.setItem("cart", JSON.stringify(cartArr));
  displayProducts(cartArr);
  Total();
}

function decreaseQuant(i) {
  cartArr[i].quant--;
  localStorage.setItem("cart", JSON.stringify(cartArr));
  displayProducts(cartArr);
  Total();
}

function deleteItem(i) {
  cartArr.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cartArr));
  displayProducts(cartArr);
  Total();

  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
