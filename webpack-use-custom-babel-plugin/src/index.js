import React,{Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component{
  render(){
    let foo = "aaa";
    return <div>Hello React {bar}</div>
  }
}

ReactDom.render(<App />, document.getElementById('root'));
