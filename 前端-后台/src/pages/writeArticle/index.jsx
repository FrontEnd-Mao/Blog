import React, { Component } from 'react'
import Editor from 'for-editor'
import { Button, Input, notification } from 'antd';
import { SmileOutlined, CloseCircleOutlined } from '@ant-design/icons';

import { submitArticalAxios } from '../../network/artical.js'
export default class index extends Component {


    state = {
        value: '',
        title: '',
    }
    openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };
    handleChange = (value) => {
        this.setState({
            value
        })
    }
    getTitle = (title) => {
        this.setState({
            title
        })
    }
    submitArtical = () => {
        if(this.state.value === '' || this.state.title === '') {
            notification.open({
                message: '错误！',
                description:
                  '文章或者标题不能为空',
                icon: <CloseCircleOutlined style={{ color: 'red' }} />,
              });
           
        }
        else{
            submitArticalAxios(this.state.title, this.state.value).then(res => {
                if (res) {
                    this.setState({
                        value: '',
                        title: '',
                    })
                    
                    notification.open({
                        message: '提示',
                        description:
                            '上传文章成功~',
                        icon: <SmileOutlined style={{ color: 'rgb(82,196,26)' }} />,
                    });
                }
            })
        }
    }
    render() {
        const { value } = this.state
        return (
            <div>
                <div>
                    <span>文章标题：</span>
                    <Input placeholder="Basic usage" size="middle" value={this.state.title} onChange={(e) => this.getTitle(e.target.value)} />
                </div>
                <Editor value={value} onChange={this.handleChange.bind(this)} />
                <Button type="primary" size="large" onClick={this.submitArtical}>上传</Button>
            </div>
        )

    }

}
