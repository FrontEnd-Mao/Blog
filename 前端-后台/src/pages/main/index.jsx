import React, { Component } from 'react'
import Navbar from '../../components/NavBar'
import TopTab from '../../components/TopTab'
import AllArticle from '../allArticle/index'
import WriteArticle from '../writeArticle/index'
import { Route, Switch, Redirect } from 'react-router-dom'

import './index.css'

export default class index extends Component {

    render() {
        return (
            <div className="main">
                <Navbar></Navbar>
                <TopTab></TopTab>
                <div className="main_right">
                    <Switch>
                        <Route exact path="/main/allArticle" component={AllArticle} />
                        <Route path="/main/writeArticle" component={WriteArticle} />
                        <Redirect to="/main/allArticle" />
                    </Switch>
                </div>



            </div>

        )
    }
}
