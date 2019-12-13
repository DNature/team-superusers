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

const CollectionItem = ({ classes, name, imageUrl, description, location, ammount, hotSale }) => (
  <Card>
    <CardActionArea>

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>

        <Typography variant="h2" color="secondary" component="p">
          Price: ${ammount}
        </Typography>
      </CardContent>

      <CardMedia
        className={classes.media}
        image={imageUrl}
        title="Live from space album cover"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          Location: {location}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
)


export default withStyles(styles)(CollectionItem)
