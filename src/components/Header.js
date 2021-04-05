import React from 'react'
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
      <main>
        <h1>The Material that highlights, <br/> the <span>Beauty</span> <br/> for centuries <br/>from the Best Producers.</h1>
      </main>
      <article>
              <button>EXPLORE <img className="search-icon" src={SearchIcon} alt="search"/></button>
      </article>
    </div>
  )
}

export default Header
