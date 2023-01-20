import React from "react";
import { movies } from "../data";

function Movies() {
  const showLIst= movies.map((show)=>{
    return <div key={show.title}>
      <h1>{show.title}</h1>
      <p>{show.time}</p>

      <ul>
      {
        show.genres.map((genre)=>{
          return<li key={genre}>
            {genre}
          </li>
        })
      }
    </ul>
    
    </div>
  });
  
    return(
      <div>
        <h1>Movies Page</h1>
        {showLIst}
      </div>
    )
  
    
  
}

export default Movies;
