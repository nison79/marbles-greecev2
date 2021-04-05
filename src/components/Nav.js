import React from 'react'
import { Link } from 'gatsby'
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
        <Link to="/"><img src={SVG} alt="logo"/></Link>
          <ul>
            <li>
              <h4>marbles-greece</h4>
            </li>
            <li>
              <Link to="/producers"><h4>producers</h4></Link>
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
