import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage} from 'gatsby-plugin-image'

import './producers.scss'

const producers = ( { data }) => {
  return (
    <Layout>
      <div className="page-wrapper">
      {data.allMdx.edges.map( producer => (
          <div key = {producer.node.frontmatter.name} className="producer-info-box">
            <h2>{producer.node.frontmatter.name}</h2>
            <GatsbyImage image={producer.node.frontmatter.logo.childImageSharp.gatsbyImageData} alt={producer.node.frontmatter.name} /> 
            <div className="info">
              <h5><span>Address:</span> {producer.node.frontmatter.address}</h5>
              <h5><span>Email:</span> {producer.node.frontmatter.email}</h5>
              <h5><span>Phone:</span> {producer.node.frontmatter.phone}</h5>
              <h5><span>Country:</span> {producer.node.frontmatter.country}</h5>
              <h5><span>City :</span> {producer.node.frontmatter.city}</h5>
              <h5><span>Established:</span>{producer.node.frontmatter.established}</h5>
              <h5><span>Website:</span> <a add target="_blank" rel="noopener noreferrer" href={producer.node.frontmatter.website}>{producer.node.frontmatter.website}</a></h5>
            </div>
          </div>
        
      ))}
      </div>
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
                webpOptions: {quality: 100}
                quality: 100
                placeholder: BLURRED
              
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