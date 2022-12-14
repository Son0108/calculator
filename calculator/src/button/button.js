import React from 'react'
import './button.css'

function Button({title, color, colorText}) {
  return (
        <button style={{ border: 'none' ,backgroundColor: color, color: colorText, width: 70, height: 70, borderRadius: 35, fontSize: 30, fontWeight: 'bold', margin: 5}}>{title}</button>
  )
}

export default Button