import { useDispatch } from "react-redux";
import { addToWatchlist } from "../features/movies/moviesSlice";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

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
        onClick={() => dispatch(addToWatchlist(movie))}
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
      >
        Add to Watchlist
      </button>
    </div>
  );
}