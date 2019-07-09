import React, { memo } from 'react'
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { PAGE_TITLE } from '../assets/en_US'

const Layout = memo(props => (
  <Paper elevation={0} style={{ padding: 0, margin: 0 }}>
    <AppBar color='secondary' position='static' style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <IconButton edge='start' color='inherit' aria-label='Menu'>
          <MenuIcon />
        </IconButton>
        <Typography color='inherit'>{PAGE_TITLE}</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
))

export default Layout
