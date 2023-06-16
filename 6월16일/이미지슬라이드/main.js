let Img = document.getElementById('img');
const images = ['2.jpg', '3.jpg', '4.jpeg', '키카.jpeg'];

// function leftRandom() {
//   const images = ['2.jpg', '3.jpg', '4.jpeg', '키카.jpeg'];
//   for(let i=0; i<images.length; i++){

//   }
//   const chosenImage = images[0] - 1;
//   Img.src = `img/${chosenImage}`;
// }

// function rightRandom() {
//   const images = ['2.jpg', '3.jpg', '4.jpeg', '키카.jpeg'];
//   const chosenImage = images[0] + 1;
//   Img.src = `img/${chosenImage}`;
// }

for (let i = 0; i <= images.length; i++) {
  Img.src = `img/${images[i]}`;
}
