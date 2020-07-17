import React, { Component } from "react";
import './Styles/App.css';




class Welcome extends Component {
    render(){
        return(
          <h1>Aide Shoma Mobarak {this.props.name}</h1>
        );
    }
}

export default Welcome;






