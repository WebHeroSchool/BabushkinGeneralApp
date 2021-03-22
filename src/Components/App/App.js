import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const countDeal = 10;
const todoItem = [{
    value: 'Взять себя в руки!'
  }, {
    value: 'Закончить курсы!'
  }, {
    value: 'Развиваться в разработке дальше!'
  }];

const App = () =>  (
    <div className={styles.wrap}>
<h1 className={styles.title}>Очень важные дела!</h1>
<InputItem/>
<ItemList todoItem={todoItem}/>
<Footer count={countDeal}/></div>);

export default App;