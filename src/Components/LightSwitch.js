import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import changeMode from '../Actions/action'

import React, {Component} from "react";
import '../Styles/LightSwitch.css';
import Script from "react-load-script";


class LightSwitch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: "night"
        }
    }

    toggle() {
        let newMode = (this.state.mode === "night") ? "day" : "night";
        // this.props.modeActions(newMode)
    }



    render() {
        return (
            <div className="toggle">
                <input className="toggle-input" type="checkbox" onClick={()=> this.props.changeLight(this.props.mode)}/>
                <div className="toggle-bg"/>
                <div className="toggle-switch">
                    <div className="toggle-switch-figure"/>
                    <div className="toggle-switch-figureAlt"/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        mode: state.mode
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        changeLight(mode) {
            dispatch(changeMode(mode));
        }
    };
}
//
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LightSwitch);
