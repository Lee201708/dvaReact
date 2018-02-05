import React from 'react';
import { Router, Route, Switch, routerRedux } from 'dva/router';
import IndexPage from './routes/IndexPage';
import dynamic from 'dva/dynamic';
import App from './routes/App';

const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {

  const error = dynamic({
    app,
    component: () => import('./components/Error.js')
  })

  const routes = [
    {
      path: '/products',
      models: () => [import('./models/products.js')],
      component: () => import('./routes/Products.js')
    }
  ]

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          {routes.map(({ path, ...dyna }, key) => (
            <Route key={key} exact path={path} component={dynamic({ app, ...dyna })} />
          ))}}
        </Switch>
      </App>
    </ConnectedRouter>
  );
}

export default RouterConfig;
