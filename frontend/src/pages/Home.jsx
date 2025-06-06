import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const search = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      if (!searchQuery.trim()) {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } else {
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
      }
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load search results...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home" class="py-4 px-0 w-full box-border">
      <form onSubmit={search} className="search-form" class="max-w-xl mt-0 mb-4 mx-auto flex gap-4 py-0 px-4 box-border justify-center">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          class="w-full py-3 px-4 border-none rounded-sm bg-neutral-700 text-white text-base focus:outline-none"
        />
        <button type="submit" className="search-button" class="py-3 px-6 bg-red-600 text-white font-bold rounded-sm transition-color duration-200 whitespace-nowrap hover:bg-red-700">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid" class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6 p-4 w-full box-border">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
