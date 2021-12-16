import React, { Component } from 'react'

import 'antd/dist/antd.css'

// import Navbar from './components/NavBar/index'
// import TopTab from './components/TopTab/index'
import Router from './Router/index'
import { BrowserRouter } from 'react-router-dom'


export default class App extends Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>  <Router></Router></BrowserRouter>

            </div>

        )
    }
}
