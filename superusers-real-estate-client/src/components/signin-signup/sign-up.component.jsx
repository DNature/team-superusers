/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from 'react';

//! Graphql
import { useMutation } from '@apollo/react-hooks';

//! Material Ui
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import UseFormHook from '../hooks/use-form.component'

// UTIL
import { AuthContext } from '../../context/auth';
import { RegisterUser } from '../../graphql';

//? ****************************************
const styles = theme => ({
  ...theme.theme,

  grid: {
    height: '100vh',
    overflow: 'hidden'
  }
});

const SignUp = props => {
  const context = useContext(AuthContext);
  const { classes } = props;
  const [errors, setErrors] = React.useState({});
  const { values, onSubmit, onChange } = UseFormHook(registerUserCallBack, {
    displayName: '',
    email: '',
    mobileNumber: '',
    password: ''
  });

  const [registerUser, { loading }] = useMutation(RegisterUser, {
    update(_, { data: { registerUser: userData } }) {
      context.login(userData)
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
      return false;
    },
    onCompleted() {
      setErrors({})
    },
    variables: values
  });

  function registerUserCallBack() {
    registerUser();
  }

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        {/* <Container maxWidth='xs'> */}
        <Typography variant="h3">Sign Up</Typography>
        {/* </Container> */}

        <form noValidate autoComplete='on' onSubmit={onSubmit}>
          <TextField
            fullWidth
            label='Full name'
            name='displayName'
            id='displayName'
            type='text'
            value={values.displayName}
            onChange={onChange}
            error={errors && errors.displayName ? true : false}
            helperText={errors && errors.displayName}
          />
          <br />
          <br />
          <TextField
            fullWidth
            label='Email'
            name='email'
            id='email'
            type='email'
            value={values.email}
            onChange={onChange}
            error={errors && errors.email ? true : false}
            helperText={errors && errors.email}
          />
          <br />
          <br />
          <TextField
            fullWidth
            label='Mobile Number'
            name='mobileNumber'
            id='mobileNumber'
            type='number'
            value={values.mobileNumber}
            onChange={onChange}
            error={errors && errors.mobileNumber ? true : false}
            helperText={errors && errors.mobileNumber}
          />
          <br />
          <br />
          <TextField
            fullWidth
            label='Password'
            name='password'
            id='password'
            type='password'
            value={values.password}
            helperText={errors && errors.password}
            onChange={onChange}
            error={errors && errors.password ? true : false}
          />
          <br />
          <br />
          <Button
            className={classes.Button}
            color='primary'
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            disabled={loading}
          >
            Sign up
                  {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default withStyles(styles)(SignUp);
