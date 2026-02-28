import { useSelector } from "react-redux";
import WatchlistItem from "../components/WatchlistItem";
import Header from "../components/Header";

export default function WatchlistPage() {
  const { watchlist } = useSelector((state) => state.movies);

  return (
    <div className="p-6">
      <Header />

      <h2 className="text-2xl font-bold mt-6 mb-4">My Watchlist</h2>

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