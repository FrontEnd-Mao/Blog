import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className="myInfo">
                <div className="info">
                    <div className="headportrait"><img src="./img/headportrait.jpg" alt="headportrait" /></div>
                    <div className="infoItem">
                        <span className="name"><h2>iwwl</h2></span>
                        <span><h5>Think like an artist, develop like an artisan.</h5></span>
                        <span><h4>maoyongyao@163.com</h4></span>
                        <ul>
                            <li><a href="https://github.com/FrontEnd-Mao" target="_blank" rel="noopener noreferrer"><i class="iconfont">&#xe885;</i></a></li>
                            <li><a href="https://space.bilibili.com/172008592" target="_blank" rel="noopener noreferrer"><i class="iconfont">&#xe75d;</i></a></li>
                            <li><a href="https://blog.csdn.net/weixin_43538709?spm=1000.2115.3001.5343" target="_blank" rel="noopener noreferrer"><i class="iconfont">&#xe600;</i></a></li>
                            <li><a href="https://www.zhihu.com/people/mmmao-mao-35" target="_blank" rel="noopener noreferrer"><i class="iconfont">&#xea8b;</i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
