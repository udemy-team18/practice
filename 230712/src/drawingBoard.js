import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDot, addLine, setCurrentColor } from "./drawingSlice";
const DrawingBoard = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const currentColor = useSelector((state) => state.drawing.currentColor);
  const dispatch = useDispatch();

  const handleMouseDown = (event) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { offsetX, offsetY } = event.nativeEvent;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    setStartCoords({ x: offsetX, y: offsetY });
  };
  const handleMouseMove = (event) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { offsetX, offsetY } = event.nativeEvent;
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = currentColor;
    ctx.stroke();
  };
  const handleMouseUp = (event) => {
    setIsDrawing(false);
    const { offsetX, offsetY } = event.nativeEvent;
    dispatch(addLine({ start: startCoords, end: { x: offsetX, y: offsetY } }));
  };
  const handleMouseClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    dispatch(addDot({ x: offsetX, y: offsetY }));
  };
  const handleColorChange = (event) => {
    const newColor = event.target.value;
    dispatch(setCurrentColor(newColor));
  };
  return (
    <div>
      <div>
        <input type="color" onChange={handleColorChange} />
      </div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleMouseClick}
      />
    </div>
  );
};
export default DrawingBoard;
