import "../scss/App.scss";
import "../images/grogu.webp";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import GameStatus from "./GameStatus";
import { useState, useEffect } from "react";
import RestartButton from "./RestartButton";
import Form from "./Form";
import Footer from "./Footer";
import Section from "./Section";
import { Routes, Route } from "react-router-dom";
import Instructions from "./Instructions";

function App() {
  let [gameStatus, setGameStatus] = useState("En curso");
  let [groguPosition, setGroguPosition] = useState(0);
  let [cookies, setCookies] = useState(["🍪", "🍪", "🍪"]);
  let [eggs, setEggs] = useState(["🥚", "🥚", "🥚"]);
  let [frogs, setFrogs] = useState(["🐸", "🐸", "🐸"]);
  let [name, setName] = useState("");

  useEffect(() => {
    // Comprobación para Grogu ha ganado
    if (groguPosition === 6) {
      setGameStatus("Grogu ha ganado la partida");
    }

    // Comprobación para Has ganado
    if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0) {
      setGameStatus("HAS GANADO");
    }
  }, [groguPosition, cookies, eggs, frogs]);

  const randomNumber = Math.random();
  const result = Math.ceil(randomNumber * 4);
  const rollDice = () => {
    console.log(result);
    if (result === 4) {
      setGroguPosition(groguPosition + 1);
      setGameStatus((gameStatus = "Grogu ha avanzado una casilla"));
    } else if (result === 1) {
      if (cookies.length === 0) {
        setGameStatus((gameStatus = "Ya no te quedan 🍪, no hay descarga"));
      } else {
        setCookies(cookies.slice(1));
        console.log(cookies);
        setGameStatus((gameStatus = "Se ha descargado una mercancía: 🍪"));
      }
    } else if (result === 2) {
      if (eggs.length === 0) {
        setGameStatus((gameStatus = "Ya no te quedan 🥚, no hay descarga"));
      } else {
        setEggs(eggs.slice(1));

        setGameStatus((gameStatus = "Se ha descargado una mercancía: 🥚"));
      }
    } else if (result === 3) {
      if (frogs.length === 0) {
        setGameStatus((gameStatus = "Ya no te quedan 🐸, no hay descarga"));
      } else {
        setFrogs(frogs.slice(1));

        setGameStatus((gameStatus = "Se ha descargado una mercancía: 🐸"));
      }
    }
  };

  const resetGame = () => {
    setGroguPosition(0);
    setCookies(["🍪", "🍪", "🍪"]);
    setEggs(["🥚", "🥚", "🥚"]);
    setFrogs(["🐸", "🐸", "🐸"]);
    setGameStatus("En curso");
  };

  return (
    <div className="page">
      <Routes>
        <Route path="/ajugar" element={<h2>A Jugar</h2>} />
        <Route path="/instructions" element={<h2>Instrucciones</h2>} />
        <Route path="/options" element={<h2>Más opciones</h2>} />
      </Routes>
      <Header />
      <main className="page">
        {/* <Board groguPosition={groguPosition}/>  
      { cookies.length === 0 && eggs.length === 0 && frogs.length === 0 || groguPosition !== 6 && <Dice dice={rollDice} randomNumber={result}/>} 
      <GameStatus gameStatus={gameStatus} name={name}/>
      <Section mercancia={cookies}/>
      <Section mercancia={eggs}/>
      <Section mercancia={frogs}/>
      <RestartButton btn={resetGame}/>
      <Form setName={setName} /> */}
        <Routes>
          <Route path="/" element={
              <>
                <Board groguPosition={groguPosition} />
                {(cookies.length === 0 &&
                  eggs.length === 0 &&
                  frogs.length === 0) ||
                  (groguPosition !== 6 && (
                    <Dice dice={rollDice} randomNumber={result} />
                  ))}
                <GameStatus gameStatus={gameStatus} name={name} />
                <Section mercancia={cookies} />
                <Section mercancia={eggs} />
                <Section mercancia={frogs} />
                <RestartButton btn={resetGame} />
                <Form setName={setName} />
              </>
            }
          />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
