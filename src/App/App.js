import React from 'react';
import ItemList from '../Components/ItemList/ItemList';
import InputItem from '../Components/InputItem/InputItem';
import Footer from '../Components/Footer/Footer';
import './App.css';

const countDeal = 10;
const todoItem = [{
    value: 'Взять себя в руки!'
  }, {
    value: 'Закончить курсы!'
  }, {
    value: 'Развиваться в разработке дальше!'
  }];

const App = () =>  (
    <div className="wrap">
<h1 className="wrap__title">Очень важные дела!</h1>
<InputItem/>
<ItemList todoItem={todoItem}/>
<Footer count={countDeal}/></div>);

export default App;