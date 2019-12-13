import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  withStyles,
  Hidden,
  IconButton,
  Button
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { AuthContext } from '../../../../context/auth';
import SignInSignUpNav from '../../../../components/signin-signup/nav.component.jsx';

const styles = theme => ({
  ...theme.theme,
  root: {
    boxShadow: 'none'
  },
  navLogo: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
    outline: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
});

const Topbar = props => {
  const { classes, className, onSidebarOpen, history, ...rest } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = e => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { user, logout } = React.useContext(AuthContext);

  return (
    <>
      <AppBar
        {...rest}
        className={clsx(classes.root, className)}
        color='primary'
        position='fixed'
      >
        <Toolbar>
          <h3
            className={`logo ${classes.navLogo}`}
            onClick={() => history.push('/')}
          >
            Dream Home
          </h3>

          <div className={classes.flexGrow} />
          <Hidden mdDown>
            <Button
              component={Link}
              to='/rent'
              color='primary'
              variant='contained'
              disabled
            >
              Rent
            </Button>
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
              to='/sell'
              color='primary'
              variant='contained'
              onClick={() => {
                !user && handleOpen();
              }}
            >
              Sell
            </Button>

            {user ? (
              <Button color='primary' variant='contained' onClick={logout}>
                logout
              </Button>
            ) : (
              <Button color='primary' variant='contained' onClick={handleOpen}>
                Sing in
              </Button>
            )}
          </Hidden>
          <Hidden lgUp>
            <IconButton color='inherit' onClick={onSidebarOpen}>
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <SignInSignUpNav handleClose={handleClose} open={open} />
    </>
  );
};
Topbar.propTypes = {
  className: PropTypes.string
};
export default withRouter(withStyles(styles)(Topbar));
