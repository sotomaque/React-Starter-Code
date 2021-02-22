import React from 'react';
import { useParams } from 'react-router-dom';

function Movies() {
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [id]);

  return <div>Movies Page for movie with id: {id} </div>;
}

export default Movies;
