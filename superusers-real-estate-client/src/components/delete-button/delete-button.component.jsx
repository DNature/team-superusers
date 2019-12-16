import React from 'react';
import { IconButton } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import { DeleteMutation, Properties } from '../../graphql';
import { useMutation } from '@apollo/react-hooks'

const DeleteButton = ({ id, ...otherProps }) => {
  const [handleDelete] = useMutation(DeleteMutation, {
    variables: { id },
    refetchQueries: [{ query: Properties, variables: { id } }],
    onError(err) {
      console.log(err)
    }
  })
  return (
    <>
      <IconButton onClick={handleDelete} color="secondary" {...otherProps}>
        <DeleteForever color="secondary" />
      </IconButton>
    </>
  )
}

export default DeleteButton