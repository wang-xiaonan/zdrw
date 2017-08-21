/**
 * @Author: Lyf
 * @Date: 2017-08-15 15:04:29
 * @Last Modified by: Lyf
 * @Last Modified time: 2017-08-15 15:04:57
 * @Description:选择用户弹框
 */

import React, { Component } from 'react';
import { Icon, Modal, Button, Row, Col } from 'antd';
import TreeAsync from '../tree/TreeAsync'

class SelectUser extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const divHeight = 400
    const modalStyle = {
      position: 'fixed',
      margin: 'auto',
      left: 0,
      right: 0,
      top: 30,
      bottom: 0
    }
    const divStyle = {
      height: divHeight,
      overflow: 'auto',
      // border: '1px solid gray'
    }
    return (
      <div>
        <Button type="primary" onClick={this.showModal}><Icon type="user-add" /></Button>
        <Modal
          title="责任领导选择"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="900"
          maskClosable={false}
          style={modalStyle}
        >
          <div style={divStyle} >
            <Row>
              <Col span={8}>
                <h3>国勘组织机构</h3>
                <TreeAsync />
              </Col>
              <Col span={8}><TreeAsync /></Col>
              <Col span={8}><TreeAsync /></Col>
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SelectUser;