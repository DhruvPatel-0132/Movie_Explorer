import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../features/movies/moviesSlice";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const { watchlist } = useSelector((state) => state.movies);

  const isInWatchlist = watchlist.some(
    (item) => item.imdbID === movie.imdbID
  );

  const handleClick = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movie.imdbID));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <div className="border rounded p-4 shadow bg-white">
      {movie.Poster !== "N/A" && (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-60 object-cover rounded mb-2"
        />
      )}

      <h3 className="font-bold">{movie.Title}</h3>
      <p className="text-sm text-gray-600">{movie.Year}</p>

      <button
        onClick={handleClick}
        className={`mt-2 px-3 py-1 rounded text-white ${
          isInWatchlist ? "bg-red-500" : "bg-green-500"
        }`}
      >
        {isInWatchlist
          ? "Remove from Watchlist"
          : "Add to Watchlist"}
      </button>
    </div>
  );
}