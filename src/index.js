import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import App from './components/App';

import reducer from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)
/*
ここで作られるstoreはアプリケーションで唯一のもの
アプリケーション内部の全てのstateはこのストアに集約される
既存のコンポーネントをproviderコンポーネントでラップしてstoreという属性に作成したstoreを渡す
こうすることでアプリケーション内部の全階層のコンポーネントでstoreが参照可能になる
AppをProviderでラップしてそこでstoreを渡す
*/
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
