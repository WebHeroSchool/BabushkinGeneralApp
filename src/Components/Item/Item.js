import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (<div id="item" className={styles.wrap}><span onClick={()=> onClickDone(id)} className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone 
  }) 
}>
{ value }
</span><DeleteOutlinedIcon onClick={()=> onClickDelete(id)} className={styles.delete}/></div>)

export default Item;