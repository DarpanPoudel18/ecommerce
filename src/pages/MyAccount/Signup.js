import React,{useState} from 'react'
import signIn from '../../images/signIn.png'
import {useNavigate} from 'react-router-dom'

import './account.css'

import { Button, Space, Modal,  Layout,Input } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const Signup = () => {
    const navigate = useNavigate();


    const [open, setOpen] = useState(false);
    const showModal = () => {
      setOpen(true);
    };
    const handleOk = (e) => {
      console.log(e);
      setOpen(false);
    };
    const handleCancel = (e) => {
      console.log(e);
      setOpen(false);
    };
  
  return (
    <div className="signup">
    
    
    
    
    <Button type="primary" onClick={showModal}>
        New customer? sign up
      </Button>
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: true }}
        className="ant-modal-content"
      >
        <h2 style={{textAlign:'center',fontFamily:'monospace'}}>Welcome to DARPAN store</h2>

    <Layout>
      <Sider className="sider">
          <img src={signIn} alt="img"/>
          <div className="sider-info">
          Darpan introduces you the first online sale of jhapa!
          Sign up with your mobile number to get started.
          </div>
      </Sider>

       <Layout>
          <Header>
            <span className="header"></span>
         </Header>
         
          <Content className="content">
          <h3 className="content-data">Enter Mobile number</h3>
          <Input className="content-inputfield" maxLength={10} />
              <div className="content-agreement">
              <p>By continuing, you agree to Darpan's Terms of Use and Privacy Policy.</p>
              <Button className="content-login" 
              onClick={()=> navigate("/")}>Existing user?</Button>
              </div>
          </Content>

          <Footer></Footer>
        </Layout>

    </Layout>

      </Modal>

    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Signup