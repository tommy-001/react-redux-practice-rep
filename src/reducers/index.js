/*
アプリケーション内の全てのReducerを総括する
全Reducerを結合する

combineReducersがReducerを結合する機能を持つ
一般的には、複数のReducerを書く
*/
import { combineReducers } from 'redux'
// reducerという名前が一般的すぎるので別名をつける　formのreducerなのでform
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })

