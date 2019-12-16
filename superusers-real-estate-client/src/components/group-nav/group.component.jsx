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
          <NavItem path="/buy" title="Buy a House" description="Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else" buttonTitle="Search homes" imageUrl="/images/home/1.jpg" />
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={6} xg={12}>
          <NavItem path="/sell" title="Sell a House" description="Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else" buttonTitle="Search homes" imageUrl="/images/home/3.jpg" />
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={6} xg={12}>
          <NavItem disabled={true} path="/rent" title="Rent a House" description="Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else" buttonTitle="Search homes" imageUrl="/images/home/2.jpg" />
        </Grid>
      </Grid>
    </Container>
  )
}

GroupNav.propTypes = {
  className: PropTypes.string,
}

export default withRouter(withStyles(styles)(GroupNav))
