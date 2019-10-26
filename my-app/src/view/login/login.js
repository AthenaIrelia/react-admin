import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import axios from 'axios'
class login extends Component {

  handleSubmit = e => {
    let _this = this
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      axios.post('/api/jvtc/find_score/api/v1/login', {
        loginCode: values.username,
        passWord: values.password
      })
        .then(await function (response) {
          console.log(response.data.token);
          if (response.data.token) {
            _this.props.history.push({ pathname: '/Home', query: { token: response.data.token, loginCode: values.username } })
          }
        })
        .catch(function (error) {
          console.log(error);
        });

    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="box">
        <div className="from-box">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <p className="title">成绩查询系统</p>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(login);