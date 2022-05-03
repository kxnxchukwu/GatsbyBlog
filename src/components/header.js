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
