import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Topbar } from './components';

const styles = theme => ({
  ...theme.theme,
  root: {
    paddingTop: theme.spacing(10),
    height: '100%'
  },
  content: {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0
  }
});

const Main = props => {
  const { classes, children } = props;

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(styles)(Main);
