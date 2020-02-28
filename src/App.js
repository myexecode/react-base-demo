import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import routerList from './routers'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {
            routerList.map((rItem, rIndex) => {
              return (
                <Route key={rIndex} exact={rItem.exact===undefined?true:rItem.exact} {...rItem} />
              )
            })
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
