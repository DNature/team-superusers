import React from "react";
import MySnackbar from "./MySnackbar";
import { withStyles, Snackbar } from "@material-ui/core";

const styles = theme => ({
  ...theme.theme,

  margin: {
    margin: theme.spacing(1)
  }
});

const CustomSnackbar = props => {
  const { classes, open, onClose, message } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <MySnackbar
        onClose={onClose}
        variant="success"
        className={classes.margin}
        message={message}
      />
    </Snackbar>
  );
};

export default withStyles(styles)(CustomSnackbar);
