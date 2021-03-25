import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css'

const ItemList = ({ items, onClickDone, onClickDelete }) =>
  (<ul className={styles.list}>
  {items.map(item => <li key={item.id} className={styles.item}>
    <Item 
      value = {item.value} 
      isDone={item.isDone}
      id={item.id} 
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
    </li>)}
  </ul>);

ItemList.defaultProps = {
  items: [{
      value: 'Мы не смогли найти задачи',
      isDone: false
  }]
}

export default ItemList;