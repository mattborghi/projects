import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// Switch components
import { withStyles } from '@bit/mui-org.material-ui.styles';
import Switch from '@bit/mui-org.material-ui.switch';
import Grid from '@bit/mui-org.material-ui.grid';
import Typography from '@bit/mui-org.material-ui.typography';

// Theme Icons
import Moon from '@bit/feathericons.react-feather.moon';
import Sun from '@bit/feathericons.react-feather.sun';

import GitHub from "../../static/icons/github.svg"
import GitHubLight from "../../static/icons/github_white.svg"
import LinkedIn from "../../static/icons/linkedin.svg"
import LinkedInLight from "../../static/icons/linkedin_white.svg"

// We should be using a Query, but this is much simpler
import siteConfig from "../../siteConfig"

const AntSwitch = withStyles(theme => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

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
          {/* Toggle Theme */}
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <div className="site-head-right">
                <Typography component="div">
                  <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item><Sun /></Grid>
                    <Grid item>
                      <AntSwitch checked={theme === 'dark'} onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')} name="checkedC" />
                    </Grid>
                    <Grid item><Moon /></Grid>
                  </Grid>
                </Typography>
                <div className="social-links">
                  <a
                    href={`https://github.com/${siteConfig.github}`}
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="github" src={theme === 'light' ? GitHub : GitHubLight} width="20" height="20" />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${siteConfig.linkedin}`}
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="linkedin" src={theme === 'light' ? LinkedIn : LinkedInLight} width="20" height="20" />
                  </a>

                </div>
              </div>
            )}
          </ThemeToggler>
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
