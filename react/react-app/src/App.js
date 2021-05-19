import React, {Component} from 'react';
import './App.css';
import TOC from "./TOC";
import Content from "./Content";
import Subject from "./Subject";



class App extends Component{
  constructor(props){
    super(props);
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

  render(){
    console.log("test")
    var _title, _desc = null;
    if(this.state.mode === "Welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.title;
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
    }
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
        {/* <Subject title="React" sub="For UI"></Subject> */}

        {/* <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault(e);
            //이벤트 함수 안에서는 this에 아무 값도 없음. 
            //그러나 bind(this)를 하면 this를 사용 가능함.
            //this.state.mode = "welcome"은 React가 state가 변경되었는지 모르기 때문에 제대로 동작하지 않는다.
            //따라서 .setState()를 사용해야한다.
            //d
            this.setState({
              mode: "welcome"
            })
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}

        <TOC onChangePage={function(id){
          this.setState({
            mode: "read",
            selected_content_id: Number(id)
          });
        }.bind(this)} data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    )
  }
}

export default App;
