
  import React, { useState } from 'react';
  import "../scss/Dice.scss";

function Dice( {dice}) {
  const handleDice = () => {
    dice();
    tirarDado();
  }
  const [resultado, setResultado] = useState(null);

  const tirarDado = () => {
    const numero = Math.ceil(Math.random() * 4);
    switch (numero) {
      case 1:
        setResultado(<img src="http://www.lawebdelprogramador.com/usr/147000/147685/527560a9ce32f-dado1.png" alt="Dado 1" />);
        break;
      case 2:
        setResultado(<img src="http://www.lawebdelprogramador.com/usr/147000/147685/527560a9d15f6-dado2.png" alt="Dado 2" />);
        break;
      case 3:
        setResultado(<img src="http://www.lawebdelprogramador.com/usr/147000/147685/527560a9d48bd-dado3.png" alt="Dado 3" />);
        break;
      case 4:
        setResultado(<img src="http://www.lawebdelprogramador.com/usr/147000/147685/527560a9d7bc5-dado4.png" alt="Dado 4" />);
        break;
      default:
        break;
    }
  };

  // const reiniciar = () => {
  //   setResultado(null);
  // };

  return (
    <div className="contenedor">
      <div className="cubo resul" id="cubo">
        {resultado}
      </div>
      <div onClick={handleDice} id="tirar">Tirar</div>
      {/* <div onClick={reiniciar}>Reiniciar</div> */}
    </div>
  );
}

export default Dice;
