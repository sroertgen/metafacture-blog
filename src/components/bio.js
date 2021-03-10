/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
          }
          description
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const description = data.site.siteMetadata?.description
  const social = data.site.siteMetadata?.social

  return (
    <div  className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/metafacture-logo.png"
        width={50}
        height={50}
        quality={95}
        alt="Metafacture ant"
      />
      {author?.name && (
       <p>
        {description}
        {` `}
        This blog is maintained by <strong>{author.name}</strong>.
        {` `}
        <a href={`https://twitter.com/${social?.twitter || ``}`}>
         Follow Metafacture on Twitter
        </a>
       </p>
      )}
    </div>
  )
}

export default Bio
