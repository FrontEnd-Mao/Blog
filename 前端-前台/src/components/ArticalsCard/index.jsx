import React, { Component } from 'react'
import MyNavLink from '../MyNavLink';
import './index.css'
export default class index extends Component {
    render() {
        
        const {artcialInfo} = this.props;
        console.log(artcialInfo);
        return (
            <div className="articalCard">
                <div className="carTop">
                    <img src="./img/articalcard.jpg" alt="articalcard" />
                </div>
                <div className="carContant">
                    <div className="carContantInfo">
                        <span className="otherInfo">
                            <img src="./img/time.png" alt="time" />
                            <span>{artcialInfo.publicationTime}发布</span>
                        </span>
               
                            <h1><MyNavLink to={{pathname:'/articalDetail',state:{articalId: artcialInfo.key}}}>{artcialInfo.title}</MyNavLink></h1>

                        <p>dsadasd打打sad撒按时啊大声道撒大大按时大大啊按时打扫大萨达撒撒撒打扫的飒飒的撒啊</p>
                    </div>
                </div>
                <div className="carBottom">
                    <span  className="otherInfo"> 
                        <img src="./img/praise.png" alt="praise" />
                        <span>{artcialInfo.praiseQuantity} 点赞</span>
                    </span>
                    <span  className="otherInfo">
                        <img src="./img/views.png" alt="views" />
                        <span>{artcialInfo.views} 浏览量</span>
                    </span>
                </div>
            </div>
        )
    }
}
