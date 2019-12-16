import React from "react";
import {
  withStyles,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Divider, Grid, Container, Button
} from "@material-ui/core";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import { Close, AcUnit, LocalParking, Style } from '@material-ui/icons';
import DeleteButton from "../delete-button/delete-button.component";


const styles = theme => ({
  ...theme.theme,
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  map: {
    width: '100%',
    height: '300px'
  },
  features: {
    verticalAlign: 'center'
  }
});



function Map() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 9.076479, lng: 7.398574 }} />
}

const WrappedMap = (withScriptjs(withGoogleMap(Map)))


const CustomDialogContent = ({ classes, id, handleClose, ...otherProps }) => {
  return (
    <>

      <DialogTitle>
        <Typography variant="h3">28 Royal Brook Ln, New York Mills, NY</Typography>
        <Typography variant="h4" color="secondary">$98,000</Typography>
        {handleClose && (
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
        )}
      </DialogTitle>
      <Divider />
      <br />

      <DialogContent>
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="parentImage">
              <img src={`/images/sliders/${Math.ceil(Math.random() * 5)}.jpg`} alt="image" />
            </div>
            <Grid container spacing={1}>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <img src={`/images/sliders/${Math.ceil(Math.random() * 5)}.jpg`} alt="image" />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <img src={`/images/sliders/${Math.ceil(Math.random() * 5)}.jpg`} alt="image" />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <img src={`/images/sliders/${Math.ceil(Math.random() * 5)}.jpg`} alt="image" />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <img src={`/images/sliders/${Math.ceil(Math.random() * 5)}.jpg`} alt="image" />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12}>
                <img src={`/images/sliders/${Math.ceil(Math.random() * 5)}.jpg`} alt="image" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className={classes.map}>
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDE1EQbT6to6kJrno6AIXyFdPZyFL_Tkoc&callback=initMap`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
            <br />
            <Divider />
            <br />
            <Typography variant="body1" color="inherit">
              This beautiful over 1600 square foot ranch home in the New York Mills School District offers 3 Bedrooms, 2 1/2 Bathrooms, an attached garage, and newly refinished hardwood floors throughout. Featuring a warm eat in kitchen, dining room, large family room, and living room with fireplace! Appliances include stainless steel refrigerator (2012), stainless steel stove (2004), and a dishwasher (2001). Attached finished garage with cable and phone hookups, ceiling fan, and screens. 2019 -Cellar wiring updated in basement . 150 AMP electric 2011 - New boiler/water heater with 4 zones! The basement can be entered through the garage or outside door, and has an attached shed with two double doors. Enjoy the large backyard with a brook that runs by the yard that is frequented by wildlife such as deer, rabbits, and ducks! Pride of ownership shows throughout this fine home owned by the same family for 37 years! Look no further! Motivated Sellers!
            </Typography>
            <br />
            <br />
            <Typography component="h2" color="secondary">Features</Typography>
            <Container maxWidth="sm"> <br /><Divider /><br />
              <Grid container spacing={5}>
                <Grid item lg={6}>
                  <div className={classes.features}>
                    <span><Style /></span> Garbage
                  </div>
                  <div className={classes.features}>
                    <Style /> Garbage
                  </div>
                  <div className={classes.features}>
                    <Style /> Garbage
                  </div>

                </Grid>
                <Grid item lg={6}>
                  <div className={classes.features}>
                    <Style /> Garbage
                  </div>
                  <div className={classes.features}>
                    <Style /> Garbage
                  </div>
                  <div className={classes.features}>
                    <Style /> Garbage
                  </div>
                </Grid>
              </Grid>

            </Container>

            <br />
            <Divider />
            <br />
            <Button variant="contained" color="primary">Buy now</Button>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <DeleteButton id={id} onClick={handleClose} />
      </DialogActions>
    </>
  )
}

export default withStyles(styles)(CustomDialogContent)