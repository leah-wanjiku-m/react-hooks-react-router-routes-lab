import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList=directors.map((dir)=>{
    return ( <div key={dir.name}>
      <h1>{dir.name}</h1>
      <ul>
        {
          dir.movies.map((movie)=>{
            return<li key={movie}>
              {movie}
            </li>
          })
        }
      </ul>
    </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  )
}

export default Directors;
