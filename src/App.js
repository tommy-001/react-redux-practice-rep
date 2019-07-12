// JSXのタグはトランスパイルをするとReact.create.elementに変換されるので必ず必要
import React, {Component} from 'react';
//　クラスコンポーネント
// class App extends Comment {
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("clicked!")}} />
//       </React.Fragment>
//     )
//   }
// }

// 関数コンポーネント
const App = () => {
  // 変数を返却することもできる
  //const test = "Hi!, Tommy"
  //class名を定義するためにはclassNameとする
  //const dom = <h1 className="foo">{test}</h1>;
  // return dom

  //returnで返すタブは1つでなければならないのでdevで囲う
  //React.Fragmentを使うことで不要なdevを使わなくてもいい
  //return (
  //  <React.Fragment>
  //    <label htmlFor="bar">bar</label>
  //    <input type="text" onClick={() => {console.log("I am clicked")}} />
  //  </React.Fragment>
  //)

　//関数コンポーネントの値を読み込む
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () =>{
  return <div>Neow!</div>
}


export default App;
