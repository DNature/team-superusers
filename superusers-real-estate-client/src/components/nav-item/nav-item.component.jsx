import React from 'react';
import { Link } from 'react-router-dom'
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
  },
  cardContent: {
    textAlign: 'center',
    display: 'grid',
    placeContent: 'center'
  },
  button: {
    margin: '10px auto',
    width: '100%',
    textAlign: 'center'
  }
})

const NavItem = ({ classes, imageUrl, title, description, buttonTitle, path, disabled }) => (
  <Card>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title="Contemplative Bungallo"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h2" component="h2">
          {title}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <div className={classes.button}>
        <Button component={Link} to={path} disabled={disabled} size="small" color="primary" variant="contained">
          {buttonTitle}
        </Button>
      </div>
    </CardActionArea>
  </Card>
)


export default withStyles(styles)(NavItem)
