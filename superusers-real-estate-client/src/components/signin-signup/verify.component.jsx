/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from 'react';

//! Graphql
import { useMutation } from '@apollo/react-hooks';

//! Material Ui
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography, Button, CircularProgress } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { VerificationMutation } from '../../graphql'

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

const VerifyComponent = (props) => {
  const context = useContext(AuthContext);
  const { classes, onClose } = props;
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = UseFormHook(verificationCallback, {
    mobileNumber: "",
  });

  const [verifyMessage, { loading }] = useMutation(VerificationMutation, {
    update(_, { data: { verifyMessage: verificationCode } }) {
      context.verify("Check your phone for verification code")
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

  function verificationCallback() {
    verifyMessage();
  }

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <Typography variant="h3">Sign In</Typography>

        <form noValidate autoComplete='on' onSubmit={onSubmit}>
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
          <Button
            className={classes.Button}
            color='primary'
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            disabled={loading}
          >
            Confirm
            {loading && (
              <CircularProgress color="secondary" size={30} className={classes.progress} />
            )}
          </Button>
        </form>
      </div>

    </div>
  );
};

export default withStyles(styles)(VerifyComponent);
