import { Link } from "react-router-dom"

function GameCard({ game }) {
    return (
      <div className="bg-light border p-4 m-2">
        <h4>{game.name}</h4>
        <p>{game.category}</p>
        <p>{game.rating}</p>
        <Link to={'/games/' + game.id}>Details</Link>
      </div>
    )
}

export default GameCard