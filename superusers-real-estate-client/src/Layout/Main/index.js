import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Divider,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';
import clsx from 'clsx';

const styles = theme => ({
  ...theme.theme,
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  content: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  footer: {
    marginTop: 'auto !important',
    background: 'white'
  },
  children: {
    marginBottom: theme.spacing(8)
  }
});

const Main = props => {
  const { classes, children } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = React.useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        className={classes.topbar}
        onClose={handleSidebarClose}
        open={!isDesktop && shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        <div className={classes.children}>{children}</div>
        <div className={classes.footer}>
          <Divider />
          <Footer />
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(styles)(Main);
