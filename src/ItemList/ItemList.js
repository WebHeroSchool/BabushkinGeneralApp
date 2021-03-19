import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItem, Item2, Item3, Item1}) => (<ul>
  <li><Item todoItem={todoItem[0]}/></li>
  <li><Item todoItem={todoItem[1]}/></li>
  <li><Item todoItem={todoItem[2]}/></li>
  </ul>)

export default ItemList;