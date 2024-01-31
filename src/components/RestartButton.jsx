function RestartButton({btn}) {

    const handleReset = () => {
        btn();
    }

  return (
    <section>
        <button className="restart-button" onClick={handleReset}>Reiniciar Juego</button>
      </section>
  )
}

export default RestartButton;