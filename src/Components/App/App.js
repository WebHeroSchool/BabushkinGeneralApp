import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const countDeal = 10;

const App = () =>  {
  const items = [{
    value: 'Взять себя в руки!',
    isDone: true
  }, {
    value: 'Закончить курсы!', 
    isDone: false
    
  }, {
    value: 'Развиваться в разработке дальше!', 
    isDone: false
  }];

  return (
    <div className={styles.wrap}>
<h1 className={styles.title}>Очень важные дела!</h1>
<InputItem/>
<ItemList items={items}/>
<Footer count={countDeal}/></div>);
}

export default App;