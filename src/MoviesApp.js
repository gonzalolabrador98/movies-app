import React from 'react';
import { Header } from './components/header/Header';
import Movie from './components/movie/Movie';
import 'animate.css';

import './index.css';

export const MoviesApp = () => {
  const movies = [
    {
      adult: false,
      backdrop_path: '/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg',
      genre_ids: [28, 12, 18, 878],
      id: 438631,
      original_language: 'en',
      original_title: 'Dune',
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      popularity: 8870.667,
      poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      release_date: '2021-09-15',
      title: 'Dune',
      video: false,
      vote_average: 8.1,
      vote_count: 2526,
    },
    {
      adult: false,
      backdrop_path: '/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg',
      genre_ids: [28, 12, 18, 878],
      id: 438631,
      original_language: 'en',
      original_title: 'Dune',
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      popularity: 8870.667,
      poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      release_date: '2021-09-15',
      title: 'Dune',
      video: false,
      vote_average: 8.1,
      vote_count: 2526,
    },
    {
      adult: false,
      backdrop_path: '/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg',
      genre_ids: [28, 12, 18, 878],
      id: 438631,
      original_language: 'en',
      original_title: 'Dune',
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      popularity: 8870.667,
      poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      release_date: '2021-09-15',
      title: 'Dune',
      video: false,
      vote_average: 8.1,
      vote_count: 2526,
    },
    {
      adult: false,
      backdrop_path: '/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg',
      genre_ids: [28, 12, 18, 878],
      id: 438631,
      original_language: 'en',
      original_title: 'Dune',
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      popularity: 8870.667,
      poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      release_date: '2021-09-15',
      title: 'Dune',
      video: false,
      vote_average: 8.1,
      vote_count: 2526,
    },
    {
      adult: false,
      backdrop_path: '/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg',
      genre_ids: [28, 12, 18, 878],
      id: 438631,
      original_language: 'en',
      original_title: 'Dune',
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      popularity: 8870.667,
      poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      release_date: '2021-09-15',
      title: 'Dune',
      video: false,
      vote_average: 8.1,
      vote_count: 2526,
    },
    {
      adult: false,
      backdrop_path: '/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg',
      genre_ids: [28, 12, 18, 878],
      id: 438631,
      original_language: 'en',
      original_title: 'Dune',
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      popularity: 8870.667,
      poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      release_date: '2021-09-15',
      title: 'Dune',
      video: false,
      vote_average: 8.1,
      vote_count: 2526,
    },
  ];

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <Header />
        <div className="card">
          {movies.map((movie) => (
            <Movie
              title={movie.title}
              img={movie.backdrop_path}
              rating={movie.vote_average}
              overview={movie.overview}
              votes={movie.vote_count}
              release={movie.release_date}
            />
          ))}
        </div>
      </div>
    </>
  );
};
