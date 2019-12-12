import React from 'react'
import { withStyles } from '@material-ui/core';

import SearchBox from "../search-box/search-box.component";

const styles = theme => ({
  ...theme.theme,
  root: {
    height: '90vh',
    width: '100vw',
    overflow: 'hidden'
  },

  searchContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
    background: `linear-gradient(70deg, ${theme.palette.primary.dark}, ${theme.palette.success.dark})`,
    display: 'grid',
    placeContent: 'center'
  },

  searchBg: {
    backgroundImage: `url('/images/sliders/1.jpg')`,
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: '0.3',
  },
  textContainer: {
    zIndex: 2,
    fontSize: 30,
    textAlign: 'center'
  },
  text: {
    color: 'white'
  },
  searchbox: {
    zIndex: 3
  }
})

const HomepageSlider = ({ classes }) => {

  return (
    <div className={classes.root}>
      <div className={classes.searchContainer}>
        <div className={classes.searchBg} />
        <div className={classes.textContainer} >
          <h1 className={`${classes.text} logo`}>Acquire Dream Home</h1>
          <p className={classes.text}>We’ll help you find a place you’ll love.</p>
        </div>
        <SearchBox className={classes.searchbox} />
      </div>
    </div>
  )
}

export default withStyles(styles)(HomepageSlider)
