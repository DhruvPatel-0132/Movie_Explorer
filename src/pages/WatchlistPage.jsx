import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WatchlistItem from "../components/WatchlistItem";
import Header from "../components/Header";

export default function WatchlistPage() {
  const { watchlist } = useSelector((state) => state.movies);
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <Header />

      <div className="flex items-center justify-between mt-6 mb-4">
        <h2 className="text-2xl font-bold">My Watchlist</h2>

        <button
          onClick={() => navigate("/home")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Back
        </button>
      </div>

      {watchlist.length === 0 ? (
        <div className="bg-gray-100 p-6 rounded text-center text-gray-600">
          Your watchlist is empty.
        </div>
      ) : (
        <div className="space-y-4">
          {watchlist.map((movie) => (
            <WatchlistItem key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}