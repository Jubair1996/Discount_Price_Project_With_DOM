document.getElementById("btn-apply").addEventListener("click", function () {
  const regularPriceInputField = document.getElementById("original-price");
  const regularPriceInputFieldValueString = regularPriceInputField.value;
  const regularPriceInputFieldValue = parseFloat(
    regularPriceInputFieldValueString
  );
  regularPriceInputField.value = " ";

  const discountPriceInputField = document.getElementById("discount-price");
  const discountPriceInputFieldValueString = discountPriceInputField.value;
  const discountPriceInputFieldValue = parseFloat(
    discountPriceInputFieldValueString
  );
  discountPriceInputField.value = " ";

  const discountAmount =
    (regularPriceInputFieldValue * discountPriceInputFieldValue) / 100;
  const discountedPrice = regularPriceInputFieldValue - discountAmount;

  const payPrice = document.getElementById("discount-price-display");
  payPrice.innerText = discountedPrice;
});
