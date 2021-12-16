import React, { Component } from 'react'
import HomeMain from '../../components/HomeMain'
import Top from '../../components/Top'
import HomeContents from '../../components/HomeContents'
// import TransitionAnimation from '../../components/TransitionAnimation'

import './index.css'


export default class home extends Component {
    render() {
        return (
            <div className="home">
                {/* <TransitionAnimation></TransitionAnimation> */}
                <div className="homeCenter">
                    <Top></Top>
                    <HomeMain></HomeMain>
                    <HomeContents></HomeContents>
                </div>
            </div>
        )
    }
}
