import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalQuantity:0,
  totalAmount: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalAmount += item.price;
      state.totalQuantity++;
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      item.quantity++;
      state.totalAmount += item.price;
      state.totalQuantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
       if(item.quantity>1){
        item.quantity--;
        state.totalAmount -= item.price;
        state.totalQuantity--;
     }
    
    },
    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalAmount -= item.price * item.quantity;
      state.totalQuantity -= item.quantity;
    },
    checkout: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  checkout,
} = CartSlice.actions;
export default CartSlice.reducer;
