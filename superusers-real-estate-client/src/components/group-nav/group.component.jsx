import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { withStyles, Grid, Container } from '@material-ui/core';

import NavItem from '../nav-item/nav-item.component'
import clsx from 'clsx';

const styles = theme => ({
  ...theme.theme,
  collectionContainer: {
    paddingTop: theme.spacing(5),
  }
})
const GroupNav = ({ classes, className }) => {
  return (
    <Container maxWidth="lg" className={clsx(classes.collectionContainer, className)}>
      <Grid container justify="center" spacing={2}>
        <Grid item xl={3} lg={4} md={4} sm={6} xg={12}>
          <NavItem />
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={6} xg={12}>
          <NavItem />
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={6} xg={12}>
          <NavItem />
        </Grid>
      </Grid>
    </Container>
  )
}

GroupNav.propTypes = {
  className: PropTypes.string,
}

export default withRouter(withStyles(styles)(GroupNav))
