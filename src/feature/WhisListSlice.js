import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
const WhisListSlice = createSlice({
  name: "whislist",
  initialState,
  reducers: {
    addToWhisList: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push({ ...item});
      } 
    },

    removeFromWhisList: (state, action) => { 
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    checkout: (state) => {
      state.items = [];
    },
  },
});

export const {
    addToWhisList,
    removeFromWhisList,
  checkout,
} = WhisListSlice.actions;
export default WhisListSlice.reducer;
