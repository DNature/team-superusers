import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { withStyles, Grid } from '@material-ui/core';

import CollectionItem from '../collection-item/collection-item.component'
import clsx from 'clsx';
import CustomDialog from '../custom-dialog/custom-dialog.component';

const styles = theme => ({
  ...theme.theme,
  collectionContainer: {
    paddingTop: theme.spacing(5),
  }
})
const Collections = ({ classes, className }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = e => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={clsx(classes.collectionContainer, className)}>
      <Grid container spacing={1}>
        <Grid onClick={handleOpen} item xl={3} lg={6} md={6} sm={12} xg={12}>
          <CollectionItem />
        </Grid>
        <Grid onClick={handleOpen} item xl={3} lg={6} md={6} sm={12} xg={12}>
          <CollectionItem />
        </Grid>
        <Grid onClick={handleOpen} item xl={3} lg={6} md={6} sm={12} xg={12}>
          <CollectionItem />
        </Grid>
        <Grid onClick={handleOpen} item xl={3} lg={6} md={6} sm={12} xg={12}>
          <CollectionItem />
        </Grid>
        <Grid onClick={handleOpen} item xl={3} lg={6} md={6} sm={12} xg={12}>
          <CollectionItem />
        </Grid>
        <Grid onClick={handleOpen} item xl={3} lg={6} md={6} sm={12} xg={12}>
          <CollectionItem />
        </Grid>
        <Grid onClick={handleOpen} item xl={3} lg={6} md={6} sm={12} xg={12}>
          <CollectionItem />
        </Grid>
      </Grid>
      <CustomDialog open={open} handleClose={handleClose} />
    </div>
  )
}

Collections.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default withRouter(withStyles(styles)(Collections))
