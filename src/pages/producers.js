import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const producers = ( { data }) => {
  return (
    <Layout>
      {data.allMdx.edges.map( producer => (
        <h4>{producer.node.frontmatter.name}</h4>
      ))}
    </Layout>
  )
}

export default producers


export const query = graphql`
  {
  allMdx {
    edges {
      node {
        frontmatter {
          title
          address
          city
          country
          email
          established
          logo
          main_office
          phone
          products
          name
        }
      }
    }
  }
}

`