import { useState,useEffect } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Form  ,Item,Input,BreadcrumbItemPropsnput,message, Typography, Divider} from "antd"; 
import "./style.css";
import { useNavigate } from "react-router-dom";

function SellerRegistration()
{
    const[seller,setSeller] = useState({fullName:"",mobileNo:"",email:"",password:"",address:"",city:"",state:"",pinCode:""});
    const[message,setMessage] = useState("");
    const navigate = useNavigate();
    const url = "http://localhost:8080/seller/newSeller";

    const OnTextChange = (args) =>{
        var seller1 = {...seller};
        seller1[args.target.name] = args.target.value;
        setSeller(seller1);
    }

    const Reset = ()=>
    {
        setSeller({fullName:"",mobileNo:"",email:"",password:"",address:"",city:"",state:"",pinCode:""})
    }
    const showMessage = (msgText) =>{
        setMessage(msgText);
        window.setTimeout(()=>{
            setMessage("");
        },3000);
    }
    const saveSeller=()=>{
       
        axios.post(url,seller)
        .then((result)=>{
            if(result.data.affectedRows !== undefined && result.data.affectedRows>0){
                showMessage("Customer Added Successfully!!!!!");
            }
            Reset();
            navigate("/SellerLogin")

        });
        
    }


    return(
        <center>
        {/* <h1><strong>Seller Registration</strong></h1>
    <div className="container">
    <div className="jumbotron">
            
        <div className="table-responsive">
            <table className="table table-dark table-striped"  style={{width:500,textAlign:"center"}}>
                <tbody>
                    <tr>
                        <td><b>Enter Full Name</b></td>
                        <td>
                            <input name="fullName"
                            value={seller.fullName}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Mobile</b></td>
                        <td>
                            <input name="mobileNo"
                            value={seller.mobileNo}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Email</b></td>
                        <td>
                            <input type="email" name="email"
                            value={seller.email}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Password</b></td>
                        <td>
                            <input type="password" name="password"
                            value={seller.password}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Address</b></td>
                        <td>
                            <input name="address"
                            value={seller.address}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter City</b></td>
                        <td>
                            <input name="city"
                            value={seller.city}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter State</b></td>
                        <td>
                            <input name="state"
                            value={seller.state}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Pincode</b></td>
                        <td>
                            <input name="pinCode"
                            value={seller.pinCode}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>

                         <td>
                            <button className="btn btn-primary" onClick={Reset}>
                                    Reset
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-success" onClick = {saveSeller}>
                                    Register
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div> */}

<div className="userRegBg">
    <div className="container">
       

<Form className="registerForm" >
              <Typography.Title style={{fontFamily:"sans-serif",textAlign:"center",color:"green",marginTop:"30px"}}>SELLER REGISTRATION</Typography.Title>
              <Divider style={{borderColor:'green'}}></Divider>

              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="FullName" name={'fullName'}>
                <Input  required placeholder="Enter your Full Name"  name="fullName"
                            value={seller.fullName}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="mobileNo" name={'mobileNo'}>
                <Input  required placeholder="Enter your mobileNo" name="mobileNo"
                            value={seller.mobileNo}
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
                            value={seller.email}
                            onChange={OnTextChange}/>
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                  message:"Please Enter Valid Password!!"
                },
                   ]}label="Password" name={'password'}>
                <Input.Password  required placeholder="Enter your password"  name="password"
                            value={seller.password}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="Address" name={'address'}>
                <Input  required placeholder="Enter your address"  name="address"
                            value={seller.address}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="city" name={'city'}>
                <Input  required placeholder="Enter your city" name="city"
                            value={seller.city}
                            onChange={OnTextChange} />
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="state" name={'state'}>
                <Input  required placeholder="Enter your state" name="state"
                            value={seller.state}
                            onChange={OnTextChange}/>
              </Form.Item>
              <Form.Item rules={[
                {
                  required:true,
                },
                   ]}label="Pincode" name={'pinCode'}>
                <Input required placeholder="Enter your pinCode" name="pinCode"
                               value={seller.pinCode}
                            onChange={OnTextChange} />
              </Form.Item>
              <button className="btn btn-primary"  style={{marginLeft:"100px",display:"block"}} onClick={saveSeller}>
                REGISTER
              </button>
              <br/>
              <Divider style={{borderColor:'green'}}></Divider>
              <a href="/SellerLogin" style={{color:"Black"}}><b>Already a seller, Click here to login</b></a>
            </Form>
    </div>
    </div>
    </center>
    )
}

export default SellerRegistration;