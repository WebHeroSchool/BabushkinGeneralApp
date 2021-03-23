import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const Item = ({ value, isDone, onClickDone, id }) => (<span onClick={()=> onClickDone(id)} id="item" className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone 
  }) 
}>
{ value }
<DeleteOutlinedIcon id="delete" className={styles.delete}/>
</span>)

export default Item;