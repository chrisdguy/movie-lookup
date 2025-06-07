import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length) {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_300px))] gap-6 p-4 w-full box-border">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }

  return (
    <div className="text-center py-16 px-8 bg-black/5 rounded-xl my-8 mx-auto max-w-xl">
      <h2 className="mb-4 text-3xl text-red-600">No Favorite Movies Yet!</h2>
      <p className="text-xl text-gray-400">
        Start adding movies to your favorites and they will appear here.
      </p>
    </div>
  );
}

export default Favorites;
