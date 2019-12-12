import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { Properties } from "../../graphql";
// components
import CustomPage from '../../components/custom-page/custom.component';
import CreateProperty from '../../components/create-property/create-property.component'
import Collections from '../../components/collections/collections.component';

// Material ui
import { withStyles, Grid, Typography, LinearProgress } from '@material-ui/core'

const styles = theme => ({
  ...theme.theme,
  createProperty: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  }
});


const SellPage = ({ classes }) => {
  const { data, loading } = useQuery(Properties)
  return (
    <div>
      {loading && <LinearProgress color="secondary" />}
      <CustomPage background="/images/sliders/2.jpg" headingText="My Properties" />
      <Grid container>
        <Grid item lg={4} md={5} sm={12} xs={12} className={classes.createProperty}>
          <CreateProperty />
        </Grid>
        <Grid item lg={8} md={7} sm={12} xs={12} className={classes.createProperty}>
          <Typography variant="h3">Recent Properties</Typography>
          {
            data && <Collections properties={data.properties} />
          }
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(SellPage)
