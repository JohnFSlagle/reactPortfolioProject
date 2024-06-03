import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="GameCardDiv">
      <h1>{game.name}</h1>
      <h3>Type: {game.category}</h3>
      <h4>My Rating: {game.rating}</h4>
      
      <div className="image-container">
        <img
          src={game.imageUrl}
          alt={game.name + " box"}
          className="game-image"
        />
      </div>

      <div className="link-container">
        <Link to={"/games/" + game.id} className="GameDetails">
          Details
        </Link>
      </div>
    </div>
  );
}

export default GameCard;
