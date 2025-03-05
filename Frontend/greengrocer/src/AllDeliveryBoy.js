import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BsCart3, BsFillArchiveFill, BsGrid1X2Fill, BsMenuButtonWideFill, BsPeopleFill} from 'react-icons/bs'
import './AdminStyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";


function AllDelieryBoy() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [deliveryboys,setDeliveryboys]=useState([]);
    
    const url="http://127.0.0.1:8080/admin/getAllDeliveryBoy"
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setDeliveryboys(result.data);
        })
    }

    useEffect(()=>{FetchRecords()},[])
    return ( 
       <div className='grid-container'>
        <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <AdminHeader OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
            <div className="table-responsive">
                        <table className="table table-success table-striped-columns">
                            <thead>
                               <tr>
                                 <th>Id</th> 
                                 <th>Full Name</th>
                                 <th>Mobile</th>
                                 <th>Address</th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    deliveryboys.map((deliveryboy)=>{
                                        return (<tr key={deliveryboy.uid}>
                                            <td>{deliveryboy.delId}</td>
                                            <td>{deliveryboy.fullName}</td>
                                            <td>{deliveryboy.mobile}</td>
                                            <td>{deliveryboy.address}</td>
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

export default AllDelieryBoy;