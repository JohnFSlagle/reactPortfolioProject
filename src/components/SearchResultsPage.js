// SearchResultsPage.js
import React, { useEffect } from "react";
import GameCard from "./GameCard";
import "./SearchResultsPage.css";

function SearchResultsPage({ searchResults }) {
  useEffect(() => {
    window.scrollTo(0, 1200);
  }, [searchResults]); 

  return (
    <div>
      <h1 className="SearchResultsH1">Search Results</h1>
     
      {searchResults.length === 0 ? (
        <p className="noResultsMessage">No results found.</p>
      ) : (
        <div>
          {searchResults.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;
