import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomid: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomid = action.payload.roomid;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = (state) => state.app.roomid;

export default appSlice.reducer;
