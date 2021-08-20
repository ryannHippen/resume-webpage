import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            pHidden: true,

        }
        this.isClicked = this.isClicked.bind(this);
        
    }

    isClicked() {
        if(this.state.pHidden === true) {
            this.setState({ pHidden: false})
        } else {
            this.setState({ pHidden: true})
        }
    }

    render() {
      return (<React.Fragment>
            <a href="#"  onClick= {() => { this.isClicked() }}>Want to buy a new car?</a>
            <p hidden={this.state.pHidden}>Call +11 22 33 44 now!</p>
          </React.Fragment>);
    }
  }
  
  document.body.innerHTML = "<div id='root'> </div>";
    
  const rootElement = document.getElementById("root");
  ReactDOM.render(<Message />, rootElement);

  export default Message