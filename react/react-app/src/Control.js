import React, { Component } from 'react';

class Control extends Component{
    render(){ //메소드(클래스 안에 있는 함수는 function을 생략함)
      return(
        <ul>
          <li><a href="create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href="update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete"></input></li>
        </ul>
      )
    }
}

export default Control;