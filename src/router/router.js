import React from 'react';
import { browserHistory, hashHistory, Route, Router, IndexRoute } from 'react-router';
import App from '../components/App/index'
import FunctionTable from '../components/FunctionTable'
// 临时占位组件
import Placeholder from '../components/Placeholder'

// 根据环境设置路由
const history = process.env.NODE_ENV === 'development' ? hashHistory : browserHistory

// IndexRoute：访问‘/’时，默认展示 FunctionTable 组件。可参考：https://react-guide.github.io/react-router-cn/docs/guides/basics/IndexRoutes.html
const AppRouter = ()=>{
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={FunctionTable} />
        <Route path='/server-list' component={FunctionTable} />
        <Route path='/server-create' component={Placeholder} />
        <Route path='/doing' component={FunctionTable} />
        <Route path='/history' component={Placeholder} />
      </Route>
    </Router>
    )
}

export default AppRouter;