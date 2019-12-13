import React from "react";
import PropTypes from 'prop-types'

import {
  withStyles,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Chip
} from "@material-ui/core";
import clsx from "clsx";

const styles = theme => ({
  ...theme.theme,
  root: {
    zIndex: 1000
  }
});

const SearchOutput = ({ classes, className, property, ...otherProps }) => {
  const { name, description, hotSale } = property
  console.log(name)
  return (
    <div className={clsx(classes.root, className)} {...otherProps}>
      <Paper>
        <Table>
          <TableBody>
            <TableRow hover>
              <TableCell>
                {name} <br />
                {description}
              </TableCell>
              <TableCell>
                <TableCell align="center">
                  {hotSale === 'true' && (
                    <Chip
                      size="small"
                      clickable
                      color="secondary"
                      label={hotSale}
                      className={classes.date}
                    />
                  )}
                </TableCell>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

SearchOutput.propTypes = {
  className: PropTypes.string,
}

export default withStyles(styles)(SearchOutput)