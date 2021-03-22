import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
  {todoItem.map(todo => <li key={todo.value}>
    <Item value = {todo.value}/>
    </li>)}
  </ul>);

export default ItemList;