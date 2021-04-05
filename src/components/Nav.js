import React from 'react'
import { graphql, Link , useStaticQuery } from 'gatsby'
import './Nav.scss'
import SVG from '../images/logo_2.svg'

const Nav = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           author
//           description
//           title
//           heading
//       }
//     }
//   }
// `)



  return (
    <div>
      <menu>
        <img src={SVG} alt="logo"/>
          <ul>
            <li>
              <h4>marbles-greece</h4>
            </li>
            <li>
              <h4>producers</h4>
            </li>
            <li>
              <h4>contact</h4>
            </li>
          </ul>
    
      </menu>
      
    </div>
  )
}

export default Nav
