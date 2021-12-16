import React, { Component } from 'react'
import './index.css'
import {getUserAxios} from '../../network/login.js'

export default class index extends Component {

    getUser = () => {
        const {username, password} = this;
        getUserAxios(username.value, password.value).then(res => {
            if(res) {
                this.props.history.push('/main')
            }
        })

    }
    render() {
        return (
            <div className="login_content">
                <div className="glass">
                    <h3>MaoYongYao'Blog</h3>
                    <h1>Sign UP</h1>
                    <form className="login_form" method="post">
                        <div>
                            <div className="form_span"><span >User Name</span></div>
                            <input ref={e => this.username = e} className="form_input" type="text" name="username" id="username" />
                        </div>
                        <div>
                            <div className="form_span"> <span >User Password</span></div>
                            <input ref={e => this.password = e} className="form_input" type="password" name="password" id="password" />
                        </div>
                        <button type="button" className="form_loginbtn" onClick={this.getUser}>Login</button>
                        {/* onClick={this.getUser} */}
                    </form>

                </div>
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
        )
    }
}
