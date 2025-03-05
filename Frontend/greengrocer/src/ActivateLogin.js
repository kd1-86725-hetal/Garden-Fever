import "./otpstyle.css"
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {Form,Input,Typography} from "antd";
function ActivateLogin() {

    
    const[activateDetails,setActivateDetails] = useState({email:"",otp:""});
    const navigate = useNavigate();
    const handleChange = (event,field) =>{
        let actualVal = event.target.value;
        setActivateDetails({
            ...activateDetails,
            [field]:actualVal
        })
    }

    const Reset = () =>{
        setActivateDetails({
            email:"",
            otp:""
        })
    }

    const DoActivate = ()=>
    {
        const url = `http://localhost:8080/greengrocer/user/${activateDetails.email}`;
        console.log(activateDetails);
        if(activateDetails.email === null){
            toast.error("Email is required");
        }
        if(activateDetails.otp === null){
            toast.error("Otp is required");
        }
        axios.post(url,activateDetails)
            .then((result)=>{
                console.log(result.data)
              if(result.data=="success"){
                navigate("/UserLogin");
              }
            })
            .catch((error)=>{
              alert("Invalid Email or Otp");
            })
        }

    return ( 

        <center>
        <div className="appBg">
        <Form className="loginForm">
          <Typography.Title>Verify Account!</Typography.Title>
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
                            value={activateDetails.email}
                            onChange={(e)=>handleChange(e,'email')}
                             />
          </Form.Item>
          <Form.Item rules={[
            {
              required:true,
              message:"Please Enter Valid Password!!"
            },
               ]}label="Otp" name={'otp'}>
            <Input  required placeholder="Enter 6 digit" 
                                      type='text'
                                      name="otp"
                                      value={activateDetails.otp}
                                      onChange={(e)=>handleChange(e,'otp')} 
                                      />
          </Form.Item>
          <button className="btn btn-primary" type="submit" style={{display:"block"}} onClick={DoActivate} >
            Verify
          </button>
          
          <a href="/UserRegistration" style={{color:"Black"}}><b>New User, Click here to register</b></a>
        </Form>
    </div>
          
  </center>
 
 
  );
      
}

export default ActivateLogin;