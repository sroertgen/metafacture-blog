import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children  }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let footer



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
      <a href="http://www.metafacture.org/extensions">Extensions</a>
      {` | `}
      <a href="https://www.github.com/metafacture">Metafacture on GitHub</a>
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
