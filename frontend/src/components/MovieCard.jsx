function MovieCard({ movie }) {
  function onFavClick() {
    alert("favorite button clicked");
  }

  return (
    <div
      className="movie-card"
      class="text-sm md:text-base relative rounded-lg overflow-hidden bg-neutral-900 transition-transform duration-200 flex flex-col h-full hover:-translate-y-1"
    >
      <div className="movie-poster" class="relative w-full aspect-[2/3]">
        <img
          class="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div
          className="movie-overlay"
          class="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 transition-all duration-200 flex flex-col justify-end p-4 hover:opacity-100"
        >
          <button
            className="favorite-btn"
            onClick={onFavClick}
            class="absolute top-4 right-4 text-white text-xl md:text-2xl p-2 bg-black/50 rounded-[50%] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-colors duration-200 hover:bg-black/80 active:text-red-600"
          >
            ❤
          </button>
        </div>
      </div>
      <div className="movie-info" class="p-3 md:p-4 flex flex-col flex-1 gap-2">
        <h3 class="text-base text-white font-bold m-0">{movie.title}</h3>
        <p class="text-gray-400 text-sm">{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
