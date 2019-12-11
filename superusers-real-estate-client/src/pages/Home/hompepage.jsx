import React from "react";

// components
import HompageSlider from '../../components/homepage-slider/homepage-slider.component'
import Collections from '../../components/collections/collections.component'
// Material ui
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  ...theme.theme,
  addIcon: {
    cursor: "pointer"
  },
  container: {
    marginBottom: theme.spacing(5)
  }
});

const Home = ({ classes }) => {

  return (
    <>
      <HompageSlider />
      <Collections />
    </>
  );
};


export default withStyles(styles)(Home);
