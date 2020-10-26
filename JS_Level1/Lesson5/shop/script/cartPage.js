const newCart = new Cart();
cart = JSON.parse(localStorage.getItem("cart"));

for (const product of cart._items) {
  newCart.addItem(
    new Product(
      product._name,
      product._price,
      product._quantity,
      product._imgUrl
    )
  );
}

console.log(newCart);

newCart.render();

const proceedToCheckoutDiv = document.createElement("div");
proceedToCheckoutDiv.classList.add("center");

const proceedToCheckoutBtn = document.createElement("input");
proceedToCheckoutBtn.setAttribute("type", "button");
proceedToCheckoutBtn.classList.add("btn__buy", "center");
proceedToCheckoutBtn.value = "Оформить покупку >>";

proceedToCheckoutDiv.appendChild(proceedToCheckoutBtn);
document.querySelector(".content").appendChild(proceedToCheckoutDiv);
