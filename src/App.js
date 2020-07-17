import React from 'react';
import logo from './logo.svg';
import './Styles/App.css';
import data from "./data"
import { SocialIcon } from 'react-social-icons';
import 'bootstrap/dist/css/bootstrap.css';
import {ConnectedFullSection} from "./Components/FullSection";
import LightSwitch from "./Components/LightSwitch";
import { ConnectedNavbar }  from "./Components/Navbar";
import { ConnectedHero }  from "./Components/Hero"
import Card from "./Components/Card";



function App() {
    return (
        <div className={"App"}>

            <ConnectedNavbar/>
            <ConnectedFullSection background={"black"}>
                <ConnectedHero className={"hero"}>

                </ConnectedHero>
             </ConnectedFullSection>

<hr/>

            <ConnectedFullSection id="About" className={"about"}>
                <h3>
                    {data.sections[0].title}
                </h3>
                <p>
                    {data.sections[0].items[0].content}
                </p>
                <p>
                <SocialIcon url="https://www.instagram.com/mirfarzam/" style={{marginLeft:"10px", marginRight:"10px"}}/>
                <SocialIcon url="https://www.linkedin.com/in/mirfarzam/" style={{marginLeft:"10px", marginRight:"10px"}}/>
                <SocialIcon url="https://twitter.com/mirfarzam" style={{marginLeft:"10px", marginRight:"10px"}}/>
                </p>
            </ConnectedFullSection>

            <hr/>

            <ConnectedFullSection id="Projects" className={"opensource"}>
                <img  className={"title-logo"} src={"./yoda.png"}/>
                <h3 style={{marginTop:'20px', marginBottom:'20px'}}>
                    MAY THE SOURCE BE WITH YOU
                </h3>
                <p>
                    Open source matters! I use open source codes everyday so I share most of my personal projects in order to help the open source ecosystem
                </p>
                <div className={"row"}>
                    <Card img={"/heravi.png"} title={"Heravi Analytics"} link={"https://github.com/heravi-analytics"}/>
                    <Card img={"/zaal.jpg"}  title={"Zaal AI"} link={"https://github.com/Zaal-ai"}/>
                    <Card img={"/namb.jpg"}  title={"NAMB"} link={"https://github.com/mirfarzam/namb"}/>
                    <Card img={"/db.png"}  title={"Downloader Bro"} link={"https://github.com/mirfarzam/DownloaderBro"}/>

                </div>
            </ConnectedFullSection>

            <hr/>


            <ConnectedFullSection id="Skills" className={"opensource"}>
                <img  className={"title-logo"} src={"./batman.png"}/>
                <h2 style={{marginTop:'20px', marginBottom:'20px', color:'#4a4849'}}>
                    My Skills
                </h2>
                <div className={"row justify-content-center"}>
                    <div className={"skill-card python"}>Python</div>
                    <div className={"skill-card java"}>Java</div>
                    <div className={"skill-card scala"}>Scala</div>
                    <div className={"skill-card javascript"}>JavaScript</div>
                </div>
            </ConnectedFullSection>



        </div>
    );
}

export default App;
