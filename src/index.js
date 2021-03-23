import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';

ReactDOM.render(
    <App/>, 
  document.getElementById('root')
);

let ItemOfLists = document.querySelectorAll('#item');

for (let elem of ItemOfLists) {
  elem.onmouseover = function(event) {
    let del = elem.childNodes[1];
    del.style.visibility = "visible";
  }

  elem.onmouseout = function(event) {
    let del = elem.childNodes[1];
    del.style.visibility = "hidden";
  }
}