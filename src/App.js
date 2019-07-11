// JSXのタグはトランスパイルをするとReact.create.elementに変換されるので必ず必要
import React from 'react';

function App() {
  // 変数を返却することもできる
  //const test = "Hi!, Tommy"
  //class名を定義するためにはclassNameとする
  //const dom = <h1 className="foo">{test}</h1>;
  // return dom

  //returnで返すタブは1つでなければならないのでdevで囲う
  //React.Fragmentを使うことで不要なdevを使わなくてもいい
  return (
    <React.Fragment>
      <label htmlFor="bar">
        bar
      </label>
      <input type="text" onClick={() => {console.log("I am clicked")}} />
    </React.Fragment>
  )
}


export default App;
