import React, { useRef, useState } from 'react';
import Practice4 from './components/Practice4';
import Timer from './components/Timer';
import Log from './components/Log';
import img1 from './images/2.jpg';
import img2 from './images/3.jpg';
import img3 from './images/4.jpeg';

function App() {
  const [login, setLogin] = useState(true);
  const [todo, setTodo] = useState([]);
  const [random, setRandom] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [imgList, setImgList] = useState([]);

  const info1 = useRef();
  const info2 = useRef();
  const todoText = useRef();

  const todos = [
    { id: 0, text: '할일' },
    { id: 1, text: '할일1' },
    { id: 2, text: '할일2' },
    { id: 3, text: '할일3' },
  ];

  const loginBtn = (e) => {
    e.preventDefault();
    if (info1.current.value === 'admin' && info2.current.value === 'password') {
      setLogin((current) => !current);
    } else {
      window.alert('로그인 정보가 옳바르지 않습니다');
      info1.current.value = '';
      info2.current.value = '';
      return;
    }
  };

  const todoBtn = () => {
    let newTodo = todoText.current.value;
    setTodo([...todo, newTodo]);
    todoText.current.value = '';
  };

  const myNumber1 = (e) => {
    let min = e.target.value;
    setMin(min);
  };

  const myNumber2 = (e) => {
    let max = e.target.value;
    setMax(max);
    console.log(typeof max);
  };
  function pickRandomNum() {
    let computerNum =
      Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
    setRandom(computerNum);
  }

  const images = [img1, img2, img3];
  const imgNum = images.length;
  const beforeImg = images[imgNum - 1];
  const afterImg = images[0];

  const prevButton = () => {};
  const nextButton = () => {};

  return (
    <>
      <div>안녕</div>
      <Practice4 todos={todos} />
      <Timer />

      <div>
        <h1>login</h1>
        {login ? (
          <form action=''>
            <div>
              사용자명:
              <input type='text' ref={info1} />
            </div>
            <div>
              비밀번호:
              <input type='text' ref={info2} />
            </div>
            <button onClick={loginBtn}>로그인</button>
          </form>
        ) : (
          <Log />
        )}
      </div>

      <div>
        <h1>Todo</h1>
        <input type='text' ref={todoText} />
        <button onClick={todoBtn}>추가</button>
        <ul>
          {todo.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      <br />

      <div>
        <h1>숫자랜덤생성기</h1>
        <div>
          최소값 생성 <input type='text' value={min} onChange={myNumber1} />
        </div>
        <div>
          최대값 생성 <input type='text' value={max} onChange={myNumber2} />
        </div>
        <button onClick={pickRandomNum}>램덤숫자뽑기</button>
        <div>짠!!!! {random}</div>
      </div>

      <div>
        <h1>슬라이드이미지</h1>
        <button onClick={prevButton}>🔙</button>
        <img src='' alt='' />
        <button onClick={nextButton}>🔜</button>
      </div>
    </>
  );
}

export default App;
