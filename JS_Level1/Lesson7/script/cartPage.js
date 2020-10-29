actualCart.render();

const proceedToCheckoutDiv = document.createElement("div");
proceedToCheckoutDiv.classList.add("center");

const proceedToCheckoutBtn = document.createElement("input");
proceedToCheckoutBtn.setAttribute("type", "button");
proceedToCheckoutBtn.classList.add("btn__buy", "center");
proceedToCheckoutBtn.value = "Оформить покупку >>";

proceedToCheckoutDiv.appendChild(proceedToCheckoutBtn);
document.querySelector(".content").appendChild(proceedToCheckoutDiv);
