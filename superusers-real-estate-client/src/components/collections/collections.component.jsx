import React from 'react';
import { withRouter } from 'react-router-dom'

import { withStyles, Grid, Container } from '@material-ui/core';

import CollectionItem from '../collection-item/collection-item.component'

const styles = theme => ({
  ...theme.theme,
  collectionContainer: {
    paddingTop: theme.spacing(5),
  }
})
const Collections = ({ classes }) => {
  return (
    <Container maxWidth="lg" className={classes.collectionContainer}>
      <Grid container justify="center" spacing={2}>
        <Grid item xl={3} lg={4} md={4} sm={6} xg={12}>
          <CollectionItem />
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={6} xg={12}>
          <CollectionItem />
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={6} xg={12}>
          <CollectionItem />
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={6} xg={12}>
          <CollectionItem />
        </Grid>
        <Grid item xl={3} lg={4} md={4} sm={6} xg={12}>
          <CollectionItem />
        </Grid>
      </Grid>
    </Container>
  )
}

export default withRouter(withStyles(styles)(Collections))
