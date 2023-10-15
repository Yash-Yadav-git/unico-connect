import React from 'react'
import './button.css'

const Button = ({ type, label, buttonClickHandler}) => {
  return (
      <button className={ `button button-${type}`} onClick={buttonClickHandler}>{ label}</button>
  )
}

export default Button