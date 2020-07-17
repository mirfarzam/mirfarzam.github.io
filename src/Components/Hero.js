import React, {Component} from "react";
import '../Styles/App.css';
import Script from 'react-load-script'
import {connect} from "react-redux";
import data from "../data";




class Hero extends Component {

    dayTitle = "I'm SeyedFarzam Mirmoeini"
    nightTitle = "I'm MirFarzam"
    python = ""

    constructor(props) {
        super(props);
        this.state = {
            mode: "night"
        }
    }

    render() {
        const {children} = this.props;
        console.log("should be in "+ this.props.mode);
        let componentStyle = {
            color: "white" ,
        };
        let title = ""
        if(this.props.mode === "night") {
            componentStyle.color = "white";
            title = this.nightTitle
            this.python = "Master"
        } else {
            componentStyle.color = "black";
            title = this.dayTitle
            this.python = "Developer"
        }
        return [
            <Script url="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" />,
            <div id={"firstSection"}  className={`${this.props.className || ""}`} style={componentStyle}  >
                <h1 className={"title"}>
                    {title}
                </h1>
                <h2>The Batman Ninja</h2>
                <h3>Python {this.python} and Machine Learning and BigData Engineer</h3>
            </div>,
            <Script url="/scripts/bats.js" />,
        ];
    }
}

function mapStateToProps(state) {
    return {
        mode: state.mode
    };
}

export const ConnectedHero = connect(
    mapStateToProps,
    null
)(Hero);






