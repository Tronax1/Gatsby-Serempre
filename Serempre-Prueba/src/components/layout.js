/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

const useStyles = makeStyles(theme=>({
  appBar:{
    top: 'auto',
    bottom: 0
  }
}))

const Layout = ({children}) =>{
  const classes = useStyles();
  return (
        <>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Button color='inherit'>
            <Link style={{ color: 'white' }} to='/'>TODO</Link>
          </Button>
          <Button color='inherit'>
            <Link style={{ color: 'white' }} to='/Map'>MAP</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        {children}
      </div>
        </>
  )
}

export default Layout
