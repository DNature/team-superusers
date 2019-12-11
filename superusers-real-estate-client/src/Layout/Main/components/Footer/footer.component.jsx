import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Typography, Link, withStyles } from "@material-ui/core";

const styles = theme => ({
  ...theme.theme,
  root: {
    padding: theme.spacing(4),
  }
});

const Footer = props => {
  const { classes, className, ...rest } = props;

  return (
    <div {...rest} className={clsx(classes.root, className)}>

      <Typography variant="body1">
        &copy;{" "}
        <Link component="a" href="https://divinenature.io/" target="_blank" className="logo">
          Divine Nature
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default withStyles(styles)(Footer);
