import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  friends: [],
  friendsDetail: null,
  cart: [],
};

const friendSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
    addFriend: (state, { payload }) => {
      const storeFrd = { ...payload, QTY: 1 };
      state.friends.push(storeFrd);
    },
    viewFrdDatil: (state, { payload }) => {
      state.friendsDetail = payload;
    },

    addToCart: (state, { payload }) => {
      const storedCart = state.cart.findIndex((item) => item.id === payload.id);

      if (storedCart >= 0) {
        state.cart[storedCart].QTY = +1;
      } else {
        const tempCart = { ...payload, QTY: 1 };
        state.cart = tempCart;
      }
    },
  },
});

export const { addUser, addFriend } = friendSlice.actions;
export default friendSlice.reducer;
