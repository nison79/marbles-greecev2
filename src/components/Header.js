import React from 'react'
import { Link } from 'gatsby'
import SearchIcon from '../images/search.svg'


import './Header.scss'

const Header = () => {
//   const data = useStaticQuery(graphql`
//     query  {
//   site {
//     siteMetadata {
//       author
//       heading
//       description
//       title
//     }
//   }
// }

//   `)
  return (
    <div className="header-wrapper">
      <div className="main-wrapper">
        <h1>The Material that highlights, <br/> the <span>Beauty</span> <br/> for centuries <br/>from the Best Producers.</h1>
      </div>
      <article>
              <Link className="gatsby-link" to="/producers"><button>EXPLORE <img className="search-icon" src={SearchIcon} alt="search"/></button></Link>
      </article>
    </div>
  )
}

export default Header
