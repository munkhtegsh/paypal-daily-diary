import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './components/main/Main';

export default () => (
  <Switch>
    <Route path='/' component={Main} exact />
    

    
  </Switch>
)

// <Route path='/api/v1/pages' component={DailyPages} />
// <Route path='/api/pages/:'