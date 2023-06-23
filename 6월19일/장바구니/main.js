let first = document.getElementById('first');
let second = document.getElementById('second');
let list = document.getElementById('list');
let buttons = document.querySelectorAll('#buttons');

// const apple = () => {
//   const Li = document.createElement('li');
//   Li.innerText = first.textContent;
//   list.appendChild(Li);
// };

// const banana = () => {
//   const Li = document.createElement('li');
//   Li.innerText = second.textContent;
//   list.appendChild(Li);
// };

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let name = button.previousSibling.previousSibling.textContent;
    let price = button.previousSibling.textContent;
    addToCart(name, price);
  });
});

const addToCart = (name, price) => {
  const Li = document.createElement('li');
  Li.textContent = `${name} ${price}`;
  list.appendChild(Li);
};
