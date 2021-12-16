import React, { Component } from 'react'
// import allArticle from '../pages/allArticle'
// import writeArticle from '../pages/writeArticle'
import { Route, Switch, Redirect } from 'react-router-dom'
// import app from '../App'
import login from '../pages/login'
import main from '../pages/main'

import './index.css'
export default class index extends Component {
    render() {
        return (

            <Switch>
                <Route path="/login" component={login}></Route>
                <Route path="/main" component={main}></Route>
                <Redirect to="/login"></Redirect>     {/*<Redirect>重定向，当无法匹配到任何路径时跳转到这个界面 */}
            </Switch>


        )
    }
}
