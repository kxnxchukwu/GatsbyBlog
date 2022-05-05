/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, lightTheme, darkTheme } from "../styles/GlobalStyles"
import useLocalStorage from 'use-local-storage';


import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  const [theme, setTheme] = useLocalStorage('theme', true ? lightTheme : darkTheme);

  const themeToggler = () => {
    const newTheme = theme.colors.background === '#fff' ? darkTheme : lightTheme;
    setTheme(newTheme);
  };

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <>
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} themeToggler = {themeToggler} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
