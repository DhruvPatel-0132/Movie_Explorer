import { useDispatch } from "react-redux";
import {
  removeFromWatchlist,
  toggleWatched,
} from "../features/movies/moviesSlice";

export default function WatchlistItem({ movie }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow rounded">
      {movie.Poster !== "N/A" && (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-20 h-28 object-cover rounded"
        />
      )}

      <div className="flex-1">
        <h3 className="font-bold">{movie.Title}</h3>
        <p className="text-sm text-gray-600">{movie.Year}</p>
        <p
          className={`text-sm mt-1 ${
            movie.watched ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {movie.watched ? "Watched" : "Not Watched"}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => dispatch(toggleWatched(movie.imdbID))}
          className={`px-3 py-1 rounded text-white ${
            movie.watched ? "bg-green-600" : "bg-yellow-500"
          }`}
        >
          {movie.watched ? "Watched" : "Mark Watched"}
        </button>

        <button
          onClick={() => dispatch(removeFromWatchlist(movie.imdbID))}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
