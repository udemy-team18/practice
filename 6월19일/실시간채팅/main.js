const Send = document.getElementById('send');
const UserInput = document.getElementById('userInput');
const ContentInput = document.getElementById('contentInput');
const Chart = document.getElementById('chart');

Send.addEventListener('click', (event) => {
  const userName = UserInput.value;
  const userContent = ContentInput.value;
  if (userName == '' || userContent == '') {
    window.alert('내용을 입력해주세요');
  } else {
    event.preventDefault();
    const Div = document.createElement('div');
    Div.textContent = `${userName}: ${userContent}`;
    Chart.appendChild(Div);
    UserInput.value = '';
    ContentInput.value = '';
  }
});
