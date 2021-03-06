import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchList from './components/main/searchList/SearchList';
import Diary from './components/main/Diary';
import NotePage from './components/main/NotePage';
import Form from './components/main/Form';

export default () => (
  <Switch>
    <Route path="/api/v1/pages/:id" component={Diary}/>
    <Route path="/api/pages/:date" component={NotePage}/>
    <Route path="/api/v1/pages" component={SearchList}/>
    <Route path="/api/pages/today" component={SearchList}/>
    <Route path="/api/pages" component={Form} exact/>
    <Route path="/api/v1/pags" component={SearchList} exact/>
  </Switch>
)
