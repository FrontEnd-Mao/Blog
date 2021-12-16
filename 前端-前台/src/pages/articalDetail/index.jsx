import React, { Component } from 'react'
import Top from '../../components/Top'
import Marked from "marked";
import { getDetailArticalAxios } from '../../network/artical.js'
import hljs from "highlight.js";
import AwesomeLoading from '../../components/TransitionAnimation/Awesome-Loading'

import 'highlight.js/styles/monokai-sublime.css';
import './index.css'
import './markdown.css'
export default class index extends Component {
    state = {
        artical: {},
        loading: true
    }
    componentDidMount() {
        Marked.setOptions({
 
            renderer: new Marked.Renderer(),
            gfm: true,
            pedantic: false,
            sanitize: false,
            tables: true,
            breaks: true,
            smartLists: true,
            smartypants: true,
            highlight: function (code) {
                    return hljs.highlightAuto(code).value;
            }
           
          }); 
        
        getDetailArticalAxios(this.props.location.state.articalId).then(res => {
            this.setState({ artical: res[0] });
            console.log(this.state.artical);
            document.getElementById('artical').innerHTML =
                Marked(this.state.artical.content);
            this.setState({loading: !this.state.loading});
        });


    }
    render() {
        return (
            <div className="articalDetail">
                <Top></Top>
                <AwesomeLoading loading={this.state.loading}></AwesomeLoading>
                <div className="articalDetailCenter">
                    <div className="detailCenterTop">
                        {/* <img src="../img/4797320.jpg" alt="" /> */}
                        <div className="mask"></div>
                        <div className="header">
                            <h1>{this.state.artical.title}</h1>
                            <p>
                                <img src="./img/headportrait.jpg" alt="" />
                                <span className="articalInfo">iwwl</span>
                                <span className="bull">·</span>
                                <span className="articalInfo">2021-9-29</span>
                                <span className="bull">·</span>
                                <span className="articalInfo">3 浏览量</span>
                            </p>
                        </div>
                    </div>

                    <div className="articalDetailConetnt" >
                        <div id="artical"></div>
                 

                    </div>
                </div>
            </div>
        )
    }
}
