import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return (state = [...state, action.payload]);
    },
    removeFromCart: (state, action) => {
      const { CartItem, id } = action.payload;
      return (state = CartItem.filter((item, index) => index !== id));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
