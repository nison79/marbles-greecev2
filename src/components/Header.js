import React from 'react'
import { graphql, Link ,useStaticQuery } from 'gatsby'

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
        <button>EXPLORE</button>
      </article>
    </div>
  )
}

export default Header
