import React, { useState } from "react";
import img01 from "images/01.jpg";
import img02 from "images/02.jpg";
import img03 from "images/03.jpg";
import img04 from "images/04.jpg";
import img05 from "images/05.jpg";
function GalleryApp() {
  const images = [img01, img02, img03, img04, img05];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <div>
      <h1>이미지 슬라이더</h1>
      <button onClick={prevImage}>이전</button>
      <img
        src={images[currentImageIndex]}
        alt="Slider"
        style={{ width: "300px" }}
      />
      <button onClick={nextImage}>다음</button>
    </div>
  );
}

export default GalleryApp;
