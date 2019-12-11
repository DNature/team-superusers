import React from 'react';

import { withStyles, Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions, } from '@material-ui/core';

const styles = theme => ({
  ...theme.theme,
  media: {
    height: 160,
  },
  ammount: {
    marginLeft: 'auto',
    justifyContent: 'space-between !important'
  },
  crossed: {
    textDecoration: 'line-through'
  }
})

const CollectionItem = ({ classes }) => (
  <Card>
    <CardActionArea>

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Well Maintained Large Studio with balcony
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Apartment for Sale, Diamond Views 1, Jumeirah Village Circle
          </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image="/images/sliders/1.jpg"
        title="Live from space album cover"
      />
    </CardActionArea>
  </Card>
)


export default withStyles(styles)(CollectionItem)
