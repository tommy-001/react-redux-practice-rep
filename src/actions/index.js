/*
Actionとはjsのオブジェクトのこと
TypeというKeyとそれに対応する値が存在する
Typeの値はユニークでなければならない

Actionを返す関数のことをActionCreatorと呼ぶ

複数の場所で活用するデータは一箇所で定義するのが鉄則なのでここで定義
Viewを担当するコンポーネント側でインポートして特定のイベントを掴んだとき当該のActionCreatorをインヴォーグして適切な状態遷移を実行させる
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// ActionCreator
export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})
*/

/*
演習 08 外部APIコール
本来は、ピュアなオブジェクトを返さないといけないのでこのイベントの中で非同期な処理は許されないがそれを可能にするのがredux-thunk
redux-thunkを使うとActionの代わりに関数を返すことができる
*/
import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = `http://udemy-utils.herokuapp.com/api/v1`
const QUERYSTRING = `?token=token123`

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({ type: READ_EVENTS, response })
}