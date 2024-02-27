import React from "react";
import "../css/gptSearch.css";
import GptMovieSuggestions from "./GptMovieSuggestions";

import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div className="gs-box1">
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;
