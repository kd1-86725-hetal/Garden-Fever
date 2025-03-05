import react, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate,useParams} from "react-router-dom";

import { BsFillArchiveFill, BsPeopleFill } from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SellerSidebar from './SellerSidebar';
import SellerHeader from './SellerHeader';


function SellerHome()
{

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const navigate  = useNavigate();
    const[seller,setSeller] = useState([]);

    const email = sessionStorage.getItem("email");
    
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    
    const [products,setProducts]=useState([]);
    
    const [newproduct,setNewproduct]=useState({pname: "",price: "",availableQuantity: "",imageUrl:""});

    

    const sellerUrl = "http://localhost:8080/seller/getSellerByEmail/"+ email;

    const GetSeller = ()=>
    {
        axios.get(sellerUrl)
        .then((result) =>
        {
            setSeller(result.data);
            mysid = result.data;
            console.log(result)

        })
        .catch(error=>console.error("Error fetching seller : ",error));
    }

    let mysid = sessionStorage.getItem("sid");
    const url=`http://127.0.0.1:8080/seller/sellerProducts/`+ parseInt(mysid);
    
    const urlToAdd=`http://localhost:8080/seller/addNewProduct/`+parseInt(mysid);   

    

    const OnTextChange = (args)=>{
        var newproduct1 = {...newproduct};
        newproduct1[args.target.name] = args.target.value;
        setNewproduct(newproduct1)
    }

    const ClearBoxes =()=>{
        setNewproduct({pname:"",price:"",availableQuantity:"",imageUrl:""});
    }

    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setProducts(result.data);
        })
    }

    const AddRecord = ()=>{
        axios.post(urlToAdd,newproduct).then((result)=>{
                  ClearBoxes();
                  FetchRecords();
        })
    }

    useEffect(() => {
        FetchRecords();
        GetSeller();
        },[])
    
    return(
            <main className='main-container'>
                <div className="table-responsive" id='addProductTable'>
                    <table className="table table-bordered">
                        <tbody>
                            <tr><td><strong>Product Name</strong></td><td><input  onChange={OnTextChange} name="pname" value={newproduct.pname}/></td></tr>
                            <tr><td><strong>Price </strong></td><td><input  onChange={OnTextChange} name="price" value={newproduct.price}/></td></tr>
                            <tr><td><strong>Image Url</strong></td><td><input onChange={OnTextChange} name="imageUrl" value={newproduct.imageUrl}/></td></tr>
                            <tr><td><strong>Quantity</strong></td><td><input onChange={OnTextChange} name="availableQuantity" value={newproduct.availableQuantity}/></td></tr>
                            <tr>
                            <td colSpan={2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='btn btn-success' onClick={AddRecord} >Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='btn btn-primary'onClick={ClearBoxes}>Reset</button>
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
                                 <th>Product Id</th> 
                                 <th>Product Name</th>
                                 <th>Price</th>
                                 <th>Quantity</th>
                                 </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product)=>{
                                        return (<tr key={product.pid}>
                                            <td>{product.pid}</td>
                                            <td>{product.pname}</td>
                                            <td>{product.price}</td>
                                            <td>{product.availableQuantity}</td>
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
    )
}
export default SellerHome