import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage} from 'gatsby-plugin-image'
import WebsiteSVG from '../images/card-assets/website.svg'
import LocationSVG from '../images/card-assets/location.svg'
import PhoneSVG from '../images/card-assets/phone.svg'
import EmailSVG from '../images/card-assets/email.svg'
import BusinessLocationSVG from '../images/card-assets/businesslocation.svg'
import EstablishedSVG from '../images/card-assets/established.svg'
 
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
              <h5><img src={BusinessLocationSVG} alt="globe" />{producer.node.frontmatter.address}</h5>
              <h5><span><img src={EmailSVG} alt="globe" /></span> {producer.node.frontmatter.email}</h5>
              <h5><span><img src={PhoneSVG} alt="globe" /></span> {producer.node.frontmatter.phone}</h5>
              <h5><span><img src={LocationSVG} alt="globe" /></span> {producer.node.frontmatter.country}</h5>
              <h5><span><img src={EstablishedSVG} alt="globe" /></span>{producer.node.frontmatter.established}</h5>
              <h5><span><img src={WebsiteSVG} alt="globe" /></span> <a add target="_blank" rel="noopener noreferrer" href={producer.node.frontmatter.website}>{producer.node.frontmatter.website}</a></h5>
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
                transformOptions: {fit:COVER}
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