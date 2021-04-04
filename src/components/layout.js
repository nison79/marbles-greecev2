import React from 'react'
import Nav from './Nav'
import '../styles/global.scss'

const layout = ( { children }) => {
  return (
    <div>
      <Nav />
      <main>{ children }</main>
    </div>
  )
}

export default layout
