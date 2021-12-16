import React, { Component } from 'react'
import MyNavLink from '../MyNavLink'
import './index.css'

export default class Top extends Component {
    render() {
        return (
            <div className="Top">
                <div className="TopLeft">
                    <img src="https://see.fontimg.com/api/renderfont4/9D3Z/eyJyIjoiZnMiLCJoIjoxMjYsInciOjEwMDAsImZzIjoxMjYsImZnYyI6IiNGRkZGRkYiLCJiZ2MiOiIjMDYwNjA2IiwidCI6MX0/aXd3bOKAmGJsb2c/alien-league-regular.png" alt="title" />
                </div>
                <div className="TopCenter">
                    <nav>
                        <ul>
                            <li><MyNavLink to="/home">首页</MyNavLink></li>
                            <li><MyNavLink to="/messageBoard">留言板</MyNavLink></li>
                            <li><MyNavLink to="/file">归档</MyNavLink></li>
                            <li><MyNavLink to="/about">关于</MyNavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="TopRight">

                    <img src="./img/headportrait.jpg" alt="head portrait"/>

                </div>
            </div>

        )
    }
}
