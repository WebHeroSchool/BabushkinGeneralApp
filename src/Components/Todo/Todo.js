import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => { 
  const initialState = {
    items: [
    {
        value: 'Изучить HTML',
        isDone: true,
        id: 1
      },
      {
        value: 'Изучить CSS',
        isDone: true,
        id: 2
      },
      {
        value: 'Изучить JavaScript',
        isDone: false,
        id: 3
      },
      {
        value: 'Изучить React',
        isDone: false,
        id: 4
      },
      {
        value: 'Найти работу мечты',
        isDone: false,
        id: 5
      }
    ],
    count: 5,
    idCount: 5
  };

const [items, setItems] = useState(initialState.items);
const [count, setCount] = useState(initialState.count);
const [idCount, setIdCount] = useState(initialState.idCount);

useEffect(()=>{
  console.log("update");
});

useEffect(()=>{
  console.log("mount");
},[]);


  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList)
  };

  const onClickDelete = id => {
    const newItemList = items.filter(item => item.id !== id);
    setItems(newItemList)
    setCount((count)=>count-1)
  }



  const onClickDeleteAll = isDone => {
    const newItemList = items.filter(item => item.isDone === false);
    setItems(newItemList)
    setCount((count)=>items.filter(item => item.isDone === false).length)
  };

  const onClickAdd = value =>{
    const newItems = [
      ...items,
      {
        value,
        isDone: false,
        id: idCount + 1
      }
    ];
    setIdCount(idCount + 1)
    setItems(newItems)
    setCount((count)=>count+1)
  };

  return (
    <div className={styles.wrap}> 
    <h1 className={styles.title}>Очень важные дела!</h1> 
    <InputItem onClickAdd={onClickAdd}/> 
    <ItemList 
      items={items}
      onClickDone={onClickDone} 
      onClickDelete={onClickDelete}
    /> 
    <Footer  
      count={count}  
      onClickDeleteAll={onClickDeleteAll} 
    />
    </div>);
};

export default Todo;