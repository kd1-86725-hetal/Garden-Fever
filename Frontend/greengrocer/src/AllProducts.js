import { useEffect, useState } from "react";
import './AdminStyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";


function AllProducts() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [products,setProducts]=useState([]);
    
    const url="http://127.0.0.1:8080/admin/getAllProduct"
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setProducts(result.data);
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
                                 <th>Product Id</th> 
                                 <th>Product Name</th>
                                 <th>Price</th>
                                 <th>Seller Id</th>
                                 <th>Seller Name</th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product)=>{
                                        return (<tr key={product.pid}>
                                            <td>{product.pid}</td>
                                            <td>{product.pname}</td>
                                            <td>{product.price}</td>
                                            <td>{product.seller.sid}</td>
                                            <td>{product.seller.fullName}</td>
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

export default AllProducts;