import Grogu from './Grogu';
import Cell from './Cell';

function Board({groguPosition}) {
  const renderCells = () => {
    const cells = [];
    // for (let i = 0; i < 7; i++) {
    //   cells.push(<Cell key={i} />);
    //   if (groguPosition === 0) {
    //     cells[0].push(<Grogu />)
    //   }
    // }
    for (let i = 0; i < 7; i++) {
      if (groguPosition === i) {
        cells.push(
          <Cell key={i}>
            <Grogu />
          </Cell>
        );
      } else {
        cells.push(<Cell key={i} />);
      }
    }

    return cells;
  };


  //ChatGPT
  // function Board({ groguPosition }) {
  //   const renderCells = () => {
  //     const cells = [];
  
  //     for (let i = 0; i < 7; i++) {
  //       cells.push(
  //         <Cell key={i} hasGrogu={groguPosition === i}>
  //           {groguPosition === i && <Grogu />}
  //         </Cell>
  //       );
  //     }
  
  //     return cells;
  //   };

  return <section className="board">{renderCells()}</section>;
}

export default Board;
