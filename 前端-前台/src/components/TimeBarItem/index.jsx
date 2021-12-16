import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <li className="TimeBarItem">
                <div className="TimeBarItemInfo">
                    <span>9月 12， 2021</span>
                </div>
                <div className="TimeBarItemMarker"></div>
                <div className="TimeBarItemContent">
                    <h3>
                        前端学习
                    </h3>
                    <p>
                        2.页面布局用的什么布局？flex布局用了哪些属性呢？怎么垂直居中？justify-content,text-align?
                        justify-content：center 主轴线居中
                        text-alin：center 垂直交叉线居中
                        3.css3新特性了解哪些，说一下？...
                    </p>
                </div>
            </li>
        )
    }
}
