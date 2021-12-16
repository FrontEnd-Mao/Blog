import React, { Component } from 'react'

import Router from './router/index'
import { BrowserRouter } from 'react-router-dom'


export default class App extends Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Router>
                    </Router>
                </BrowserRouter>

            </div>

        )
    }
}
