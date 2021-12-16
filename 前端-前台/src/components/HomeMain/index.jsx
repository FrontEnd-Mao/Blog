import React, { Component } from 'react'
import './index.css'
import Parallax from 'parallax-js/parallax.js'
export default class HomeMain extends Component {
    componentDidMount() {
        let scene =document.getElementById('scene');
        new Parallax(scene);
    }
    render() {
        return (
            <div className="homeMainContainer">
            <ul id="scene">
                <li className="layer" data-depth=".2"><img src="./img/planet1.png" alt="plant1"/></li>
                <li className="layer" data-depth=".3"><img src="./img/planet2.png" alt="plant"/></li>
                <li className="layer" data-depth=".2"><img src="./img/man.png" alt="plant"/></li>
                <li className="layer" data-depth=".5"><img src="./img/earth.png" alt="plant"/></li>
                <li className="layer" data-depth=".1"><img src="./img/text.png" alt="plant"/></li>
                <li className="layer" data-depth=".4"><img src="./img/planet3.png" alt="plant"/></li>
                <li className="layer" data-depth=".8"><img src="./img/planet4.png" alt="plant"/></li>
                <li className="layer" data-depth="0"><img src="./img/planet5.png" alt="plant"/></li>
            </ul>
        </div>
        )
    }
} 
