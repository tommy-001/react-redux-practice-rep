// JSXのタグはトランスパイルをするとReact.create.elementに変換されるので必ず必要
import React, {Component} from 'react';
import propTypes from 'prop-types';

  /*
  演習03 コンポーネント
　  クラスコンポーネント
  */
 /*
 class App extends Comment {
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
const App = () => {

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
}

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



export default App;
