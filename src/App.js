import GameCard from "./GameCard";

const gamesList = [
  {
    id: 0,
    name: "Under Falling Skies",
    rating: 8,
    category: "space invaders",
  },
  {
    id: 1,
    name: "Final Girl",
    rating: 9,
    category: "slasher",
  },
  {
    id: 2,
    name: "Gloomhaven: Buttons and Bugs",
    rating: 8,
    category: "dungeon crawl",
  },
];

function App() {
  return (
    <div>
      <h1>Best Solo Board Games</h1>
      {gamesList.map(game => <GameCard game={game} /> ) }
    </div>
  );
}

export default App;
