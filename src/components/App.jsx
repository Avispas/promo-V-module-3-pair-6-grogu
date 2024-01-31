import "../scss/App.scss";
import "../images/grogu.webp";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import GameStatus from "./GameStatus";
import { useState } from 'react';
import RestartButton from "./RestartButton";

function App() {  

  let [gameStatus, setGameStatus] = useState('En curso');
  let [groguPosition, setGroguPosition] = useState(0);
  let [cookies, setCookies] = useState (['🍪', '🍪','🍪']);
  let [eggs, setEggs] = useState (['🥚', '🥚','🥚']);
  let [frogs, setFrogs] = useState (['🐸', '🐸','🐸']);

  const rollDice = () => {
    const randomNumber = Math.random();
    const result = Math.ceil(randomNumber*4);
    console.log(result);
    if (result === 4) {
      setGroguPosition(groguPosition++);
      setGameStatus(gameStatus = 'Grogu ha avanzado una casilla');
    } else if ( result === 1) {
      setCookies(cookies.slice(1));
      console.log(cookies);
      setGameStatus(gameStatus = 'Se ha descargado una mercancía: 🍪');
    } else if ( result === 2) {
      setEggs(eggs.slice(1));
      console.log(eggs);
      setGameStatus(gameStatus = 'Se ha descargado una mercancía: 🥚');
    } else if ( result === 3) {
      setFrogs(frogs.slice(1));
      console.log(frogs);
      setGameStatus(gameStatus = 'Se ha descargado una mercancía: 🐸');
    }
  }

  const resetGame = () => {
    groguPosition = 0;
    setCookies(['🍪', '🍪','🍪']);
    setEggs(['🥚', '🥚','🥚']);
    setFrogs(['🐸', '🐸','🐸']);
    setGameStatus('En curso');
  }


  return  (
    <div className="page">
    <Header/>
    <main className="page">
      <Board />      
      <Dice dice={rollDice} />
      <GameStatus />
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
      <RestartButton btn={resetGame}/>
    </main>
  </div>
    )  
}

export default App
