import React from "react";
import PropTypes from 'prop-types'

import { withStyles, InputBase } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";
import { Search as SearchIcon } from "@material-ui/icons";
import clsx from "clsx";

const styles = theme => ({
  ...theme.theme,
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.8),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.5)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
});

const SearchBox = ({ classes, values, onChange, onSubmit, className, ...otherProps }) => {

  return (
    <div className={clsx(classes.search, className)} {...otherProps}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>

      <form onSubmit={onSubmit} autoComplete="off">
        <InputBase
          placeholder="Search..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          name="value"
          inputProps={{ "aria-label": "search" }}
          onChange={onChange}
          value={values}
        />
      </form>
    </div>
  )
}

SearchBox.propTypes = {
  className: PropTypes.string,
}

export default withStyles(styles)(SearchBox)