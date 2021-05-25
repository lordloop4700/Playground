import React, {Component} from 'react';
import './App.css';

class UpdateContent extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: this.props.data.title,
      desc:this.props.data.desc
    }
  }

  inputFormHandler(e){
    this.setSate({[e.target.name]:e.target.value});
  }
    render(){
      return(
        <article>
          <h2>Update</h2>
          <form action="create_process" method="post" onSubmit={function(e){
            e.preventDefault();
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
            )
          }.bind(this)}
            onSubmit={function(e){
              e.preventDefault()
              this.props.onSubmit(e.target.title.value, e.target.desc.value);
              alert('Submit!!!')
            }.bind(this)}>
            <p>
              <input type="text" name="title" placeholder="title" value={this.state.title} onChange={
                this.inputFormHandler().bind(this)}>
              </input>
            </p>
            <p>
              <textarea name="desc" placeholder="decription" value={this.state.desc} onChange={function(e){
                console.log(e.target.value)
                this.setSate({desc:e.target.value});
              }.bind(this)}></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      )
    }
}

export default UpdateContent;