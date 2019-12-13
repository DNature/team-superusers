import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { Properties } from "../../graphql";
// components
import CustomPage from '../../components/custom-page/custom.component';
import CreateProperty from '../../components/create-property/create-property.component'
import Collections from '../../components/collections/collections.component';
import SearchBox from '../../components/search-box/search-box.component'
import { UseFormHook } from '../../components/hooks'

// Material ui
import { withStyles, Grid, Typography, LinearProgress } from '@material-ui/core'
import SearchOutput from '../../components/search-box/search-output.component';

const styles = theme => ({
  ...theme.theme,
  createProperty: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  output: {
    zIndex: 1000
  }

});


const SellPage = ({ classes }) => {
  const { data, loading } = useQuery(Properties);
  const { values, onChange, onSubmit } = UseFormHook(callback, {
    value: ""
  });

  function callback() {

  }

  if (data) {
    const { properties } = data;

    const filteredProperties = properties.filter(p => {
      if (values.value === '') {
        return
      }
      return p.name.toLowerCase().includes(values.value.toLowerCase())
    })
    return (
      <div>
        {loading && <LinearProgress color="secondary" />}
        <CustomPage background="/images/sliders/2.jpg" headingText="My Properties">
          <SearchBox values={values.value} onChange={onChange} onSubmit={onSubmit} />
        </CustomPage>
        <Grid container>
          <Grid item lg={4} md={5} sm={12} xs={12} className={classes.createProperty}>
            <CreateProperty />
          </Grid>
          <Grid item lg={8} md={7} sm={12} xs={12} className={classes.createProperty}>
            <Typography variant="h3">Recent Properties</Typography>
            <Collections properties={properties} />
          </Grid>
        </Grid>
        {
          filteredProperties.map(f => (
            <SearchOutput className={classes.output} property={f} key={f.id} />
          ))
        }
      </div>
    )
  } else {
    return null
  }
}

export default withStyles(styles)(SellPage)
