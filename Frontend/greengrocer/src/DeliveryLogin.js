import { useState,useEffect} from "react";
import { Link,useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Form  ,Item,Input,BreadcrumbItemPropsnput,message, Typography, Divider} from "antd"; 
import "./style.css";

function DeliveryLogin(){
    const url = "http://localhost:8080/deliveryboy/login";
    const[loginDetails,setLoginDetails] = useState({email:"",password:""});
    const [deliveryBoy,setDeliveryBoy] = useState([]);
    const navigate = useNavigate();
    const handleChange = (event,field) =>{
        let actualVal = event.target.value;
        setLoginDetails({
            ...loginDetails,
            [field]:actualVal
        })
    }

    const DoLogin = ()=>{
        axios.post(url,loginDetails)
            .then((result)=>{
                setDeliveryBoy(result.data);
                sessionStorage.setItem("email",JSON.stringify(loginDetails.email));
                sessionStorage.setItem("delId",deliveryBoy.delId);
                if(deliveryBoy.delId != undefined){
                    nav();
                }
            })
    }

    const nav = ()=>{
        navigate("/DeliveryBoyDash")
    }

    return(
        <center>
            {
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
                            <Input required placeholder="Enter Your Email"
                                            name="email"
                                            type="email"
                                            value={loginDetails.email}
                                            onChange={(e)=>handleChange(e,"email")}/>
                        </Form.Item>
                        <Form.Item
                        rules={[
                            {
                                required:true,
                                message:"Please Enter Valid Password!!"
                            },
                        ]} label="Password" name={'password'}>
                            <Input required placeholder="Enter Your Password"
                                            name="password"
                                            type="password"
                                            value={loginDetails.password}
                                            onChange={(e)=>handleChange(e,"password")}/>
                        </Form.Item>
                        <button className="btn btn-primary" type="submit" style={{display:"block"}} onClick={DoLogin}>
                            Login
                        </button>
                        <Divider style={{borderColor:"black"}}></Divider>
                    </Form>
                </div>
            }
        </center>
    )
}

export default DeliveryLogin;