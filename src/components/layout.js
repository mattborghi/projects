import React from "react"
import { Link } from "gatsby"

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
              <li role="none"><Link to="https://mattborghi.github.io">Go Back</Link></li>
              {/* <li
                className={`nav-about` + (location.pathname === `/about` ? ` nav-current` : ``)}
                role="none"
              >
                <Link to="/about" role="menuitem">About</Link>
              </li>
              <li
                className={`nav-elements` + (location.pathname === `/elements` ? ` nav-current` : ``)}
                role="none"
              >
                <Link to="/elements" role="menuitem">Elements</Link>
              </li> */}
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
                href="https://www.facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
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
