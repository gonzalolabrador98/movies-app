import { useEffect, useState } from 'react';
import { getMovies } from '../utils/getMovies';

export const useFetchMovies = (firstTime, page) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    if (firstTime) {
      const promiseArray = Promise.all([
        getMovies(1),
        getMovies(2),
        getMovies(3),
      ]);
      promiseArray.then((data) => {
        setState([...data[0], ...data[1], ...data[2]]);
      });
    } else {
      getMovies(page).then((movie) => {
        setState([...state, ...movie]);
      });
    }
  }, [page]);

  return state;
};
