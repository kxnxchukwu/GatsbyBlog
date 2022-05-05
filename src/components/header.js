import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Header = ({ siteTitle, themeToggler }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />

        <meta name="image" content="https://kxnxchukwu.github.io//img/og.png" />
        <meta property="og:title" content="Kene's Personal Website" />
        <meta property="og:description" content="Simple Website displaying Kene's portofolio" />
        <meta property="og:image" content="https://kxnxchukwu.github.io//img/og.png" />
    
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://kxnxchukwu.github.io//img/og.png" />
        <meta name="twitter:creator" content="@kxnxchukwu" />
        <meta name="twitter:title" content="Kene's Blog" />
        <meta name="twitter:description" content="Kene's Blog where he talks mostly about JavaScript" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://kxnxchukwu.github.io/"/>
        <meta property="og:title" content="Kene's Blog"/>
        <meta property="og:description" content="Kene's Blog where he talks mostly about JavaScript"/>
        <meta property="og:image" content="https://kxnxchukwu.github.io//img/og.png" />
      </Helmet>
      <header
        style={{
          margin: `0 auto`,
          padding: `var(--space-4) var(--size-gutter)`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: `var(--font-sm)`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onClick={() => themeToggler()}
            readOnly
          />
          <label htmlFor="checkbox" className="checkbox-label">
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
            <span className="ball"></span>
          </label>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
