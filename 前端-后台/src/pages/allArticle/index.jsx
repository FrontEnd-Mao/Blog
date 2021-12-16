import React, { Component } from 'react'
import { Input, Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Table from '../../components/Table'
import { getAllArticalAxios } from '../../network/artical.js'

import './index.css'
//搜索
const { Search } = Input;
const onSearch = value => console.log(value);

export default class index extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    getAllArticalAxios().then(res => {
      this.setState({data: res});
    })
  }
  render() {
    const {data} = this.state;
   
    return (
      <div className="allArtical">
        <div className="search">
          <span className="searchTitile">关键词:</span>
          <Space direction="vertical">
            <Search size="large" placeholder="input search text" onSearch={onSearch} enterButton />
          </Space>
        </div>
        <div >
          <a href="http://localhost:3002/writeArticle"><Button type="primary" size="large"><PlusOutlined />写文章</Button></a>
        </div>
        {/* 表格 */}
        <Table articalData={data}></Table>
      </div>

    )
  }
}
