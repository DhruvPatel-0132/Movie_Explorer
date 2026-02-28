import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import moviesReducer from '../features/movies/moviesSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer
  },
});

export default store