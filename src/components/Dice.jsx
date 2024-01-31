
function Dice({dice}) {
    const handleDice = () => {
        dice();
    }
  return (
    <section>
      <button className="dice" onClick={handleDice}>Lanzar Dado</button>
      <div className="dice">🎲</div>      
    </section>
  );
}
export default Dice;
