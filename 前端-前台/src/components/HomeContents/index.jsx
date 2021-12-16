import React, { Component } from 'react'
import './index.css'
import ArticalCard from '../ArticalsCard'
import MyInfo from '../MyInfo'

import {getArticalAxios} from '../../network/artical.js'

export default class index extends Component {
    state = {
        artcialInfo:[]
    }
    componentDidMount () {
        console.log(1);
        getArticalAxios().then(res => {
            console.log(res);
            this.setState({artcialInfo: res});
        })
    }
    render() {
        return (
            <div className="homeContents">
                <div className="homeContentsBlog">
                    <div className="title">
                        <img src="./img/artical.png" alt="artical" /><span>文章</span>
                    </div>
                    <div className="articalContent">
                       {
                           this.state.artcialInfo.map((value) => {
                               return  <ArticalCard artcialInfo={value} key={value.key}></ArticalCard>
                           })
                       }
                    </div>
                    <MyInfo></MyInfo>
                </div>
            </div>
        )
    }
}
