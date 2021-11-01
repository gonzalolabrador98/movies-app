export const getMovies = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=54ffed57deb5a7a8688be4de3007e578&language=en-US&page=${page}`;
  const resp = await fetch(url);
  const { results } = await resp.json();

  const apiMovies = results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      img: movie.backdrop_path,
      rating: movie.vote_average,
      overview: movie.overview,
      votes: movie.vote_count,
      release: movie.release_date,
    };
  });

  return apiMovies;
};
