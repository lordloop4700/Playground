import React, {Component} from 'react';
import './App.css';
import TOC from "./TOC";
import ReadContent from "./ReadContent";
import Subject from "./Subject";
import Control from "./Control"
import CreateContent from "./CreateContent"
import UpdateContent from "./UpdateContent"



class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject: {title:'WEB', sub:'World Wid Web!!'},
      welcome:{title:'Welcome', desc:'Hello, REact!!!'},
      contents:[
        {id:1, title:"HTML", desc:'HTML hello'},
        {id:2, title:"CSS", desc:'css show me the money'},
        {id:3, title:"js", desc:'javascript is not a language'}
      ]
    }
  }

  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === "Welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.title;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === "read"){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id+1;
        // this.state.contents.push({id:this.max_content_id, title:_title, desc:_desc})
        // this.setState({
        //   contents: this.state.contents
        // })
        var _contents = this.state.contents.concat(
          {
              contents: this.state.contents
          }
        )

        this.setState({
          contents:_contents
        })
      }.bind(this)}></CreateContent>
    }else if(this.state.mode === 'update'){
      _article = <UpdateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id+1;
        // this.state.contents.push({id:this.max_content_id, title:_title, desc:_desc})
        // this.setState({
        //   contents: this.state.contents
        // })
        var _contents = this.state.contents.concat(
          {
              contents: this.state.contents
          }
        )

        this.setState({
          contents:_contents
        })
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render(){
    console.log("test")
    
    console.log('reader', this);
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode: 'Welcome'});
          }.bind(this)}
        
        ></Subject>
        

        <TOC onChangePage={function(id){
          this.setState({
            mode: "read",
            selected_content_id: Number(id)
          });
        }.bind(this)} data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    )
  }
}

export default App;
