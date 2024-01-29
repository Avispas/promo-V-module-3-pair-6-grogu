import "../scss/App.scss";
import "../images/grogu.webp";
import { useState } from 'react';

function App() {  

  let [gameStatus, setGameStatus] = useState('En curso');

  let groguPosition = 0;
  let products = ['Galletas', 'Huevos', 'Ranas'];

  const rollDice = () => {
    const randomNumber = Math.random();
    const result = Math.ceil(randomNumber*4);
    console.log(result);
    if (result === 4) {
      groguPosition++;
      setGameStatus(gameStatus = 'Grogu ha avanzado una casilla');
    } else {
      let indexProduct = Math.floor(Math.random()*products.length);
      let productDeleted = products.splice(indexProduct, 1)[0];
      setGameStatus(gameStatus = 'Se ha descargado una mercancía: ' + productDeleted);
    }
  }

  const resetGame = () => {
    groguPosition = 0;
    products = ['Galletas', 'Huevos', 'Ranas'];
    setGameStatus(gameStatus = 'En curso');
  }


  return  (
    <div className="page">
    <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main className="page">
      <section className="board">
        <div className="cell"><div className="grogu">👣</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>

      <section>
        <button className="dice" onClick={rollDice}>Lanzar Dado</button>
        <div className="game-status">{gameStatus}</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button" onClick={resetGame}>Reiniciar Juego</button>
      </section>
    </main>
  </div>
    )  
}

export default App
