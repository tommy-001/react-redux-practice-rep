/*
アプリケーション内の全てのReducerを総括する
全Reducerを結合する

combineReducersがReducerを結合する機能を持つ
一般的には、複数のReducerを書く
*/
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events})

