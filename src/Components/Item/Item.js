import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

class Item extends React.Component {

  render() {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;
     return (<div id="item" className={styles.wrap}><span onClick={()=> onClickDone(id)} className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone 
  }) 
}>
{ value }
</span><DeleteOutlinedIcon onClick={()=> onClickDelete(id)} className={styles.delete}/></div>)
  }
}

Item.defaultProps = {
  value: "Нет задачи"
};

Item.propTypes = {
  value: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])};

export default Item;