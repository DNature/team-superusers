import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  withStyles,
  Badge,
  Hidden,
  IconButton,
  Button
} from '@material-ui/core';
import { Notifications, Input, Menu } from '@material-ui/icons';

const styles = theme => ({
  ...theme.theme,
  root: {
    boxShadow: 'none'
  },
  navLogo: {
    color: 'white'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
});

const Topbar = props => {
  const { classes, className, onSidebarOpen, ...rest } = props;
  const [notifications] = React.useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color='primary'
      position='fixed'
    >
      <Toolbar>
        <h3 className={`logo ${classes.navLogo}`}>Dream Home</h3>

        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <Button
            component={Link}
            to='/buy'
            color='primary'
            variant='contained'
          >
            Buy
          </Button>
          <Button
            component={Link}
            to='/rent'
            color='primary'
            variant='contained'
          >
            Rent
          </Button>
          <Button
            component={Link}
            to='/sell'
            color='primary'
            variant='contained'
          >
            Sell
          </Button>

          <IconButton color='inherit'>
            <Badge
              badgeContent={notifications.length}
              color='secondary'
              variant='dot'
            >
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color='inherit'>
            <Input />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color='inherit' onClick={onSidebarOpen}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
Topbar.propTypes = {
  className: PropTypes.string
};
export default withStyles(styles)(Topbar);
