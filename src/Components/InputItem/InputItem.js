import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '85%',
      marginLeft: '7%'
    },
    '& .MuiInputLabel-animated': {
      fontSize: 29
    },
    '& .MuiInputBase-input': {
      height: '1.8em'
    }
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
          <TextField
          id="standard-input"
          label="Добавить дело"
        />
      </div>
    </form>
  );
}