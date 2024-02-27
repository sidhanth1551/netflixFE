import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    moviePlayingFlag: false,
    moviePlaying: null,
  },
  reducers: {
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    addPopularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },
    addUpcomingMovies: (state, actions) => {
      state.upcomingMovies = actions.payload;
    },
    addTopRatedMovies: (state, actions) => {
      state.topRatedMovies = actions.payload;
    },
    addMoviePlaying: (state, actions) => {
      state.moviePlayingFlag = actions.payload.moviePlayingFlag;
      state.moviePlaying = actions.payload.moviePlaying;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addMoviePlaying,
} = movieSlice.actions;

export default movieSlice.reducer;
