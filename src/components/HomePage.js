import React, { useState } from "react";
import GameCard from "./GameCard";

export default function HomePage({ gamesList, setCategoryFilter }) {
  const [localCategoryFilter, setLocalCategoryFilter] = useState("All");
  const [searchResults, setSearchResults] = useState([]);

  const handleCategoryFilterChange = (category) => {
    setLocalCategoryFilter(category);
    setCategoryFilter(category);
  };

  const filteredGames =
    localCategoryFilter === "All"
      ? gamesList
      : gamesList.filter((game) => game.category === localCategoryFilter);

  return (
    <div>
      <div>
        <button
          className="btn btn-primary me-3"
          onClick={() => handleCategoryFilterChange("All")}
        >
          All
        </button>
        <button
          className="btn btn-primary me-3"
          onClick={() => handleCategoryFilterChange("Family")}
        >
          Family
        </button>
        <button
          className="btn btn-primary me-3"
          onClick={() => handleCategoryFilterChange("Solo")}
        >
          Solo
        </button>
      </div>
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div>
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}
