import { useState } from "react";
import GameCard from "./GameCard";

export default function HomePage({ gamesList }) {
  const [categoryFilter, setCategoryFilter] = useState("dungeon crawl");
  let filteredGames;
  if (categoryFilter === "All") {
    filteredGames = gamesList;
  } else {
    filteredGames = gamesList.filter(
      (game) => game.category === categoryFilter
    );
  }
  return (
    <div>
      <div>
        <button
          className="btn btn-primary me-3"
          onClick={() => setCategoryFilter("All")}
        >
          All
        </button>
        <button
          className="btn btn-primary me-3"
          onClick={() => setCategoryFilter("family")}
        >
          Family
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setCategoryFilter("solo")}
        >
          Best Solo
        </button>{" "}
        {/* I need to fix  this*/}
      </div>
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
