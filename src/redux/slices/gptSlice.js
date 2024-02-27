import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    searchedMovies: null,
    movieNames: null,
  },
  reducers: {
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload.movieDetails;
      state.movieNames = action.payload.movieNames;
    },
  },
});

export const { addSearchedMovies } = gptSlice.actions;

export default gptSlice.reducer;
