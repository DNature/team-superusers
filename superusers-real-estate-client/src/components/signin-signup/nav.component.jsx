
import React, { useContext } from 'react';
import { withStyles, Paper, Tabs, Tab, Typography, Box, Grid } from '@material-ui/core';
import CustomDialog from '../custom-dialog/custom-dialog.component';
import SignIn from './sign-in.component'
import SignUp from './sign-up.component'
import VerifyComponent from './verify.component'
import { AuthContext } from '../../context/auth';
import CustomSnackbar from '../MySnackbar/CustomSnackbar'

const styles = theme => ({
  ...theme.theme,
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    backgroundImage: `url('/images/sliders/${Math.ceil(Math.random() * 5)}.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh',
    maxHeight: '80vh',
    width: '100%'
  },
  signInWrapper: {
    display: 'grid',
    placeContent: 'center',
    height: '100%'
  },
  background: {
    backgroundImage: `url('/images/sliders/3.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '70vh',
    maxHeight: '80vh',
    width: '100%'
  }
})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SignInSignUpNav = ({ classes, open, handleClose }) => {
  const [value, setValue] = React.useState(0);
  const { verificationCode } = useContext(AuthContext);
  const [isOpen, setIsOpen] = React.useState(true);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CustomDialog open={open} handleClose={handleClose} maxWidth="lg">
        <Paper>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Sing in" {...a11yProps(0)} />
            <Tab label="Sign up" {...a11yProps(1)} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={classes.signInWrapper}>
                <SignIn onClose={handleClose} />
              </div>
            </Grid>
            <Grid item lg={6} md={6}>
              <div className={`${classes.background}`} />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container>
            <Grid item lg={6} md={6}>
              <div className={`${classes.image}`} />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={classes.signInWrapper}>
                {
                  !verificationCode ? (<VerifyComponent />) : (
                    <>
                      <SignUp onClose={handleClose} />
                      <CustomSnackbar
                        className={classes.snackbar}
                        open={isOpen}
                        onClose={() => {
                          setIsOpen(false);
                        }}
                        message='A six digit code have been sent to you'
                      />
                    </>
                  )
                }

              </div>
            </Grid>
          </Grid>
        </TabPanel>
      </CustomDialog>

    </div>
  )
}

export default withStyles(styles)(SignInSignUpNav)