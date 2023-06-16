let Clock = document.getElementById('clock');

function clock() {
  const date = new Date();
  let hour = String(date.getHours()).padStart(2, '0');
  let min = String(date.getMinutes()).padStart(2, '0');
  let sec = String(date.getSeconds()).padStart(2, '0');
  Clock.innerText = `${hour}:${min}:${sec}`;
}
setInterval(clock, 1000);
clock();
