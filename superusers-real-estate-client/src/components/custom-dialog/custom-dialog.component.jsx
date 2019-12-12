import React from "react";
import {
  withStyles,
  Dialog
} from "@material-ui/core";

const styles = theme => ({
  ...theme.theme
})

const CustomDialog = ({ children, classes, open, handleClose, ...otherProps }) => {

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        {...otherProps}
      >
        <div handleClose={handleClose} >
          {children}
        </div>
      </Dialog>
    </>
  )
}

export default withStyles(styles)(CustomDialog);
