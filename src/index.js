import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events-index';
import EventsNew from './components/events-new';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))
/*
ここで作られるstoreはアプリケーションで唯一のもの
アプリケーション内部の全てのstateはこのストアに集約される
既存のコンポーネントをproviderコンポーネントでラップしてstoreという属性に作成したstoreを渡す
こうすることでアプリケーション内部の全階層のコンポーネントでstoreが参照可能になる
AppをProviderでラップしてそこでstoreを渡す
*/
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/events/new" component={EventsNew} />
                <Route exact path="/" component={EventsIndex} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
