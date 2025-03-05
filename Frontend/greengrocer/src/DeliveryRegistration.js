import { useState,useEffect } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Form  ,Item,Input,BreadcrumbItemPropsnput,message, Typography, Divider} from "antd"; 
import "./style.css";

function DeliveryRegistration()
{
    const[deliveryboy,setDeliveryBoy] = useState({fullName:"",mobile:"",email:"",password:"",address:"",city:"",state:"",pincode:"",aadhar:"",salary:""});
    const[message,setMessage] = useState("");
    const url = "http://localhost:8080/deliveryboy/addDeliveryboy";

    const OnTextChange = (args) =>{
        var del1 = {...deliveryboy};
        del1[args.target.name] = args.target.value;
        setDeliveryBoy(del1);
    }

    const Reset = ()=>
    {
        setDeliveryBoy({fullName:"",mobile:"",email:"",password:"",address:"",city:"",state:"",pincode:"",aadhar:"",salary:""})
    }
    const showMessage = (msgText) =>{
        setMessage(msgText);
        window.setTimeout(()=>{
            setMessage("");
        },3000);
    }
    const saveDeliveryBoy=()=>{
       
        axios.post(url,deliveryboy)
        .then((result)=>{
            if(result.data.affectedRows !== undefined && result.data.affectedRows>0){
                showMessage("Customer Added Successfully!!!!!");
            }
            Reset();
        });
        
    }


    return(
        <center>


            <div className="userRegBg">
    <div className="container">
       

<Form className="registerForm" >
              <Typography.Title style={{fontFamily:"sans-serif",textAlign:"center",color:"green",marginTop:"60px"}}>SELLER REGISTRATION</Typography.Title>
              <Divider style={{borderColor:'green'}}></Divider>

              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="FullName" name={'fullName'}>
                <Input  required placeholder="Enter your Full Name"  name="fullName"
                            value={deliveryboy.fullName}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="mobile" name={'mobile'}>
                <Input  required placeholder="Enter your mobile" name="mobile"
                            value={deliveryboy.mobile}
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
                            value={deliveryboy.email}
                            onChange={OnTextChange}/>
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                  message:"Please Enter Valid Password!!"
                },
                   ]}label="Password" name={'password'}>
                <Input.Password  required placeholder="Enter your password"  name="password"
                            value={deliveryboy.password}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="Address" name={'address'}>
                <Input  required placeholder="Enter your address"  name="address"
                            value={deliveryboy.address}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="city" name={'city'}>
                <Input  required placeholder="Enter your city" name="city"
                            value={deliveryboy.city}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="state" name={'state'}>
                <Input  required placeholder="Enter your state" name="state"
                            value={deliveryboy.state}
                            onChange={OnTextChange}/>
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="Pincode" name={'pincode'}>
                <Input required placeholder="Enter your pinCode" name="pincode"
                               value={deliveryboy.pincode}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="aadhar" name={'aadhar'}>
                <Input required placeholder="Enter your aadhar" name="aadhar"
                               value={deliveryboy.aadhar}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="salary" name={'salary'}>
                <Input required placeholder="Enter your salary" name="salary"
                               value={deliveryboy.salary}
                            onChange={OnTextChange} />
              </Form.Item>
              <button className="btn btn-primary"  style={{marginLeft:"100px",display:"block"}} onClick={saveDeliveryBoy}>
                REGISTER
              </button>
              <br/>
              <input type="reset"  className="btn btn-success" value={"Reset"} onClick={Reset}/>

              
              <Divider style={{borderColor:'green'}}></Divider>
              
            </Form>
    </div>
    </div>
    </center>
    )
}

export default DeliveryRegistration;