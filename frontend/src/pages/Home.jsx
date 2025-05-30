import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "John Wock", release_date: "2021" },
    { id: 3, title: "John Wack", release_date: "2022" },
    { id: 4, title: "John Wuck", release_date: "2023" },
  ];

  const search = (e) => {
    e.preventDefault()
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={search} className="seatch-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
