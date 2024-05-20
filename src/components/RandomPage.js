export default function RandomPage({ gamesList }) {

    const randomIndex = Math.floor(Math.random() * gamesList.length)
    const randomGame = gamesList[randomIndex]
    return (
        <div>
            <h5>You should play...</h5>
            <h2 className="display-1">{ randomGame.name }</h2>
        </div>
    )
}