import React from "react";
import {
  withStyles,
  Dialog,
  DialogActions,
  Button
} from "@material-ui/core";
import CustomDialogContent from "./dialog-content.component";

const styles = theme => ({
  ...theme.theme
})

const CustomDialog = ({ classes, open, handleClose, ...otherProps }) => {

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
        fullWidth

        {...otherProps}
      >
        <CustomDialogContent handleClose={handleClose} />

      </Dialog>
    </>
  )
}

export default withStyles(styles)(CustomDialog);
