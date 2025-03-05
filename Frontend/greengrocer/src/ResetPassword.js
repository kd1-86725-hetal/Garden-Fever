import { useState, useEffect } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ResetPassword(){
    
    const [Password, setPassword] = useState({Mail:"",Password:""});
    const [message,setMessage] = useState("");
    
    const url ="http://localhost:8080/user/Forget";
    
    
    
    const OnTextChange = (args) =>{
        var user1 = {...Password};
        user1[args.target.name] = args.target.value;
        setPassword(user1);
    }
    
    const Reset = ()=>
    {
        setPassword({Mail:"",Password:""})
    }
    const showMessage = (msgText) =>{
        setMessage(msgText);
        window.setTimeout(()=>{
            setMessage("");
        },3000);
    }
    
    const savePssword=()=>{
       
        axios.post(url,Password)
        .then((result)=>{
            if(result.data.affectedRows !== undefined && result.data.affectedRows>0){
                showMessage("Password changed Successfully!!!!!");
                Reset();
            }
        });
        
    }
return(
<html>
    <head>
        <title>

        </title>
    </head>
    <body>
        <center>
        <div className="container">
        <div className="table-responsive" style={{width:"500px", border:"solid green", marginTop:"100px"}}>
        <br/><br/><br/>
        <h1> Forgot Password </h1>
        <p>Enter your email and reset your password.</p>
            <table className="table table-dark table-striped"  style={{width:350,textAlign:"center",margin:70}}>
                <tbody>
                    <tr>
                        <td><b>Mail</b></td>
                        <td>
                            <input name="Mail"
                             value={Password.Mail}
                             required
                             onChange={OnTextChange}/>
                             
                        </td>
                    </tr>
                    <tr>
                        <td><b>New Password</b></td>
                        <td>
                            <input name="Password"
                             value={Password.Password}
                             required
                             onChange={OnTextChange}/>
                        </td>
                    </tr>

                    <td>
                            <button className="btn btn-primary" onClick={Reset}>
                                    Reset
                            </button>
                    </td>
                   
                        <td>
                            <button className="btn btn-success" onClick={savePssword}>
                                    Save
                            </button>         
                        </td>
                        
                    </tbody>
            </table>
        </div>
        </div>
        </center>
       
    </body>
</html>
)
};
export default ResetPassword;