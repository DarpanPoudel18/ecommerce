import React, { useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  createFromIconfontCN,
  GoogleCircleFilled,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space } from "antd";
import avatar from "../../images/avatar.png";
import "./account.css";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  // social media icon
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });

  return (
    <div className="Login">
      <div className="login-header">
        <h2 className="welcome-text">Welcome</h2>
        <img src={avatar} alt="img" className="avatar" />
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot">Forgot password</a>
        </Form.Item>

        <Form.Item>
          <div className="login-form-btn">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </div>

          <div className="social-media-icons">
            <h5
              style={{
                marginTop: "10px",
                position: "",
                color: "gray",
                fontSize: "15px",
              }}
            >
              or signup using
            </h5>

            <Space className="space">
              <GoogleCircleFilled
                style={{ fontSize: "26px", color: "#fb641b" }}
              />
            </Space>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

//  <h5 style={{
//         }}>or Sign up using </h5>
