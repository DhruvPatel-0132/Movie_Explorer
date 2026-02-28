import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMovies } from "../features/movies/moviesSlice";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

export default function MovieGrid() {
  const dispatch = useDispatch();
  const { movies, hasMore, status, error } = useSelector(
    (state) => state.movies
  );

  if (status === "failed") {
    return <p className="mt-4 text-red-500">Error: {error}</p>;
  }
  
  if (status === "succeeded" && movies.length === 0) {
  return (
    <div className="text-center mt-8 text-gray-500">
      No movies found. Try another search.
    </div>
  );
}

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={() => dispatch(fetchMovies())}
      hasMore={hasMore}
      loader={<Loader />}
      endMessage={
        movies.length > 0 && (
          <p className="text-center mt-4 font-semibold">
            🎉 You have seen all results
          </p>
        )
      }
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </InfiniteScroll>
  );
}