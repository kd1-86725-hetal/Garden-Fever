import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function UpdateUser(){

    const url =  "http://localhost:8080/user/Update";



    return(
        
<html>
<center>
    <head>
        <title>  </title>
    </head>
    <body>

        <h1><strong> UPDATE USER DETAILS </strong></h1>
    <div className="table-responsive">
            <table className="table table-dark"  style={{width:500,textAlign:"center"}}>
                <tbody>
                    <tr>
                        <td><b>Name</b></td>
                        <td>
                            <input name="fullName"
                            // value={user.fullName}
                            // required
                            // onChange={OnTextChange}
                            /> 
                        </td>
                    </tr>
                    <tr>
                        <td><b>Mobile</b></td>
                        <td>
                            <input name="mobileNo"
                            // value={user.mobileNo}
                            // required
                            // onChange={OnTextChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Email</b></td>
                        <td>
                            <input type="email" name="email"
                          //  value={user.email}
                            // required
                            // onChange={OnTextChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        {/* <td><b>Password</b></td> */}
                        <td>
                            <input type="hidden" name="password"
                           // value={user.password}
                            // required
                            // onChange={OnTextChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Address</b></td>
                        <td>
                            <input name="address"
                           // value={user.address}
                            // required
                            // onChange={OnTextChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><b>City</b></td>
                        <td>
                            <input name="city"
                           // value={user.city}
                            // required
                            // onChange={OnTextChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><b>State</b></td>
                        <td>
                            <input name="state"
                           // value={user.state}
                            // required
                            // onChange={OnTextChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Pincode</b></td>
                        <td>
                            <input name="pinCode"
                           // value={user.pinCode}
                            // required
                            // onChange={OnTextChange}
                            />
                        </td>
                    </tr>
                    <tr>

                         <td>
                            <button className="btn btn-primary"
                            //  onClick={Reset}
                            >
                                    Reset
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-success" 
                            // onClick = {saveUser}
                            >
                                    Update
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
    </body>
    </center>
</html>
    )
};
  export default UpdateUser;