import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faMastodon } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ location, title, children  }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let footer
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            mastodon
            twitter
            github
          }
        }
      }
    }
  `)
  const social = data.site.siteMetadata?.social


  header = (
    <div>
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      <Link className="header-link" to="/">
        Blog
      </Link>
      {` | `}
      <Link className="header-link" to="/about">
        About
      </Link>
    </div>
  )

  footer = (
    <div>
      <Link to="/contact">Contact</Link>
      {` | `}
      <a href="http://www.metafacture.org">Metafacture.org</a>
      {` | `}
      <a href={`https://openbiblio.social/@${social?.mastodon || ``}`}>
        Mastodon <FontAwesomeIcon icon={faMastodon} style={{ color: `#3088d4`}}/>
      </a>
      {` | `}
      <a href={`https://twitter.com/${social?.twitter || ``}`}>
        Twitter <FontAwesomeIcon icon={faTwitter}/>
      </a>
      {` | `}
      <a href={`https://www.github.com/${social?.github || ``}`}>
        GitHub <FontAwesomeIcon icon={faGithub} style={{ color: `#000`}}/>
      </a>
      {` | `}
      <a href="/rss.xml">Feed</a>
    </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  )
}

export default Layout
