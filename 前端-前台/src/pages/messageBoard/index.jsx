import React, { Component } from 'react'
import Top from '../../components/Top'

import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className="messageBoard">
                <Top></Top>
                <div className="messageBoardContent">
                    <div className="messageBoardTop">
                        <div className="mask"><p>留言板</p></div>
                    </div>
                    <div className="board">
                        <p>Comments</p>
                        <textarea name="message"  cols="30" rows="10"></textarea>
                        <div className="messagePersonInfo">
                            <input type="text" name="name" placeholder="昵称" />
                            <input type="text" name="email"  placeholder="电子邮件"/>
                            <input type="text" name="personalSite" placeholder="个人站点"/>
                            <button type="submit">提交</button>
                        </div>
                        <div className="MessageArea">
                            留言区
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
