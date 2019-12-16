import React, { useState } from 'react';

import { FormControl, InputLabel, Select, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  ...theme.theme,
  form: {
    margin: theme.spacing(1),
    minWidth: 300,
  }
})
const SelectCategory = (props) => {
  const { classes, children, value, onChange, name, helpertext, ...otherProps } = props
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <FormControl className={classes.form}>
        <InputLabel style={{ marginLeft: 10 }} id="group-controlled-open-select-label">Select Category</InputLabel>
        <Select
          labelId="group-controlled-open-select-label"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          name={name}
          onChange={onChange}
          {...otherProps}
        >
          {children}
        </Select>
      </FormControl>
      {helpertext ? (
        <Typography
          align='center'
          style={{ margin: 'auto', color: 'red' }}
          variant='body2'
        >
          {helpertext}
        </Typography>
      ) : null}
    </>
  )
}

export default withStyles(styles)(SelectCategory)
