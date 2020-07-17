import React, {Component} from "react";
import '../Styles/LightSwitch.css';
import Script from "react-load-script";
import LightSwitch from "./LightSwitch";
import {connect} from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: "night"
        }
    }



    render() {

        let componentStyle = {
            backgroundColor : "white" ,
            color : "black"
        };
        if(this.props.mode === "night") {
            componentStyle.backgroundColor = "black";
            componentStyle.color = "white";
        } else {
            componentStyle.backgroundColor = "white";
            componentStyle.color = "black";
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-batman"  style={componentStyle}>
                <a className="navbar-brand" href="#">MirFarzam</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                <Link to="About"
                                      spy={true}
                                      smooth={true}
                                      duration={500}
                                >About</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link to="Projects"
                                      spy={true}
                                      smooth={true}
                                      duration={500}>Projects</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Link to="Skills"
                                      spy={true}
                                      smooth={true}
                                      duration={500}>Skills</Link>
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text">
      <LightSwitch />
    </span>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        mode: state.mode
    };
}

export const ConnectedNavbar = connect(
    mapStateToProps,
    null
)(Navbar);
