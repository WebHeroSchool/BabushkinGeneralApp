import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const countDeal = 10;
const todoItem = [{
    value: 'Взять себя в руки!'
  }, {
    value: 'Закончить курсы!'
  }, {
    value: 'Развиваться в разработке дальше!'
  }];
  
const App = () =>  (
    <div>
<h1>Очень важные дела!</h1>
<InputItem/>
<ItemList todoItem={todoItem}/>
<Footer count={countDeal}/></div>);

export default App;