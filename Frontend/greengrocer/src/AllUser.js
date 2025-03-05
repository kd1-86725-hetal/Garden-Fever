import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BsCart3, BsFillArchiveFill, BsGrid1X2Fill, BsMenuButtonWideFill, BsPeopleFill} from 'react-icons/bs'
import './AdminStyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";


function AllUser() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [users,setUsers]=useState([]);
    
    const url="http://127.0.0.1:8080/admin/getAllUser"
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setUsers(result.data);
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
                                 <th>User Id</th> 
                                 <th>Full Name</th>
                                 <th>Mobile</th>
                                 <th>Address</th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user)=>{
                                        return (<tr key={user.uid}>
                                            <td>{user.uid}</td>
                                            <td>{user.fullName}</td>
                                            <td>{user.mobileNo}</td>
                                            <td>{user.address}</td>
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

export default AllUser;