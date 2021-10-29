import React, { useState } from 'react';
import { Header } from './components/header/Header';
import Movie from './components/movie/Movie';
import 'animate.css';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './index.css';
import { allMovies } from './utils/constants';

export const MoviesApp = () => {
  const [movies, setMovies] = useState([...allMovies]);

  const [sort, setSort] = useState(0);

  const handleChange = (event) => {
    setSort(event.target.value);

    if (event.target.value === 0) {
      setMovies(allMovies);
    }

    if (event.target.value === 10) {
      setMovies(
        movies.sort((a, b) => {
          if (a.vote_average > b.vote_average) {
            return -1;
          } else if (a.vote_average < b.vote_average) {
            return 1;
          } else {
            return 0;
          }
        })
      );
    }

    if (event.target.value === 20) {
      setMovies(
        movies.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        })
      );
    }

    if (event.target.value === 30) {
      setMovies(
        movies.sort((a, b) => {
          if (a.title > b.title) {
            return -1;
          } else if (a.title < b.title) {
            return 1;
          } else {
            return 0;
          }
        })
      );
    }
  };

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <Header />
        <Box
          sx={{
            minWidth: '90%',
            backgroundColor: '#282828',
            margin: 2,
          }}
        >
          <FormControl fullWidth>
            <Select value={sort} onChange={handleChange} className="sort-item">
              <MenuItem value={0}>Select an order</MenuItem>
              <MenuItem value={10}>Rating</MenuItem>
              <MenuItem value={20}>A - Z</MenuItem>
              <MenuItem value={30}>Z - A</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div className="card">
          {movies.map((movie) => (
            <Movie
              key={movie.id.toString()}
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
