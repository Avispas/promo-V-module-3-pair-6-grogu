import "../scss/App.scss";
import "../images/grogu.webp";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import GameStatus from "./GameStatus";
import { useState } from 'react';
import RestartButton from "./RestartButton";
import Form from "./Form";
import Section from "./Section";

function App() {  

  let [gameStatus, setGameStatus] = useState('En curso');
  let [groguPosition, setGroguPosition] = useState(0);
  let [cookies, setCookies] = useState (['🍪', '🍪','🍪']);
  let [eggs, setEggs] = useState (['🥚', '🥚','🥚']);
  let [frogs, setFrogs] = useState (['🐸', '🐸','🐸']);
  let [name, setName] = useState('');

  const rollDice = () => {
    const randomNumber = Math.random();
    const result = Math.ceil(randomNumber*4);
    console.log(result);
    if (result === 4) {
      if (groguPosition === 6) {
        setGameStatus(gameStatus = 'Grogu ha ganado la partida');
      } else {
      setGroguPosition(groguPosition + 1);
      console.log(groguPosition);
      setGameStatus(gameStatus = 'Grogu ha avanzado una casilla');
      }
    } else if ( result === 1) {
      if (cookies.length === 0){
        setGameStatus(gameStatus = 'Ya no te quedan 🍪, no hay descarga');
      } else {
        setCookies(cookies.slice(0, 1));
        console.log(cookies);
        setGameStatus(gameStatus = 'Se ha descargado una mercancía: 🍪');}
    } else if ( result === 2) {
      if (eggs === ''){ setGameStatus(gameStatus = 'Ya no te quedan 🥚, no hay descarga');
      } else {setEggs(eggs.slice(0,1));
        console.log(eggs);
        setGameStatus(gameStatus = 'Se ha descargado una mercancía: 🥚');}
    } else if ( result === 3) {
      if (frogs === '') {
        setGameStatus(gameStatus = 'Ya no te quedan 🐸, no hay descarga');
      } else {
        setFrogs(frogs.slice(0,1));
        console.log(frogs);
        setGameStatus(gameStatus = 'Se ha descargado una mercancía: 🐸');
      }
    } else if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0) {
      setGameStatus(gameStatus = 'HAS GANADO');
    }
    console.log(frogs);
  }

  const resetGame = () => {
    setGroguPosition(0);
    setCookies(['🍪', '🍪','🍪']);
    setEggs(['🥚', '🥚','🥚']);
    setFrogs(['🐸', '🐸','🐸']);
    setGameStatus('En curso');
  }


  return  (
    <div className="page">
    <Header/>
    <main className="page">
      <Board groguPosition={groguPosition}/>      
      <Dice dice={rollDice} />
      <GameStatus gameStatus={gameStatus} name={name}/>
      <Section mercancia={cookies}/>
      <Section mercancia={eggs}/>
      <Section mercancia={frogs}/>
      <RestartButton btn={resetGame}/>
      <Form setName={setName} />

    </main>
  </div>
    )  
}

export default App
