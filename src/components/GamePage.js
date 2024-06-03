import { useParams } from "react-router-dom";

export default function GamePage({ gamesList }) {
  let { gameId } = useParams();
  gameId = parseInt(gameId);

  const game = gamesList.find((g) => g.id === gameId);

  if (!game) {
    return <h2>Game Not Found</h2>;
  }

  return (
    <div className="GamePageDetails">
      <img src={game.imageUrl} alt={game.name} />
      <h1>{game.name}</h1>
      <p>Type: {game.category}</p>
      <p>Rating: {game.rating}</p>
      <p>{game.summary}</p>
    </div>
  );
}
