import { useState,useEffect} from "react";
import { Link,useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Form  ,Item,Input,BreadcrumbItemPropsnput,message, Typography, Divider, Button, Col, Row, Card} from "antd";
import "./style.css";
import { CardText, CardTitle } from "react-bootstrap";

function Common(){
    const url = "http://localhost:8080/deliveryboy/login";
    const[loginDetails,setLoginDetails] = useState({email:"",password:""});

    const handleChange = (event,field) =>{
        let actualVal = event.target.value;
        setLoginDetails({
            ...loginDetails,
            [field]:actualVal
        })
    }

    const DoLogin = ()=>{
        axios.post(url,loginDetails)
            .then((result)=>result.data)
    }

    const loginAsUser=()=>
    {

    }

    return(
        <center>
            {
                <div className="appBg" >
                    <Row>
                    &nbsp;&nbsp;&nbsp;&nbsp;
  <Col sm="2" style={{width:"20%",marginLeft:"100px"}}>
    <Card body className="loginForm">
      <CardTitle tag="h5">
        <b>SELLER</b>
      </CardTitle>
      <CardText>
        If you are a SELLER click here to Login!!!
      </CardText>
      <Button href="/SellerLogin" className="btn btn-success">
      Login As Seller
      </Button>
    </Card>
  </Col>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <Col sm="2" style={{width:"20%"}}>
    <Card body className="loginForm">
      <CardTitle tag="h5">
        <b>ADMIN</b>
      </CardTitle>
      <CardText>
        If you are a ADMIN click here to Login!!!
      </CardText>
      <Button href="/AdminLogin" className="btn btn-success">
        Login As Admin
      </Button>
    </Card>
  </Col>
  &nbsp;&nbsp;&nbsp;&nbsp;

  <Col sm="2" style={{width:"20%"}}>
    <Card body className="loginForm">
      <CardTitle tag="h5">
        <b>USER</b>
      </CardTitle>
      <CardText>
      If you are a USER click here to Login!!!
      </CardText>
      <Button href="/UserLogin" className="btn btn-success" >
         Login As User
      </Button>
    </Card>
  </Col>
  &nbsp;&nbsp;&nbsp;&nbsp;

  <Col sm="2" style={{width:"20%"}}>
    <Card body className="loginForm">
      <CardTitle tag="h5">
        <b>DELIVERY BOY</b>
      </CardTitle>
      <CardText>
      If you are a DeliveryBoy click here to Login!
      </CardText>
      <Button href="/DeliveryLogin" className="btn btn-success" >
        Login As DeliveryBoy
      </Button>
    </Card>
  </Col>
</Row>
                </div>

            }
        </center>
    )
}

export default Common;