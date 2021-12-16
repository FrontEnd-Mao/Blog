import React, { Component } from 'react'
import './index.css'
import Top from '../../components/Top'
import TimeBarPeriod from '../../components/TimeBarPeriod'
// import TimeBarItem from '../../components/TimeBarItem'
export default class file extends Component {
    render() {
        return (
            <div className="file">
                <Top></Top>
                <div className="fileContent">
                    <div className="fileTop">
                        <div className="mask"><p>我的归档</p></div>
                    </div>
                    <div className="archiveContent">
                        <ul>
                            <TimeBarPeriod></TimeBarPeriod>
                            {/* <TimeBarItem></TimeBarItem> */}
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
