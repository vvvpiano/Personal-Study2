import React , { Component } from 'react';

class Subject extends Component {
    render() { // class 안에 소속된 함수는 function render()에서 fucntion을 생략한다.
      return (
        // component는 반드시 하나의 최상위 태그만 써야 한다.
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault(); // 링크를 클릭했을때 페이지가 바뀌는 것을 막음
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      ); 
    }
  }

  export default Subject;