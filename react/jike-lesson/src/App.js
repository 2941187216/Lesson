import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import { Tabs } from 'antd';
import './mock/data.js'
import axios from 'axios'
const { TabPane } = Tabs;

class Tab1 extends Component {
  constructor() {
    super();

  }
  render() {
    const prop1 = this.props;
    return (
      <Tabs defaultActiveKey="1" >
        <TabPane tab="全部" key="1">
          <Tab2 />
      </TabPane>
        <TabPane tab="未学完" key="2">
          <Tab2 />
      </TabPane>
        <TabPane tab="已学完" key="3">
          <Tab2 />
        </TabPane>
      </Tabs>
    )
  }
}
const dataSource = this.state.list;
class Tab2 extends Component {
  render() {
    return (
      <Tabs  type="card">
        <TabPane tab="所有形式" key="1">
            
        </TabPane>
        <TabPane tab="专栏" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="视频课" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="微课" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="每日一课" key="5">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="其他" key="6">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      tip: '',
      list: []
    }
  }

  componentDidMount() {
    this._loadData();
  }

  async _loadData() {
    this.setState({
      tip: '数据正在加载中...'
    })
    axios.get('/myLessons')
      .then(res => {
        console.log(res.data);
        this.setState({
          tip: this.state.tip,
          list: this.state.list
        })
      })
  }
  render() {
    const props = {
      tip: this.state.tip,
      list: this.state.list
    }
    return (
      <div className="App">
        <h2>我的课程</h2>
        <Tab1 {...props}/>
      </div>
    );
  }

}

export default App;
