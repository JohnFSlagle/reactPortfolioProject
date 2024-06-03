export default function RandomPage({ gamesList }) {
  const randomIndex = Math.floor(Math.random() * gamesList.length);
  const randomGame = gamesList[randomIndex];
  return (
    <div>
      <h2 className="RandomPageh5">You should play...</h2>
      <h1 className="display1">{randomGame.name}</h1>
    </div>
  );
}
