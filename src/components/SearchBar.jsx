import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setSearchTerm } from "../features/movies/moviesSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state.movies);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      dispatch(fetchMovies(searchTerm));
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        className="flex-1 px-4 py-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
}