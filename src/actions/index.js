/*
Actionとはjsのオブジェクトのこと
TypeというKeyとそれに対応する値が存在する
Typeの値はユニークでなければならない

Actionを返す関数のことをActionCreatorと呼ぶ

複数の場所で活用するデータは一箇所で定義するのが鉄則なのでここで定義
Viewを担当するコンポーネント側でインポートして特定のイベントを掴んだとき当該のActionCreatorをインヴォーグして適切な状態遷移を実行させる
*/
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// ActionCreator
export const increment = () => ({
    type: 'INCREMENT'
})

export const decrement = () => ({
    type: 'DECREMENT'
})