import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <p>
      Metafacture was originally developed an maintained by Markus Geipel and Christoph Böhme at the
      {` `}
      <a href="https://www.dnb.de/EN/Ueber-uns/ueberUns_node.html">German National Library (DNB)</a>. 
      It's on GitHub since 2013, currently 18 contributors, 53 stars. Since 2019 Metafacture is maintained by 
      {` `}
      <a href="https://lobid.org/team">Open Infrastructure, hbz NRW</a>, with contributions fromt he community.
      </p>
      <p>
      Metafacture is a toolkit for processing semi-structured data with a focus on library metadata. 
      It provides a versatile set of tools for reading, writing and transforming data. 
      Metafacture can be used as a stand-alone application or as a Java library in other applications. 
      The name Metafacture is a portmanteau of the words meta data and manufacture.
      </p>

    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`