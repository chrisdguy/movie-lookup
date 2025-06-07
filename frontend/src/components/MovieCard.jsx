import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFavorite, addFavorite, removeFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const onFavClick = () => {
    favorite ? removeFavorite(movie.id) : addFavorite(movie);
  };

  return (
    <div className="text-sm md:text-base relative rounded-lg overflow-hidden bg-neutral-900 transition-transform duration-200 flex flex-col h-full hover:-translate-y-1">
      <div className="relative w-full aspect-[2/3]">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 transition-all duration-200 flex flex-col justify-end p-4 hover:opacity-100">
          <button
            onClick={onFavClick}
            className={`absolute top-4 right-4 text-xl md:text-2xl p-2 bg-black/50 rounded-[50%] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-colors duration-200 hover:bg-black/80 ${
              favorite ? "text-red-600" : "text-white"
            }`}
          >
            ❤
          </button>
        </div>
      </div>
      <div className="p-3 md:p-4 flex flex-col flex-1 gap-2">
        <h3 className="text-base text-white font-bold m-0">{movie.title}</h3>
        <p className="text-gray-400 text-sm">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
