import { useState, useEffect } from "react";
//import GreenGrocer from '../Services/greengrocer.service';
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Form  ,Item,Input,BreadcrumbItemPropsnput,message, Typography, Divider} from "antd"; 
import "./style.css";
import { redirect,useNavigate } from "react-router-dom";

function UserRegistration(){
    
    const navigate = useNavigate();
    const [user, setUser] = useState({fullName:"",mobileNo:"",email:"",password:"",address:"",city:"",state:"",pinCode:""});
    const [message,setMessage] = useState("");

    const url = "http://localhost:8080/user/createUser";

    const OnTextChange = (args) =>{
        var user1 = {...user};
        user1[args.target.name] = args.target.value;
        setUser(user1);
    }

    const Reset = ()=>
    {
        setUser({fullName:"",mobileNo:"",email:"",password:"",address:"",city:"",state:"",pinCode:""})
    }
    const showMessage = (msgText) =>{
        setMessage(msgText);
        window.setTimeout(()=>{
            setMessage("");
        },3000);
    }
    const saveUser=()=>{
       
        axios.post(url,user)
        .then((result)=>{
            if(result.data.affectedRows !== undefined && result.data.affectedRows>0){
                showMessage("Customer Added Successfully!!!!!");
            }
            navigate("/UserLogin");
            Reset();
        });
        
    }

return(
    <center>
        
     <div className="userRegBg">
    <div className="container">
       

<Form className="registerForm" >
              <Typography.Title style={{fontFamily:"sans-serif",textAlign:"center",color:"Black",marginTop:"20px"}}>User Registration</Typography.Title>
              <Divider style={{borderColor:'green'}}></Divider>

              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="FullName" name={'fullName'}>
                <Input  required placeholder="Enter your Full Name"  name="fullName"
                            value={user.fullName}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="mobileNo" name={'mobileNo'}>
                <Input  required placeholder="Enter your mobileNo" name="mobileNo"
                            value={user.mobileNo}
                            onChange={OnTextChange} />
              </Form.Item>
             
              <Form.Item 
              rules={[
                {
                  required:true,
                  type:"email",
                  message:"Please Enter Valid Email!!"
                },
                  ]} label="Email" name={'email'}>
                <Input required placeholder="Enter your email"  name="email"
                            value={user.email}
                            onChange={OnTextChange}/>
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                  message:"Please Enter Valid Password!!"
                },
                   ]}label="Password" name={'password'}>
                <Input.Password  required placeholder="Enter your password"  name="password"
                            value={user.password}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="Address" name={'address'}>
                <Input  required placeholder="Enter your address"  name="address"
                            value={user.address}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="city" name={'city'}>
                <Input  required placeholder="Enter your city" name="city"
                            value={user.city}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="state" name={'state'}>
                <Input  required placeholder="Enter your state" name="state"
                            value={user.state}
                            onChange={OnTextChange}/>
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="Pincode" name={'pinCode'}>
                <Input required placeholder="Enter your pinCode" name="pinCode"
                               value={user.pinCode}
                            onChange={OnTextChange} />
              </Form.Item>
              
              <button className="btn btn-primary"  style={{marginLeft:"100px",display:"block"}} onClick={saveUser}>
                REGISTER
              </button>
              <br/>
              <Divider style={{borderColor:'green'}}></Divider>
              <a href="/UserLogin" style={{color:"Black"}}><b>Already a user, Click here to login</b></a>
            </Form>
    </div>
    </div>
    </center>
)
};

export default UserRegistration;