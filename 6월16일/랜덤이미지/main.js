let Img = document.getElementById('img');

function random() {
  const images = ['2.jpg', '3.jpg', '4.jpeg', '키카.jpeg'];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  Img.src = `img/${chosenImage}`;
}
random();
