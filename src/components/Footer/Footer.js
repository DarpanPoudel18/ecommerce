import React from 'react'
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { LockOutlined, UserOutlined, createFromIconfontCN, GoogleCircleFilled } from '@ant-design/icons';
import './footer.css'

const Footer = () => {

   // social media icon
   const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
 

  return (
    <div className="footer">
       
        <div className="footer-social-media   ">
       
        <Space className="space">
           <GoogleCircleFilled style={{ fontSize: '26px', color: 'white' }} />
           <IconFont type="icon-facebook" style={{ fontSize: '26px', color: 'white' }} />
           <IconFont type="icon-twitter" style={{ fontSize: '26px', color: 'white' }} />
        </Space>
        </div>
        <p style={{textAlign:'center'}}>&copy; Darpan Poudel 2023</p>


    </div>
   
  )
}

export default Footer