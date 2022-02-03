import React from 'react'
import './ViewTitle.scss'
const ViewTitle = ({text, className}) => {
  return (
    <>
      <h1 className={`view-title ${className}`}>{text} </h1>
    </>
  )
}

export default ViewTitle
