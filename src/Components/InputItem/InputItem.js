import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div><TextField
          id="outlined-full-width"
          label="Добавь дело"
          style={{ margin: 8 }}
          placeholder="Дело"
          helperText="Добавь важное дело!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        /></div>)

export default InputItem;