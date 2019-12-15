/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';

//! Graphql
import { useMutation, useQuery } from '@apollo/react-hooks';

//! Material Ui
import withStyles from '@material-ui/core/styles/withStyles';
import { MenuItem, Typography, Button, CircularProgress, Container, Radio, RadioGroup, FormHelperText, FormControl, FormControlLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import UseFormHook from '../hooks/use-form.component'

// UTIL
import { AuthContext } from '../../context/auth';
import { Categories, CreateProperty as CreatePropertyMutation, Properties } from '../../graphql';
import SelectCategory from '../category/select-category.component';

//? ****************************************
const styles = theme => ({
  ...theme.theme,

  grid: {
    height: '100vh',
    overflow: 'hidden'
  }
});

const CreateProperty = props => {
  const { user } = useContext(AuthContext);

  const { classes } = props;
  const [errors, setErrors] = React.useState({});
  const initialState = {
    name: '',
    imageUrl: '',
    description: '',
    location: '',
    ammount: '',
    hotSale: 'false',
    category: ''
  }
  const { values, onSubmit, onChange, setValues } = UseFormHook(createCategoryCallback, initialState);

  const { data } = useQuery(Categories);

  const [createProperty, { loading }] = useMutation(CreatePropertyMutation, {
    variables: values,
    refetchQueries: [{ query: Properties, variables: values }],
    // update: (proxy, result) => {
    //   try {
    //     const data = proxy.readQuery({
    //       query: Properties,
    //       variable: values
    //     });
    //     data.properties = [result.data.createProperty, ...data.properties];
    //     proxy.writeQuery({ query: Properties, variables: { ...values, owner: user.displayName }, data });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
      return false;
    },
    onCompleted() {
      setValues(initialState)
      setErrors({})
    },
  });

  function createCategoryCallback() {
    createProperty();
  }

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <Container maxWidth="xs">
          <Typography variant="h3">Publish a property</Typography>
          <form noValidate autoComplete='on' onSubmit={onSubmit}>
            <TextField
              fullWidth
              label='Property Name'
              name='name'
              id='name'
              type='text'
              value={values.name}
              onChange={onChange}
              error={errors && errors.name ? true : false}
              helperText={errors && errors.name}
            />
            <br />
            <br />
            <TextField
              fullWidth
              label='Image Url'
              name='imageUrl'
              id='imageUrl'
              type='text'
              value={values.imageUrl}
              onChange={onChange}
              error={errors && errors.imageUrl ? true : false}
              helperText={errors && errors.imageUrl}
            />
            <br />
            <br />
            <TextField
              fullWidth
              placeholder="Should be at least 20characters long"
              label='Description'
              name='description'
              id='description'
              type='text'
              multiline
              value={values.description}
              onChange={onChange}
              error={errors && errors.description ? true : false}
              helperText={errors && errors.description}
            />
            <br />
            <br />
            <TextField
              fullWidth
              label='Location/Address'
              name='location'
              id='location'
              type='text'
              value={values.location}
              helperText={errors && errors.location}
              onChange={onChange}
              error={errors && errors.location ? true : false}
            />
            <br />
            <br />
            <TextField
              fullWidth
              label='Price'
              name='ammount'
              id='ammount'
              type='number'
              value={values.ammount}
              helperText={errors && errors.ammount}
              onChange={onChange}
              error={errors && errors.ammount ? true : false}
            />
            <br />
            <RadioGroup aria-label="hotSale" name="hotSale" value={values.hotSale} onChange={onChange}>
              <FormControlLabel value={'true'} control={<Radio />} label="Hot Sale" />
            </RadioGroup>

            <div align='center'>
              <SelectCategory
                value={values.category}
                onChange={onChange}
                fullWidth
                name="category"
                helperText={errors.category && errors.category}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                {data &&
                  data.categories.map(({ id, name }) => (
                    <MenuItem value={name} key={id}>
                      {name}
                    </MenuItem>
                  )
                  )}
              </SelectCategory>
            </div>
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
              Publish
                  {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default withStyles(styles)(CreateProperty);
