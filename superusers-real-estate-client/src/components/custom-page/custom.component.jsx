import React from "react";
import PropTypes from 'prop-types'

// Material ui
import { withStyles } from '@material-ui/core'
import clsx from "clsx";

const styles = theme => ({
  ...theme.theme,
  root: {
    height: '40vh',
    width: '100vw',
    position: 'relative',
    background: `linear-gradient(70deg, ${theme.palette.primary.dark}, ${theme.palette.success.main})`,
    display: 'grid',
    placeContent: 'center'
  },
  background: {
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: '0.3'
  },
  textContainer: {
    zIndex: 2,
    fontSize: 30,
    textAlign: 'center'
  },
  heading: {
    color: 'white'
  }
});

const CustomPage = ({ classes, background, headingText, children, className, ...otherProps }) => {

  return (
    <>
      <div className={clsx(classes.root, className)} {...otherProps}>
        <div className={classes.background} style={{ backgroundImage: `url(${background})` }} />
        <div className={classes.textContainer}>
          <h1 className={classes.heading}>{headingText}</h1>
        </div>
        <div className={classes.searchbox}>
          {children}
        </div>
      </div>
    </>
  );
};


CustomPage.propTypes = {
  background: PropTypes.string,
}

export default withStyles(styles)(CustomPage);
