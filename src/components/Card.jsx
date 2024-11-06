import React from "react";

function Card({ Poster, imdbID }) {
  //   const {  } = movieData;
  return (
    <div className="mt-10">
      <div className="w-48 h-72 mb-5 ml-12">
        <img src={Poster} />
      </div>
      <div className="ml-28">
        <a href={`/movie/${imdbID}`}>
          <button>Watch now</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
