import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function DeliveryBoyHome(){
    
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const navigate = useNavigate();
  const OpenSidebar = () => {setOpenSidebarToggle(!openSidebarToggle)}
  const delId = sessionStorage.getItem("delId");
  const[orderDetails,setOrderDetails] = useState([]);

  const url="http://localhost:8080/deliveryboy/getOrders/"+ parseInt(delId);
    
  const FetchRecords =() =>{
      axios.get(url).then((result)=>{
          setOrderDetails(result.data);
      })
  }

  const OrderStatus = (id) =>{
  const changeUrl = "http://localhost:8080/orders/delBoyStatus/" + id;
  axios.put(changeUrl).then((result)=>{
      DelAssign(id);
    })
    .catch(error=>console.error("Error changing status : ",error));

        
    }

    const DelAssign = (id) =>{
      const delUrl = "http://localhost:8080/deliveryboy/deleteAssigned/"+id;
      axios.delete(delUrl).then(result=>
        result.data)
        .catch(error=>console.error("Error deleting order : ",error));
    }

  
    useEffect(()=>{FetchRecords()},[]);
        
      return (
      
        
        <main className="main-container">
          <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Full name</th>
                <th>Address</th>
                <th>City</th>
                <th>Mobile No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
               orderDetails.map((order)=>{
                return (<tr key={order.aoid}>
                  <td>{order.oid}</td>
                  <td>{order.fullName}</td>
                  <td>{order.address}</td>
                  <td>{order.city}</td>
                  <td>{order.mobile}</td>
                  <td>
                    <button className="btn btn-success" onClick={OrderStatus(order.oid)}>Order Completed</button>
                  </td>
                </tr>)

               })
              }
            </tbody>
          </table>
          </div>

        </main>
       
      )
        
    
}
export default DeliveryBoyHome;