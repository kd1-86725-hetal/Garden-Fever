import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {Form  ,Item,Input,BreadcrumbItemPropsnput,message, Typography, Divider} from "antd"; 
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SellerLogin()
{
    const navigate = useNavigate();
    const url = "http://localhost:8080/seller/login";
    const[loginDetails,setLoginDetails] = useState({email:"",password:""});
    const[seller,setSeller] = useState([]);
    const[message,setMessage] = useState("");

    const handleChange = (event,field) =>{
        let actualVal = event.target.value;
        setLoginDetails({
            ...loginDetails,
            [field]:actualVal
        })
    }

    const Reset = () =>{
        setLoginDetails({
            email:"",
            password:""
        })
    }

    const DoLogin = ()=>
    {
        console.log(loginDetails);
        if(loginDetails.email === ''){
            toast.warning("Email is required");
        }
        if(loginDetails.password === ''){
            toast.warning("Password is required");
        }

        axios.post(url,loginDetails)
            .then((result)=>{
              setSeller(result.data);
              sessionStorage.setItem("email",JSON.stringify(loginDetails.email));
              sessionStorage.setItem("sid",seller.sid)
              if(seller.sid!=undefined)
              {
                nav();
              }
            })
            .catch(error => console.error("Error fetching user: ",error));
           
    }
    
    const nav = ()=>
    {
      navigate("/SellerDashboard");

    }
    
    return (

        <center>
         
         <div className="appBg">
        <Form className="loginForm">
          <Typography.Title>Welcome Back!</Typography.Title>
          <Form.Item 
          rules={[
            {
              required:true,
              type:"email",
              message:"Please Enter Valid Email!!"
            },
              ]} label="Email" name={'email'}>
            <Input required placeholder="Enter your email" 
                            name="email" 
                            type="email"
                            value={loginDetails.email}
                            onChange={(e)=>handleChange(e,'email')} />
          </Form.Item>
          <Form.Item rules={[
            {
              required:true,
              message:"Please Enter Valid Password!!"
            },
               ]}label="Password" name={'password'}>
            <Input.Password  required placeholder="Enter your password" 
                                      type='password'
                                      name="password" 
                                      value={loginDetails.password}
                                      onChange={(e)=>handleChange(e,'password')} />
          </Form.Item>
          <button className="btn btn-primary" type="submit" style={{display:"block"}} onClick={DoLogin} >
            Login<ToastContainer  position="top-center"/>
          </button>
          
          <Divider style={{borderColor:'black'}}></Divider>
          <a href="/SellerRegistration" style={{color:"Black"}}><b>New Seller, Click here to register</b></a>
        </Form>
    </div>
  </center>
    )
}

export default SellerLogin;