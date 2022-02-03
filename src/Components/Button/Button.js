import React from 'react'
import './Button.scss' 
const Button = ({className, children, onClick}) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
