const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const fetchMoviesFromAPI = async (searchTerm, page = 1) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
        searchTerm
      )}&page=${page}`
    );

    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    return {
      movies: data.Search,
      totalResults: parseInt(data.totalResults, 10),
    };
  } catch (error) {
    throw new Error(error.message || "Failed to fetch movies");
  }
};