import React, {Component} from "react";
import '../Styles/App.css';
import Script from 'react-load-script'
import {connect} from "react-redux";


class FullSection extends Component {
    render() {
        const {children} = this.props;

        let componentStyle = {
            backgroundColor: this.props.background,
        };

        if(this.props.mode === "night") {
            componentStyle.backgroundColor = "black";
            componentStyle.color = "white";
        } else {
            componentStyle.backgroundColor = "white";
            componentStyle.color="black"
        }

        return (
            <section  id= {`${this.props.id || "farzam"}`} className={ `${this.props.className || ""}`  + " fullPage"} style={componentStyle}>
                <div className={"container"}>
                    {children}
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        mode: state.mode
    };
}

export const ConnectedFullSection = connect(
    mapStateToProps,
    null
)(FullSection);






