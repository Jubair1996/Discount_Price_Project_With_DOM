document.getElementById("btn-apply").addEventListener("click", function () {
  const regularPrice = getInputFiledValueById("original-price");
  const discountPrice= getInputFiledValueById("discount-price");

  const discountAmount =
    (regularPrice * discountPrice) / 100;
  const discountedPrice = regularPrice - discountAmount;

  const payPrice = document.getElementById("discount-price-display");
  payPrice.innerText = discountedPrice;
});
