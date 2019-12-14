import React from "react";
import PropTypes from 'prop-types'

import {
  withStyles,
  TableCell,
  Chip
} from "@material-ui/core";

const styles = theme => ({
  ...theme.theme,
});

const SearchOutput = ({ classes, className, property, ...otherProps }) => {
  const { name, description, hotSale } = property
  console.log(name)
  return (
    <>
      <TableCell>
        {name} <br />
        {description.substring(0, 50) + '...'}
      </TableCell>
      <TableCell>
        {hotSale === 'true' && (
          <Chip
            size="small"
            clickable
            color="secondary"
            label={"hotSale"}
            className={classes.date}
          />
        )}
      </TableCell>
    </>
  )
}

SearchOutput.propTypes = {
  className: PropTypes.string,
}

export default withStyles(styles)(SearchOutput)