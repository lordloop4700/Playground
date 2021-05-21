import React, {Component} from 'react';
import './App.css'

class TOC extends Component{
  shouldComponentUpdate(newProps, newState){
    if(this.props.data === newProps.data){
      return false;
    }else{
      return true;
    }
  }
    render(){
      var lists= [];
        var data = this.props.data
        var i = 0;

        while(i < data.length){
          lists.push(
          <li key={data[i].id}>
            <a 
              href={data[i].id}  onClick={function(id, e){
                e.preventDefault();
                this.props.onChangePage(id); //속성으로 해도 되고, 바인드로 보내도 댐. 보낼경우 data
              }.bind(this, data[i].id)} > {data[i].title}
            </a>
          </li>)
          i = i + 1;
        }
        return(
          <nav>
            <ul>
              {lists}
            </ul>
          </nav>
        )
    }
}

export default TOC;