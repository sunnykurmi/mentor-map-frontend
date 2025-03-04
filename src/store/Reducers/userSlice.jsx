import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  error: null, // Include error state
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    allcities(state, action) {
      state.cities = action.payload;
      state.error = null;
    },
    allpartners(state, action) {
      state.partner = action.payload;
      state.error = null;
    },
    allroadmap(state, action) {
      state.roadmap = action.payload;
      state.error = null;
    },
    saveUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.error = null; // Reset error when saving user
    },
    removeUser: (state, action) => {
      state.user = null;
      state.isAuth = false;
      state.error = null; // Reset error when removing user
    },
    signuperror: (state, action) => {
      state.error = action.payload; // Set error when signup fails
    },
    signinerror: (state, action) => {
      state.error = action.payload; // Set error when signup fails
    },

    createcity(state, action) {
      state.data = action.payload;
      state.error = null;
    },

    deletecity(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    editcity(state, action) {
      state.data = action.payload;
      state.error = null;
    },

    studentform(state, action) {
      state.data = action.payload;
      state.error = null;
    },
    partnerform(state, action) {
      state.data = action.payload;
      state.error = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  allcities,
  allpartners,
  saveUser,
  signinerror,
  removeUser,
  signuperror,
  createcity,
  deletecity,
  editcity,
  allroadmap,
  studentform,
  partnerform

} = userSlice.actions;

export default userSlice.reducer;
