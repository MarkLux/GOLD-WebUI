import React from 'react';
import { browserHistory, hashHistory, Route, Router } from 'react-router';
import App from '../componets/App/index'

// 根据环境设置路由
const history = process.env.NODE_ENV === 'development' ? hashHistory : browserHistory

const AppRouter = ()=>{
  return (
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
    )
}

export default AppRouter;