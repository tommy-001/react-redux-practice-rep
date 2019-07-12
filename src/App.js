// JSXのタグはトランスパイルをするとReact.create.elementに変換されるので必ず必要
import React, {Component} from 'react';
import propTypes from 'prop-types';

/*
演習03 コンポーネント
  クラスコンポーネント
*/
/*
 class App extends Component {
   render(){
     return (
       <React.Fragment>
         <label htmlFor="bar">bar</label>
         <input type="text" onClick={() => {console.log("clicked!")}} />
       </React.Fragment>
     )
   }
 }
*/

// 関数コンポーネント
//const App = () => {
/*
演習01 02 基礎
  変数を返却することもできる
  class名を定義するためにはclassNameとする
  returnで返すタブは1つでなければならないのでdevで囲う
  React.Fragmentを使うことで不要なdevを使わなくてもいい
*/
 /*
  const test = "Hi!, Tommy"
  const dom = <h1 className="foo">{test}</h1>;
  return dom

  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => {console.log("I am clicked")}} />
    </React.Fragment>
  )
*/

/*
演習03 コンポーネント
  関数コンポーネントの値を読み込む
*/
 /*
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
*/

/*
演習04 props
  props 親のコンポーネントから子コンポーネントにデータを渡したいときに使う
  propsの要素はMapで管理
*/
/*
  const profiles = [
    {name: "taro", age: 10},
    {name: "hanako", age: 5},
    {name: "okada"}
  ]
  return(
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index}/>
        })
      }
    </div>
  )
*/
//}

/*
  演習03 コンポーネント
  関数コンポーネントの値を読み込む
*/
/*
const Cat = () =>{
  return <div>Neow!</div>
}
*/

/*
演習04 props
  propsとは、コンポーネントの属性のこと
  あるデータの属性に対して参照できるもの
*/
const User = (props) =>{
return <div>Hi! I am {props.name}, and {props.age} years old! </div>
}

/*
演習 05 prop-types
  prop-types コンポーネントのプロパティに対する型をチェックを定義する
  propTypes.型名で型を宣言
  .isRequiredで必須項目の設定ができる
*/
User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

// デフォルトpropsを設定することで宣言されなかった場合このデフォルト値が参照される
User.defaultProps ={
  age: 1
}

/*
 演習 06 state
  state propsと違いコンポーネントの内部のみで使用される
        またpropsは変更不可能な値、イミュータブルな値だったのに対してstateは変更可能
  
  このアップコンポーネントがカウンターコンポーネントを呼ぶ
*/
const App = () => (<Counter></Counter>)

class Counter extends Component {
  // コンポーネントの初期化
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count: 0 }
  }

  // カウントアップ処理。handlePlusButtonが押されたら反応
  // 状態を変えたときにDomも更新したいのでthis.state = {count: this.state.count + 1 }みたいな感じで直接いじるのはダメ
  // setStateを使うと状態と一緒に仮想Domも再描画される
  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  // カウントダウン処理。handleMinusButtonが押されたら反応
  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }


  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>counter: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
      )
  }
}

export default App;
