import { useEffect, useState } from "react";
import './AdminStyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import SellerHeader from "./SellerHeader";
import SellerSidebar from "./SellerSidebar";
import {useNavigate} from "react-router-dom";

function AddDeliveryBoy() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    const navigate = useNavigate();

    const [deliveryboy,setDeliveryboy]=useState({email:"",fullName:"",password:"",mobile:"",aadhar:"",
            address:"",city:"",state:"",pincode:"",salary:""});

    let mysid = sessionStorage.getItem("sid");
    
    const AddDelBoy = ()=>{
        const url = "http://localhost:8080/seller/addDeliveryBoy/"+parseInt(mysid);

        axios.post(url,deliveryboy)
        .then((result)=>{
            ClearBoxes();
            navigate("/getAllDelieryBoyBySeller");
         });
    }

    const ClearBoxes =()=>{
        setDeliveryboy({email:"",fullName:"",password:"",mobile:"",aadhar:"",address:"",city:"",state:"",pincode:"",salary:""});
    }

    const OnTextChange = (args)=>{
        var deliveryboy1 = {...deliveryboy};
        deliveryboy1[args.target.name] = args.target.value;
        setDeliveryboy(deliveryboy1)
    }

    return ( 
       <div className='grid-container'>
        <SellerSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <SellerHeader OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
        <div className="table-responsive" id='addProductTable'>
                    <table className="table table-bordered">
                        <tbody>
                            <tr><td><strong>Email</strong></td><td><input onChange={OnTextChange} value={deliveryboy.email} name="email" /></td></tr>
                            <tr><td><strong>FullName</strong></td><td><input onChange={OnTextChange} value={deliveryboy.fullName} name="fullName"/></td></tr>
                            <tr><td><strong>Password</strong></td><td><input onChange={OnTextChange} value={deliveryboy.password} name="password"/></td></tr>
                            <tr><td><strong>Mobile</strong></td><td><input onChange={OnTextChange} value={deliveryboy.mobile} name="mobile" /></td></tr>
                            <tr><td><strong>Aadhar</strong></td><td><input onChange={OnTextChange} value={deliveryboy.aadhar} name="aadhar"/></td></tr>
                            <tr><td><strong>Address</strong></td><td><input onChange={OnTextChange} value={deliveryboy.address} name="address"/></td></tr>
                            <tr><td><strong>City</strong></td><td><input onChange={OnTextChange} value={deliveryboy.city} name="city" /></td></tr>
                            <tr><td><strong>State</strong></td><td><input onChange={OnTextChange} value={deliveryboy.state} name="state"/></td></tr>
                            <tr><td><strong>Pincode</strong></td><td><input onChange={OnTextChange} value={deliveryboy.pincode} name="pincode"/></td></tr>
                            <tr><td><strong>Salary</strong></td><td><input onChange={OnTextChange} value={deliveryboy.salary} name="salary"/></td></tr>
                            <tr>
                            <td colSpan={2}>
                                <center>
                                <button className='btn btn-success' onClick={AddDelBoy} >Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                <button className='btn btn-primary' onClick={ClearBoxes}>Reset</button>
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

export default AddDeliveryBoy;