import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <li className="timeBarItem period">
                <div className="TimeBarMarker"></div>
                <div className="TimeBarContent"><h2>2021-9</h2></div>
            </li>
        )
    }
}
