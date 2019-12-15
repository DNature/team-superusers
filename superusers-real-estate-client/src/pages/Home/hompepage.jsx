import React from "react";

// components
import HompageSlider from '../../components/homepage-slider/homepage-slider.component'
import GroupNav from '../../components/group-nav/group.component';
import SignInSignUpNav from '../../components/signin-signup/nav.component'
// Material ui
import { withStyles, Container, Typography, Button } from '@material-ui/core'
import { AuthContext } from "../../context/auth";

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
  button: {
    width: "200px",
    margin: '20px auto',
    textAlign: 'center'
  }
});

const Home = ({ classes }) => {
  const [open, setOpen] = React.useState(false);
  const { user } = React.useContext(AuthContext)
  const handleOpen = e => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <HompageSlider />
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" className={classes.text}>We have the most listings and constant updates. <br />
          So you’ll never miss out.</Typography>
        <div className={classes.rule} />
      </Container>
      <GroupNav className={classes.collection} />
      {!user && (
        <>
          <div className={classes.button}>
            <Button color="secondary" variant="contained" onClick={handleOpen}>Sign In</Button>
          </div>
          <SignInSignUpNav handleClose={handleClose} open={open} />
        </>
      )}
    </>
  );
};

export default withStyles(styles)(Home);
