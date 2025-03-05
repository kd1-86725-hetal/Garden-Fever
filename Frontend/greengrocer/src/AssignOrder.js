import { useEffect, useState } from "react";
import './AdminStyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import SellerHeader from "./SellerHeader";
import SellerSidebar from "./SellerSidebar";

function AssignOrder() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [orders,setOrders]=useState([]);
    
    const url=`http://127.0.0.1:8080/seller/getSellerOrders/${1}`
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setOrders(result.data);
        })
    }

    useEffect(()=>{FetchRecords()},[])
    return ( 
       <div className='grid-container'>
        <SellerSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <SellerHeader OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
            <div className="table-responsive">
                        <table className="table table-success table-striped-columns">
                            <tbody>
                                {
                                    orders.map((order)=>{
                                        return (<tr key={order.pid}>
                                            <td>{order.oid}</td>
                                            <td>{order.user.uid}</td>
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

export default AssignOrder;