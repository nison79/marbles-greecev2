import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage , getImage } from 'gatsby-plugin-image'

import './producers.scss'

const producers = ( { data }) => {
  return (
    <Layout>
      {data.allMdx.edges.map( producer => (
          <div key = {producer.node.frontmatter.name} className="producer-info-box">
            <h2>{producer.node.frontmatter.name}</h2>
            <GatsbyImage image={producer.node.frontmatter.logo.childImageSharp.gatsbyImageData} alt={producer.node.frontmatter.name} /> 
            <div className="info">
              <h5>Address: {producer.node.frontmatter.address}</h5>
              <h5>Email: {producer.node.frontmatter.email}</h5>
              <h5>Phone:{producer.node.frontmatter.phone}</h5>
              <h5>Country: {producer.node.frontmatter.country}</h5>
              <h5>Established: {producer.node.frontmatter.established}</h5>
              <h5>Website: <a add target="_blank" rel="noopener noreferrer" href={producer.node.frontmatter.website}>{producer.node.frontmatter.website}</a></h5>
            </div>
            <div className="products">
            <h5> Main Products: {producer.node.frontmatter.products}</h5>
            </div>
          </div>
        
      ))}
    </Layout>
  )
}

export default producers


export const query = graphql`
query MyQuery {
  allMdx {
    edges {
      node {
        frontmatter {
          logo {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                webpOptions: {quality: 50}
                quality: 80
                blurredOptions: {}
              )
            }
          }
          address
          city
          country
          email
          established
          main_office
          name
          phone
          products
          website
        }
      }
    }
  }
}


`