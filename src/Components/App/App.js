import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const countDeal = 3;

class App extends React.Component {
  render() {
     const items = [{
    value: 'Изучить HTML',
    isDone: true
  }, {
    value: 'Изучить CSS', 
    isDone: true
    
  }, {
    value: 'Изучить JavaScript', 
    isDone: false
  }, {
    value: 'Изучить React', 
    isDone: false
  }
  , {
    value: 'Найти работу мечты', 
    isDone: false
  }];

  return (
    <div className={styles.wrap}>
<h1 className={styles.title}>Очень важные дела!</h1>
<InputItem/>
<ItemList items={items}/>
<Footer count={countDeal}/></div>);
  }
}

export default App;