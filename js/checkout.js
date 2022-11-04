let amountInput = $(".checkout_amount_input");
let price = $("#product-price");
let amountInputValue = Number(amountInput.val());
let productPrice = 8;

$("#checkout-plus").click(function () {
    priceCalculator(true);
});
$("#checkout-minus").click(function () {
    priceCalculator(false);
});
function priceCalculator(isPlus) {
    if (typeof isPlus == "boolean") {
        if (isPlus) {
            amountInputValue = Number(amountInputValue) + 1;
        } else {
            amountInputValue =
                Number(amountInputValue) - 1 > 0
                    ? Number(amountInputValue) - 1
                    : 0;
        }
    } else {
        amountInputValue = isPlus;
    }
    amountInput.val(amountInputValue);
    price.text("€" + amountInputValue * productPrice + ".");
}
amountInput.change(function () {
    priceCalculator(amountInput.val());
});
