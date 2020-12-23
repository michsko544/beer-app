import React, { useState } from "react";
import Card from "./Card";
import useBeers from "../hooks/useBeers";

const BeersContainer = () => {
  const [isVisible, setVisible] = useState(false);
  const { data: beers, isLoading } = useBeers();

  return (
    <>
      {!isVisible && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={() => setVisible(true)}
            className="px-12 py-4 uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold text-lg rounded-full opacity-80 hover:opacity-100"
          >
            Get Beers
          </button>
        </div>
      )}
      {isLoading && "loading..."}
      {isVisible && (
        <div className="w-full h-screen mx-auto flex justify-center items-center flex-wrap z-10 max-w-screen-xl">
          {beers.map((beer) => (
            <Card
              title={beer.name}
              subtitle={beer.tagline}
              description={beer.description}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BeersContainer;
