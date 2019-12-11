import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, withStyles } from '@material-ui/core';

const styles = theme => ({
  ...theme.theme,
  root: {
    boxShadow: 'none'
  },
  navLogo: {
    color: theme.palette.primary.light
  }
});

const Topbar = props => {
  const { classes, className, ...rest } = props;
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color='primary'
      position='fixed'
    >
      <Toolbar>
        <h4 className={`logo ${classes.navLogo}`}>My Home</h4>
      </Toolbar>
    </AppBar>
  );
};
Topbar.propTypes = {
  className: PropTypes.string
};
export default withStyles(styles)(Topbar);
