import React, { useEffect, useState } from 'react';
import { Header } from './components/header/Header';
import Movie from './components/movie/Movie';
import 'animate.css';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InfiniteScroll from 'react-infinite-scroll-component';

import './index.css';
import { useFetchMovies } from './hook/useFetchMovies';

export const MoviesApp = () => {
  const [fistTime, setFistTime] = useState(true);

  const [page, setPage] = useState(3);

  const data = useFetchMovies(fistTime, page);

  const fetchMoreData = () => {
    setFistTime(false);
    setPage(page + 1);
  };

  const [movies, setMovies] = useState([]);

  const [sort, setSort] = useState(0);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleChange = (event) => {
    setSort(event.target.value);

    if (event.target.value === 0) {
      setMovies(movies);
    }

    if (event.target.value === 10) {
      setMovies(
        movies.sort((a, b) => {
          if (a.rating > b.rating) {
            return -1;
          } else if (a.rating < b.rating) {
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
        <InfiniteScroll
          hasMore
          loader={<h4>Loading...</h4>}
          next={fetchMoreData}
          dataLength={movies.length}
        >
          <div className="card">
            {movies.map((movie) => (
              <Movie
                key={movie.id.toString()}
                title={movie.title}
                img={movie.img}
                rating={movie.rating}
                overview={movie.overview}
                votes={movie.votes}
                release={movie.release}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};
