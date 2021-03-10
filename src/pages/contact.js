import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <p>
        Feel free to open issues in the <a href="https://github.com/metafacture/metafacture-documentation/issues?q=">issue tracker</a>, not only for bugs or enhancements, but also questions about Metafacture usage, or to share your experiences.
      </p>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
