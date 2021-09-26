import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  friends: [],
  friendsDetail: null,
};

const social = createSlice({
  name: "social",
  initialState,
  reducers: {
    addUsers: (state, { payload }) => {
      state.user = payload;
    },
    addFriend: (state, { payload }) => {
      const storedCount = state.friends.findIndex(
        (item) => item.id === payload.id
      );

      if (storedCount >= 0) {
        state.friends[storedCount].QTY += 1;
      } else {
        const storedFile = { ...payload, QTY: 1 };
        state.friends.push(storedFile);
      }
    },
    remove: (state, { payload }) => {
      const removeItem = state.friends.filter((item) => item.id !== payload.id);
      state.friends = removeItem;
    },

    viewProfile: (state, { payload }) => {
      state.friendsDetail = payload;
    },
  },
});

export const { addUsers, addFriend, remove, viewProfile } = social.actions;
export default social.reducer;
