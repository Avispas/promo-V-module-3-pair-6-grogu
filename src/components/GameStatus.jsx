function GameStatus ({gameStatus, name}) {
    return (
        <>
        <h3>{name}</h3>
        <div className="game-status">{gameStatus}</div>
        </>
    )
}
export default GameStatus