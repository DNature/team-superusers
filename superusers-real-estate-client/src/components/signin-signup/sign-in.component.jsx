/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from 'react';

//! Graphql
import { useMutation } from '@apollo/react-hooks';

//! Material Ui
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { LoginMutation } from '../../graphql'

// UTIL
import { AuthContext } from '../../context/auth';
import UseFormHook from '../hooks/use-form.component';

//? ****************************************
const styles = theme => ({
  ...theme.theme,

  grid: {
    height: '100vh',
    overflow: 'hidden'
  }
});

const SignIn = props => {
  const context = useContext(AuthContext);
  const { classes, onClose } = props;
  const [errors, setErrors] = React.useState({});

  const { onChange, onSubmit, values } = UseFormHook(loginUserCallBack, {
    email: '',
    password: ''
  });

  const [loginUser, { loading }] = useMutation(LoginMutation, {
    update(_, { data: { loginUser: userData } }) {
      context.login(userData)
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
      return false;
    },
    onCompleted() {
      setErrors({})
      onClose()
    },
    variables: values
  });

  function loginUserCallBack() {
    loginUser();
  }

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <Typography variant="h3">Sign In</Typography>

        <form noValidate autoComplete='on' onSubmit={onSubmit}>
          <TextField
            fullWidth
            label='Full name'
            name='email'
            id='displayName'
            type='text'
            value={values.email}
            onChange={onChange}
            error={errors && errors.email ? true : false}
            helperText={errors && errors.email}
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
            Sign in
            {loading && (
              <CircularProgress color="secondary" size={30} className={classes.progress} />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default withStyles(styles)(SignIn);
