import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import home from '../pages/home'
import messageBoard from '../pages/messageBoard'
import articalDetail from '../pages/articalDetail'
import about from '../pages/about'
import file  from '../pages/file'

export default class index extends Component {
    render() {
        return (

            <Switch>
                <Route exact path="/home" component={home}></Route>
                <Route path="/messageBoard" component={messageBoard} />
                <Route path="/file" component={file} />
                <Route path="/about" component={about} />
  
                <Route path="/articalDetail" component={articalDetail} />
                <Redirect to="/home"></Redirect>     {/*<Redirect>重定向，当无法匹配到任何路径时跳转到这个界面 */}
            </Switch>


        )
    }
}
