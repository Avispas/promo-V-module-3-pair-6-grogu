import React from 'react'

function Form({setName}) {
    const handleName = (ev) => {
        setName(ev.target.value)

    }

  return (
    <form>
        <label htmlFor="">Introduce tu nombre de usuario:</label>
        <input type="text" onChange={handleName}/>
    </form>
  )
}

export default Form