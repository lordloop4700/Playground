import React, { Component } from 'react';

class Subject extends Component{
    render(){ //메소드(클래스 안에 있는 함수는 function을 생략함)
      return(
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      )
    }
}

export default Subject;