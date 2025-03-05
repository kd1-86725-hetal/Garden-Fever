import { useEffect, useState } from "react";
import './AdminStyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import SellerHeader from "./SellerHeader";
import SellerSidebar from "./SellerSidebar";


function AllOrder() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [orders,setOrders]=useState([]);
    const sid = parseInt(sessionStorage.getItem("sid"));

    const [assignOrder,setAssignorder]=useState({uid:"",oid:""});
    const [delivery,setDelId] = useState({delId:""});
    
    const url=`http://127.0.0.1:8080/orders/getSellerPending/`+sid;
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setOrders(result.data);
        })
    }

    const AssignToDeliveryBoy = ()=>{
        const updatedUrl = "http://localhost:8080/seller/assignDeliveryBoy/"+ delivery.delId;

        axios.post(updatedUrl,assignOrder)
        .then((result)=>{
            if(result.data.affectedRows!==undefined && 
               result.data.affectedRows > 0)
               {
                 ClearBoxes();
               }
         });
    }

    const ClearBoxes =()=>{
        setAssignorder({uid:"",oid:""});
        setDelId({delId:""});
    }

    const OnTextChange = (args)=>{
        var assign1 = {...assignOrder};
        assign1[args.target.name] = parseInt(args.target.value);
        setAssignorder(assign1)
    }

    const OnTextChange1 = (args)=>{
        var delivery1 = {...delivery};
        delivery1[args.target.name] = parseInt(args.target.value);
        setDelId(delivery1)
    }

    useEffect(()=>{FetchRecords()},[])
    return ( 
       <div className='grid-container'>
        <SellerSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <SellerHeader OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
        <div className="table-responsive" id='addProductTable'>
                    <table className="table table-bordered">
                        <tbody>
                            <tr><td><strong>Order Id</strong></td><td><input onChange={OnTextChange} value={assignOrder.oid} name="oid" /></td></tr>
                            <tr><td><strong>User Id</strong></td><td><input onChange={OnTextChange} value={assignOrder.uid} name="uid"/></td></tr>
                            <tr><td><strong>Delivery Boy Id</strong></td><td><input onChange={OnTextChange1} value={delivery.delId} name="delId"/></td></tr>
                            <tr>
                            <td colSpan={2}>
                                <center>
                                <button className='btn btn-success' onClick={AssignToDeliveryBoy} >Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                <button className='btn btn-primary' onClick={ClearBoxes}>Reset</button>
                                </center>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr/>
            <div className="table-responsive">
                        <table className="table table-success table-striped-columns">
                            <thead>
                               <tr>
                                 <th>Order Id</th> 
                                 <th>User Id</th>
                                 <th>User Name</th>
                                 <th>Product Id</th>
                                 <th>Product Name</th>
                                 <th>Quantity </th>
                                 <th>Status </th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order)=>{
                                        return (<tr key={order.pid}>
                                            <td>{order.oid}</td>
                                            <td>{order.user.uid}</td>
                                            <td>{order.user.fullName}</td>
                                            <td>{order.product.pid}</td>
                                            <td>{order.product.pname}</td>
                                            <td>{order.quantity}</td>
                                            <td>{order.status}</td>
                                           {/* <td>
                                         <button className="btn  
                                            btn-danger"  
                                            onClick={()=>{
                                                RemoveRecord(emp.No)
                                            }}>
                                                 
                                                Remove
                                            </button>
                                        </td>*/}
                                        </tr>);
                                    })
                                }
                            </tbody>
                        </table>
            </div>
        </main>
        
       </div> 
     );
}

export default AllOrder;