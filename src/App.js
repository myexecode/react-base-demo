import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routerList from './routers'

import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading</div>}>
        <BrowserRouter>
          <Switch>
            {
              routerList.map((rItem, rIndex) => {
                return (
                  <Route key={rIndex} exact={rItem.exact === undefined ? true : rItem.exact} {...rItem} />
                )
              })
            }
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
