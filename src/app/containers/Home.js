import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const { fetching, movies } = useSelector((state) => state.movieReducers);
  let history = useHistory();

  React.useEffect(() => {
    dispatch({
      type: 'FETCHING_MOVIES',
    });

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: 'FETCHED_MOVIES',
          payload: json,
        })
      );
  }, [dispatch]);

  if (fetching) {
    return <div>Loading...</div>;
  }

  const handleClick = (id) => {
    history.push(`/movies/${id}`);
  };

  return (
    <div>
      {movies.map((movie, index) => {
        return (
          index < 5 && (
            <div key={movie.id} onClick={() => handleClick(movie.id)}>
              {movie.title}
            </div>
          )
        );
      })}
    </div>
  );
}

export default Home;
