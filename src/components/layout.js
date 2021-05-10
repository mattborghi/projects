import React from "react"
import { Link } from "gatsby"

import GitHub from "../../static/icons/github.svg"
import LinkedIn from "../../static/icons/linkedin.svg"

// We should be using a Query, but this is much simpler
import siteConfig from "../../siteConfig"

const Layout = props => {
  const { location, title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href="#link"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menubar">
              <li
                className={`nav-home` + (location.pathname === `/` ? ` nav-current` : ``)}
                role="none"
              >
                <Link to="/" role="menuitem">Home</Link>
              </li>
              <li role="none"><a href={siteConfig.url}>Main Page</a></li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to="/">
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href={`https://github.com/${siteConfig.github}`}
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="github" src={GitHub} width="20" height="20" />
              </a>
              <a
                href={`https://linkedin.com/in/${siteConfig.linkedin}`}
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="linkedin" src={LinkedIn} width="20" height="20" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
