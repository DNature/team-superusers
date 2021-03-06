import React from "react";
import { useQuery } from '@apollo/react-hooks'
import { Properties } from "../../graphql";

// components
import CustomPage from '../../components/custom-page/custom.component';
import Collections from '../../components/collections/collections.component';
import SearchBox from '../../components/search-box/search-box.component'

// Material ui
import { withStyles, Grid, LinearProgress } from '@material-ui/core'

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 9.076479, lng: 7.398574 }} />
}

const WrappedMap = (withScriptjs(withGoogleMap(Map)))

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
  },
  property: {
    paddingLeft: theme.spacing(1)
  }
});

function BuyAHouse({ classes }) {
  const { data, loading } = useQuery(Properties)
  return (
    <>
      {loading && <LinearProgress color="secondary" />}
      <CustomPage background="/images/sliders/3.jpg" headingText="Search for your dream house">
        <SearchBox />
      </CustomPage>
      <Grid container>
        <Grid item lg={6} md={6} xl={6}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1EQbT6to6kJrno6AIXyFdPZyFL_Tkoc&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Grid>
        <Grid item lg={6} md={6} xl={6} className={classes.property}>
          {
            data && <Collections properties={data.properties} />
          }
        </Grid>
      </Grid>
    </>
  );
};

// AIzaSyDE1EQbT6to6kJrno6AIXyFdPZyFL_Tkoc
//`https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1EQbT6to6kJrno6AIXyFdPZyFL_Tkoc&callback=initMap`

export default withStyles(styles)(BuyAHouse);
