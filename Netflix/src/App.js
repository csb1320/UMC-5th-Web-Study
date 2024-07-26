import React from 'react';
import { movies } from './movieDummy';
import Movie from './Components/Movie';

function App() {
  return (
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie movieData={item}
              />
            )
          })
        }
      </div>
  );
}

export default App;
