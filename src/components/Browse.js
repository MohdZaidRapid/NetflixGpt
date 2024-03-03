import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <GptSearch />
      <MainContainer />
      <SecondaryContainer />
      {/**
         MainContainer
            - VideoBackground
            - VideoTitle
        Secondary Container
          - MovisList * n
          - Cards * n     
        
          

         */}
    </div>
  );
};

export default Browse;
