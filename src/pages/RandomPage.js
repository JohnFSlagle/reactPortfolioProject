import { useEffect } from "react";
import '../components/RandomPage.css';

export default function RandomPage({ gamesList }) {
  const randomIndex = Math.floor(Math.random() * gamesList.length);
  const randomGame = gamesList[randomIndex];
  useEffect(() => {
    window.scrollTo(0, 1200);
  }, [randomGame]); 
  return (
    <div className="RandomDiv">
      <h2 className="RandomPageh5">You should play...</h2>
      <h1 className="display1">{randomGame.name}</h1>
      <img
          src={randomGame.imageUrl}
          alt={randomGame.name + " box"}
          className="random-game-image"
        />
    </div>
  );
}
