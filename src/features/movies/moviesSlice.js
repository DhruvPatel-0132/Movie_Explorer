import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMoviesFromAPI } from "../../api/omdbApi";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().movies;
    const { searchTerm, page } = state;

    try {
      const data = await fetchMoviesFromAPI(searchTerm, page);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  watchlist: [],
  searchTerm: "",
  movies: [],
  status: "idle",
  error: null,
  page: 1,
  totalResults: 0,
  hasMore: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const exists = state.watchlist.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (!exists) {
        state.watchlist.push({ ...action.payload, watched: false });
      }
    },

    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },

    toggleWatched: (state, action) => {
      const movie = state.watchlist.find(
        (m) => m.imdbID === action.payload
      );
      if (movie) movie.watched = !movie.watched;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.movies = [];
      state.page = 1;
      state.totalResults = 0;
      state.hasMore = true;
    },

    resetMovies: (state) => {
      state.movies = [];
      state.page = 1;
      state.totalResults = 0;
      state.hasMore = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.movies = [...state.movies, ...action.payload.movies];
        state.totalResults = action.payload.totalResults;

        state.page += 1;

        if (state.movies.length >= state.totalResults) {
          state.hasMore = false;
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  addToWatchlist,
  removeFromWatchlist,
  toggleWatched,
  setSearchTerm,
  resetMovies,
} = movieSlice.actions;

export default movieSlice.reducer;