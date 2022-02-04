import React from 'react'
import './styles.scss' 
const Button = ({className, children, onClick}) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
