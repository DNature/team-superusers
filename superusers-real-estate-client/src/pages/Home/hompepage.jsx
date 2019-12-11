import React from "react";

// components
import HompageSlider from '../../components/homepage-slider/homepage-slider.component'
import Collections from '../../components/collections/collections.component'
// Material ui
import { withStyles, Container, Typography } from '@material-ui/core'

const styles = theme => ({
  ...theme.theme,
  addIcon: {
    cursor: "pointer"
  },
  container: {
    marginBottom: theme.spacing(5)
  },
  text: {
    textAlign: 'center',
    margin: 20
  },
  rule: {
    width: '25%',
    height: 3,
    margin: 'auto',
    background: theme.palette.primary.light
  },
  collection: {
    marginTop: theme.spacing(10)
  }
});

const Home = ({ classes }) => {

  return (
    <>
      <HompageSlider />
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" className={classes.text}>We have the most listings and constant updates. <br />
          So you’ll never miss out.</Typography>
        <div className={classes.rule} />
      </Container>
      <Collections className={classes.collection} />
    </>
  );
};


export default withStyles(styles)(Home);
