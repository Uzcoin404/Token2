const amountInput = document.querySelectorAll(".checkout_amount_input");
const price = document.querySelectorAll("#product-price");
const plusBtn = document.querySelectorAll("#checkout-plus");
const minusBtn = document.querySelectorAll("#checkout-minus");
const productPrice = 8;

for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener("click", function () {
        priceCalculator(this.getAttribute("data-toggle"), i);
    });
    minusBtn[i].addEventListener("click", function () {
        priceCalculator(this.getAttribute("data-toggle"), i);
    });
    amountInput[i].addEventListener("change", function () {
        priceCalculator(this.value, i);
    });
}
function priceCalculator(type, index) {
    let amount = Number(amountInput[index].value);
    if (type == "plus") {
        amount = Number(amount) + 1;
    } else if (type == "minus") {
        amount = Number(amount) - 1 > 0 ? Number(amount) - 1 : 0;
    } else {
        amount = type;
    }
    amountInput[index].value = amount;
    price[index].innerHTML = "€" + amount * productPrice + ".";
}