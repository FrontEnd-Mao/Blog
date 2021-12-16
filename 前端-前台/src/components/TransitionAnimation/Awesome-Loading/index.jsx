import React, { Component } from 'react'
import './style.css'
export default class index extends Component {
    componentDidMount() {
        
    }
    render() {
        console.log(this.props.loading)
        return (
            <div className="loading" style={{display: this.props.loading ? 'block' : 'none'}}>
                
            </div>
            
        )
    }
}
