import React from 'react'

function Button({clickSelect,title, color, colorText}) {
  return (
    <button value={title} type='button' onClick={clickSelect} style={{ border: 'none' ,backgroundColor: color, color: colorText, width: 70, height: 70, borderRadius: 35, fontSize: 30, fontWeight: 'bold', margin: 5}}>{title}</button>
  )
}

export default Button