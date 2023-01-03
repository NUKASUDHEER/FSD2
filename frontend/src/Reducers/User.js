import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  users: [],
  isLoggedOut: false,
  isUpdated: false,
  isReset: false,
  message: null,
  error: null,
};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },

  logOutRequest: (state) => {
    state.loading = true;
  },
  logOutSuccess: (state) => {
    state.loading = false;
    state.isLoggedOut = true;
    state.user = null;
    state.isAuthenticated = false;
    state.message = "Log out successfull!"
  },
  logOutFailure: (state, action) => {
    state.loading = true;
    state.isLoggedOut = false;
    state.error = action.payload;
  },


  signUpRequest: (state) => {
    state.loading = true;
  },
  signUpSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  signUpFailure: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  },

  loadUserRequest: (state) => {
    state.loading = false;
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  loadUserFailure: (state) => {
    state.loading = false;
    state.isAuthenticated = false;
  },

  updatePasswordRequest: (state) => {
    state.loading = true;
  },
  updatePasswordSuccess: (state, action) => {
    state.loading = false;
    state.isUpdated = true;
  },
  updatePasswordFailure: (state, action) => {
    state.loading = false;
    state.isUpdated = false;
    state.error = action.payload;
  },

  resetPasswordRequest: (state, action) => {
    state.loading = false;
  },
  resetPasswordSuccess: (state, action) => {
    state.loading = false;
    state.isReset = true;
  },
  resetPasswordFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  //admin
  updateUserRequest: (state) => {
    state.loading = true;
  },
  updateUserSuccess: (state) => {
    state.loading = false;
    state.isUpdated = true;
  },
  updateUserFailure: (state, action) => {
    state.loading = false;
    state.isUpdated = false;
    state.error = action.payload;
  },

  getAllUserRequest: (state) => {
    state.loading = true;
  },
  getAllUserSuccess: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },
  getAllUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  deleteUserRequest(state) {
    state.loading = true;
  },
  deleteUserSuccess(state, action) {
    state.loading = false;
    state.isDeleted = action.payload.success;
    state.message = action.payload.message;
  },
  deleteUserFail(state, action) {
    state.loading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
    state.message = null;
  },
});
