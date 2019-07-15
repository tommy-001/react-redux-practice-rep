/*
カウンターの値という状態をもつReducer
actionで定義したactionのtypeをインポート
状態の初期値を定義
状態はオブジェクトとして定義
*/
import { INCREMENT, DECREMENT } from '../actions'

// 状態の初期値、カウンターなので0
const initialState = {value: 0}

/*
Count Reducerを定義
index.jsに渡せるようにエクスポートする
関数として定義し引数を2つもつ
state   状態。デフォルト時には、状態をもっていないので初期値を渡す
action  関数の内部で受け取ったアクションで状態を変化させその結果をリターンで返していく

アクションのタイプに応じて処理を分岐
INCREMENT +1する
DECREMENT -1する
デフォルト そのまま返す
*/
export default (state = initialState, action) => {
    switch( action.type ) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}
