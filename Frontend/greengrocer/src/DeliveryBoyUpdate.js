    import { useEffect,useState } from "react";
    import './DeliveryBoy.css'
    import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    import axios from "axios";
    import DeliveryBoy from './DeliveryBoySidebar';
    import DeliveryHeadr from './DeliveryBoyHeader';
    import { useNavigate } from "react-router-dom";

    function DeliveryBoyUpdate(){
        const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
        const navigate = useNavigate();
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [deliveryboy,setdeliveryboy]=useState({fullName:"",address:"",city:"",state:"",pincode:""});
    
    const url="http://127.0.0.1:8080/deliveryboy/1";

    const OnTextChange =(args)=>{
        var emp1 = {...deliveryboy}
        emp1[args.target.name]=args.target.value;
        setdeliveryboy(emp1)
    }
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setdeliveryboy(result.data);
        })
    }
     
    const UpdateRecord =()=>{
        var updateurl = "http://localhost:8080/deliveryboy/update/1";

        axios.put(updateurl,deliveryboy).then((result)=>{
                FetchRecords();
                navigate("/DeliveryBoyDash");
        });
    }
    
    useEffect(()=>{FetchRecords()},[]);
    return ( 
       <div className='grid-container'>
        <DeliveryBoy openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <DeliveryHeadr OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
            <div className="table-responsive">
                        <table className="table table-success table-striped-columns">
                            <tbody>
                            <tr>
                                        <td>Full Name</td>
                                        <td>
                                        <input name="fullName"
                                        value={deliveryboy.fullName} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>
                                        <input name="address"
                                        value={deliveryboy.address} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>
                                        <input name="city"
                                        value={deliveryboy.city} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>State</td>
                                        <td>
                                        <input name="state"
                                        value={deliveryboy.state} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pincode</td>
                                        <td>
                                        <input name="pincode"
                                        value={deliveryboy.pincode} 
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

export default DeliveryBoyUpdate;

