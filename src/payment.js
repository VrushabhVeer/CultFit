let address = JSON.parse(localStorage.getItem("address"));

console.log(address);

function displayAddress(address) {
  document.querySelector(".first").textContent =
    "Name : " + address[0].firstName;
  document.querySelector(".last").textContent = address[0].lastName;
  document.querySelector(".street").textContent =
    "Street : " + address[0].street;
  document.querySelector(".apt").textContent = "Apt/House : " + address[0].apt;
  document.querySelector(".city").textContent = address[0].city + ",";
  document.querySelector(".zip").textContent = address[0].zip;
  document.querySelector(".state").textContent = address[0].state;
  document.querySelector(".mobile").textContent =
    "Mobile No : " + address[0].mobile;
}

displayAddress(address);
