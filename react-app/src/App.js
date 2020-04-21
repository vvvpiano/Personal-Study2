import React , { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';
import { bindExpression } from '@babel/types';

class App extends Component {
  constructor(props){
    // 어떠한 컴포넌트가 실행될 때 render()보다 먼저 실행되면서 초기화시켜주고 싶다면 constructor 안에 넣어준다. 그 render()함수 하위에 있는 component들의 render()들도 각각 다 다시 호출됨.
    super(props);
    this.state = {
      // 리액트에서는 state값이 바뀌면 그 state를 가지고 있는 component의 render()함수가 다시 호출됨.
      mode: 'read',
      selected_content_id: 2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
 
  render() {
    var _title, _desc = null;
    
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'})
        }.bind(this)}
        ></Subject>
        {/* <header>
          <h1><a href="/" onClick={function(e){ // e : event객체, 핸들링할 수 있게 주입됨.
            console.log(e);
            e.preventDefault();
            // this.state.mode = 'welcome'; this의 값에 대해 세팅되어있지 않음(undefined) 그래서 아래 bind코드로 this 묶어줌, 그리고 이렇게 하면 state값이 변경됐다는 것을 react가 알지 못함. 그래서 아래 코드처럼 작성
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}

        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id: Number(id)
          });
        }.bind(this)} 
        data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
