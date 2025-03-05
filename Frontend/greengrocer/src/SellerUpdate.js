import { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {BsCart3, BsFillArchiveFill, BsGrid1X2Fill, BsMenuButtonWideFill, BsPeopleFill} from 'react-icons/bs'
import './AdminStyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import SellerSidebar from "./SellerSidebar";
import SellerHeader from "./SellerHeader";
function SellerUpdate() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const navigate = useNavigate();
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [seller,setSeller]=useState({fullName:"",email:"",mobileNo:"",password:"",address:"",pinCode:"",city:"",state:""});
    let mysid = sessionStorage.getItem("sid");
    const url="http://127.0.0.1:8080/seller/" + parseInt(mysid);
    const OnTextChange = (args)=>{
        var seller1 = {...seller};
        seller1[args.target.name] = args.target.value;
        setSeller(seller1)
    }

    const ClearBoxes =()=>{
        setSeller({fullName:"",email:"",mobileNo:"",password:"",address:"",pinCode:"",city:"",state:""});
    }

    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setSeller(result.data);
        })
    }

    const UpdateRecord =()=>{
        var updateurl = "http://127.0.0.1:8080/seller/updateSeller/"+parseInt(mysid);

        axios.put(updateurl,seller).then((result)=>{
            debugger;
           if(result.data.affectedRows!==undefined && 
              result.data.affectedRows > 0)
              {
                FetchRecords()
                navigate("/goToSellerDashboard")

              }
        });
    }

    useEffect(()=>{FetchRecords()},[])
    return ( 
       <div className='grid-container'>
        <SellerSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <SellerHeader OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
            <div className="table-responsive" id="updateSeller">
                        <table className="table table-success table-striped-columns " >
                            <tbody>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>
                                        <input name="fullName"
                                        value={seller.fullName} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>
                                        <input name="email"
                                        value={seller.email} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>   
                                     <tr>
                                        <td>Mobile Number</td>
                                        <td>
                                        <input name="mobileNo"
                                        value={seller.mobileNo} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td>
                                        <input name="password"
                                        value={seller.password} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>
                                        <input name="address"
                                        value={seller.address} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pincode</td>
                                        <td>
                                        <input name="pinCode"
                                        value={seller.pinCode} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>
                                        <input name="city"
                                        value={seller.city} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>State</td>
                                        <td>
                                        <input name="state"
                                        value={seller.state} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                        <center>
                                        <button className="btn btn-success" 
                                        onClick={UpdateRecord}>
                                            Update
                                        </button>
                                        </center>
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
            </div>
        </main>
        
       </div> 
     );
}

export default SellerUpdate;