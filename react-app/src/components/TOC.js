import React , { Component } from 'react';

class TOC extends Component{
    render() {
      var lists = [];
      var data = this.props.data; // 왜 여기가 .contents가 아니라 .data지? -> App.js가 contents를 data 이름으로 넘겨줬음.
      var i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}>
          <a 
          href={"/content/"+data[i].id}
          data-id={data[i].id}
          onClick={function(e){
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id);
          }.bind(this)}
          >{data[i].title}</a></li>); // 이렇게 여러 개의 element를 자동으로 생성하는 경우에는 prop에 대한 unique key를 가지게 하라는 경고메세지가 뜸. 그래서 key={data[i].id}를 통해 리액트에게 key값을 넘겨줌. 우리의 app에서 쓸 것은 아님.
        i = i + 1;
      }
      return (
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC; 