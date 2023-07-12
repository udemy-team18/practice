import { createSlice } from "@reduxjs/toolkit";
// 초기 상태
const initialState = {
  dots: [],
  lines: [],
  currentColor: "black",
};
// slice 생성
const drawingSlice = createSlice({
  name: "drawing",
  initialState,
  reducers: {
    addDot(state, action) {
      state.dots.push(action.payload);
    },
    addLine(state, action) {
      state.lines.push(action.payload);
    },
    setCurrentColor(state, action) {
      state.currentColor = action.payload;
    },
  },
});

export const { addDot, addLine, setCurrentColor } = drawingSlice.actions;
// export default configureStore({ reducer: drawingSlice.reducer });
export default drawingSlice.reducer;
