import React from "react";
import { actors } from "../data";

function Actors() {
  const  actor= actors.map((actor)=>(
    <div>
   <h1>{actor.name}</h1>
   <ul>
       {actor.movies.map((movie)=>(
         <li key={movie}>{movie}</li>
       ))}
   </ul>
 </div>
  ));
 console.log(actor);
 return <div>
   <h1>Actors Page</h1>
   {actor}
   </div>;
}


export default Actors;
