import { useState } from "react";
import styles from "./css/Slider.module.css";
import img0 from "./images/0.jpg";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";

function Slider(props) {
  const images = [img0, img1, img2, img3, img4, img5];
  const [num, setNum] = useState(0);
  const showPreImg = () => {
    setNum((num - 1 + images.length) % images.length);
  };
  const showNextImg = () => {
    setNum((num + 1) % images.length);
  };

  return (
    <div className={styles.containerSlider}>
      <button className={styles.Btn} onClick={showPreImg}>
        이전
      </button>
      <div className={styles.slideImg}>
        <img src={images[num]} alt="slider" />
      </div>
      <button className={styles.Btn} onClick={showNextImg}>
        다음
      </button>
    </div>
  );
}

export default Slider;
