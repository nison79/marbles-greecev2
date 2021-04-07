import React from 'react'
import Nav from './Nav'
import '../styles/global.scss'

const layout = ( { children }) => {
  return (
    <div>
      <Nav />
      <div>{ children }</div>
    </div>
  )
}

export default layout
