import React from 'react'

function buttonLong({clickSelect, title, color, colorText}) {
  return (
    <button onClick={clickSelect} id={title} type='button' style={{ border: 'none' ,backgroundColor: color, color: colorText, width: 150, height: 70, borderRadius: 35, fontSize: 30, fontWeight: 'bold', margin: 5}}>{title}</button>
  )
}

export default buttonLong