import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools} from 'redux-devtools-extension'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events-index';
import EventsNew from './components/events-new';
import EventsShow from './components/events-show';
import * as serviceWorker from './serviceWorker';

// Devかどうかで挙動を変える devの場合のみapplyMiddlewareをcomposeWithDevToolsで拡張する
const enhanser = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhanser)
/*
ここで作られるstoreはアプリケーションで唯一のもの
アプリケーション内部の全てのstateはこのストアに集約される
既存のコンポーネントをproviderコンポーネントでラップしてstoreという属性に作成したstoreを渡す
こうすることでアプリケーション内部の全階層のコンポーネントでstoreが参照可能になる
AppをProviderでラップしてそこでstoreを渡す
*/
ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/events/new" component={EventsNew} />
                    <Route path="/events/:id" component={EventsShow} />
                    <Route path="/" component={EventsIndex} />
                    <Route path="/events" component={EventsIndex} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
