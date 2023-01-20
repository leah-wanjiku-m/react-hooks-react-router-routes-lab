import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList=actors.map((act)=>{
    return(
      <div key={act.name}>
        <h1>{act.name}</h1>
        <ul>{
          act.movies.map((mov)=>{
            return(
              <li key={mov}>{mov}</li>
            )
          })
          }</ul>
      </div>
    )
  })
  return <div>
    <h1>Actors Page</h1>
    {actorsList}
  </div>;
}

export default Actors;
