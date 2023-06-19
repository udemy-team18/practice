// 상품 추가 버튼 이벤트 처리
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.querySelector(".cart-items");

console.log(addToCartButtons);
console.log(cartItemsList);

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName =
      button.previousElementSibling.previousElementSibling.textContent;
    const productPrice = button.previousElementSibling.textContent;
    addToCart(productName, productPrice);
  });
});

// 장바구니에 상품 추가
function addToCart(name, price) {
  const cartItem = document.createElement("li");
  cartItem.textContent = `${name} - ${price}`;
  cartItemsList.appendChild(cartItem);
}
