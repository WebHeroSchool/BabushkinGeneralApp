import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const countDeal = 3;

class App extends React.Component {
  state = {
    items: [{
        value: 'Изучить HTML',
        isDone: true
      },
      {
        value: 'Изучить CSS',
        isDone: true

      },
      {
        value: 'Изучить JavaScript',
        isDone: false
      },
      {
        value: 'Изучить React',
        isDone: false
      },
      {
        value: 'Найти работу мечты',
        isDone: false
      }
    ]
  };

  constructor(props) {
    super(props);

    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickDone(isDone) {
    console.log(isDone);
  }

  render() {
    return (
      <div className={styles.wrap}>
      <h1 className={styles.title}>Очень важные дела!</h1>
      <InputItem/>
      <ItemList items={this.state.items} onClickDone={this.onClickDone}/>
      <Footer count={countDeal}/></div>);
  }
};

export default App;