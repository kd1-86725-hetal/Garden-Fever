import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import UserHeader from "./UserHeader";
import UserSidebar from "./UserSidebar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart()
{
  const navigate = useNavigate();
  const [bucket, setBucket] = useState([]);
  const [orders, setOrders] = useState([]);

  var totalBill=0;
  const uid = parseInt(sessionStorage.getItem("uid"));
  const url = "http://localhost:8080/cart/findBucket/"+uid;

  const url2 = "http://localhost:8080/orders/confirmOrder";

  const url3 = "http://localhost:8080/cart/deleteBucket/"+uid;

  useEffect(() => {
    // Fetch products from the Spring Boot backend
   axios.get(url) 
      .then((result) => { 
        console.log(result.data)
        setBucket(result.data);
      })
      .catch(error => console.error('Error fetching products:', error));
 
  }, []);


  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
  }

  const [deliveryboys,setDeliveryboys]=useState([]);
    const  payBill=()=>
    {
        toast.success("Order Placed Successfully!!")
    } 

    const addOrder=()=>
    {
        fetch(url2, {
            method: 'POST',
            headers: {
              Accept:"application/json",
              'Content-Type': 'application/json', // Change to the desired content type
            },
            body: JSON.stringify(bucket),
          
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
          toast.success("Order Placed Successfully!!")

         deleteBucket();
    }

    const deleteBucket=()=>
    {
      axios.delete(url3).then((result)=>
      {
            if(result.data.affectedRows>0 && result.data.affectedRows!=undefined)
            {
               console.log("Bucket Cleared")
            }
      })
    }
  return(
    
    <div className="grid-container">
        <UserHeader OpenSidebar={OpenSidebar}/>
        <UserSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
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
                      </tr>
                   </thead>
              
              <tbody style={{color:"white",background:"Black"}}>
                  {
                      bucket.map((bkt)=>
                      {
                          return(
                              <tr key={bkt.product.pid}>
                                  <td><img src={bkt.product.imageUrl} style={{width:"120px" ,height:"120px"}}></img></td>
                                  <td>{bkt.product.pname}</td>
                                  <td>{bkt.product.price}</td>
                                  <td>{bkt.quantity}</td>
                                  <td>{bkt.bill}</td>
                                  <td style={{display:"none"}}>{totalBill = totalBill+bkt.bill}</td>

                              </tr>
                          );
                      })
                  }
              </tbody>
              </table>
              <h3 style={{textAlign:"center",color:"black",background:"green",border:"solid"} }><button className="btn btn-danger" style={{border:"solid"}} onClick={addOrder}>Total Bill : {totalBill}</button><ToastContainer  position="top-center"/></h3>
          </div>
      </div>
    </div>
  )

}

export default Cart;