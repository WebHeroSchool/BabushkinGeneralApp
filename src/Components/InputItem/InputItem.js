import React from 'react';
import styles from './InputItem.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class InputItem extends React.Component {
  state = {
    inputValue: ""
  };
  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });

    this.props.onClickAdd(this.state.inputValue);
  }

  render() {

    const { onClickAdd } = this.props;

    return(<Grid className ={styles.wrap}>
      <TextField
          id='standard-dense'
          label='Добавить задание'
          margin='dense'
          fullWidth
          value = {this.state.inputValue}
          onChange={event => this.setState({inputValue: event.target.value})}
      />
      <Button
          disabled={!this.state.inputValue}
          variant='contained'
          color='primary'
          fullWidth
          onClick = {this.onButtonClick}
      >
          Добавить
      </Button>
    </Grid>);
  }
}

export default InputItem;