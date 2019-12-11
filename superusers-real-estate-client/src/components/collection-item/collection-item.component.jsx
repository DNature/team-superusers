import React from 'react';

import { withStyles, Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions, } from '@material-ui/core';

const styles = theme => ({
  ...theme.theme,
  media: {
    height: 369,
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
      <CardMedia
        className={classes.media}
        image="/images/sliders/1.jpg"
        title="Contemplative Bungallo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Well Maintained Large Studio with balcony
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Apartment for Sale, Diamond Views 1, Jumeirah Village Circle
          </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className={classes.ammount}>
      <Button size="small" color="primary" variant="contained">
        Learn More
        </Button>
      <div>
        <Typography color="primary" variant="h5">$95,000,000</Typography>
        <Typography color="secondary" variant="body2" className={classes.crossed}>$105,000,000</Typography>
      </div>
    </CardActions>
  </Card>
)


export default withStyles(styles)(CollectionItem)
