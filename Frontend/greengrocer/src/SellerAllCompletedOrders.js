import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SellerHeader from "./SellerHeader";
import SellerSidebar from "./SellerSidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SellerAllCompletedOrders(){   
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {setOpenSidebarToggle(!openSidebarToggle)}
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const sid = parseInt(sessionStorage.getItem("sid"));
    const getAllOrders = ()=>{
        const url = "http://localhost:8080/orders/getSellerCompleted/"+sid;
        axios.get(url).then((result)=>{
            setOrders(result.data);
        })
        .catch(error => console.error("Error fetching user: ",error));
    }
    useEffect(()=>{
        getAllOrders();
    },[])
    return(
        <div className="grid-container">
        <SellerHeader OpenSidebar={OpenSidebar}/>
        <SellerSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className="main-container"> 
          <div className="table-responsive" >
              <table className="table table-stripped" style={{color:"black",border:"solid 30px"}}>
                   <thead style={{color:"Green",background:"Black",fontSize:"20px"}}>
                      <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Price Per Product</th>
                          <th>Quantity</th>
                          <th>Bill</th>
                          <th>Status</th>
                      </tr>
                   </thead>
              
              <tbody style={{color:"white",background:"Black"}}>
                  {
                      orders.map((order)=>
                      {
                          return(
                              <tr key={order.none}>
                                  <td><img src={order.product.imageUrl} style={{width:"120px" ,height:"120px"}}></img></td>
                                  <td>{order.product.pname}</td>
                                  <td>{order.product.price}</td>
                                  <td>{order.quantity}</td>
                                  <td>{order.bill}</td>
                                  <td>{order.status}</td>

                              </tr>
                          );
                      })
                  }
              </tbody>
              </table>
              
          </div>
      </div>
    </div>
    )
}
export default SellerAllCompletedOrders;