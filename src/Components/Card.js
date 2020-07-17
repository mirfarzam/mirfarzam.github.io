import React, { Component } from "react";
import '../Styles/App.css';


class Card extends Component {
    render(){
        return(
            <div className={"col-lg-3 col-md-3 col-sm-6"}>
                <div className="card">
                    <img className="card-img-top" src={`${this.props.img}`} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">
                            open source platform for tracking and logging data with real-time processing
                        </p>
                        <a href={`${this.props.link}`} className="btn btn-primary">Go to Repo</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;






