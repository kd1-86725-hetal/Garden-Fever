import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BsCart3,
  BsFillArchiveFill,
  BsGrid1X2Fill,
  BsMenuButtonWideFill,
  BsPeopleFill,
} from "react-icons/bs";
import "./AdminStyle.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import SellerSidebar from "./SellerSidebar";
import SellerHeader from "./SellerHeader";
import UserSidebar from "./UserSidebar";
import UserHeader from "./UserHeader";
function UserUpdate() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const navigate = useNavigate();
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  let myuid = sessionStorage.getItem("uid");
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    password: "",
    address: "",
    pinCode: "",
    city: "",
    state: "",
  });
  const url =
    `http://127.0.0.1:8080/greengrocer/user/getUser/` + parseInt(myuid);

  const OnTextChange = (args) => {
    var user1 = { ...user };
    user1[args.target.name] = args.target.value;
    setUser(user1);
  };

  const ClearBoxes = () => {
    setUser({
      fullName: "",
      email: "",
      mobileNo: "",
      password: "",
      address: "",
      pinCode: "",
      city: "",
      state: "",
    });
  };

  const FetchRecords = () => {
    axios.get(url).then((result) => {
      setUser(result.data);
    });
  };

  const UpdateRecord = () => {
    var updateurl =
      "http://127.0.0.1:8080/greengrocer/user/updateUser/" + parseInt(myuid);

    axios.put(updateurl, user).then((result) => {
      if (
        result.data.affectedRows !== undefined &&
        result.data.affectedRows > 0
      ) {
        FetchRecords();
      }
      navigate("/UserDashboard");
    });
  };

  useEffect(() => {
    FetchRecords();
  }, []);
  return (
    <div className="container mt-4">
  <div className="card shadow p-4">
    <h3 className="text-center mb-4">Update Profile</h3>
    <div className="table-responsive">
      <table className="table table-bordered">
        <tbody>
          {[
            { label: "Full Name", name: "fullName", value: user.fullName },
            { label: "Email", name: "email", value: user.email },
            { label: "Mobile Number", name: "mobileNo", value: user.mobileNo },
            { label: "Password", name: "password", value: user.password },
            { label: "Address", name: "address", value: user.address },
            { label: "Pincode", name: "pinCode", value: user.pinCode },
            { label: "City", name: "city", value: user.city },
            { label: "State", name: "state", value: user.state },
          ].map((item, index) => (
            <tr key={index}>
              <td className="fw-bold">{item.label}</td>
              <td>
                <input
                  type={item.name === "password" ? "password" : "text"}
                  className="form-control"
                  name={item.name}
                  value={item.value}
                  onChange={OnTextChange}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2} className="text-center">
              <button className="btn btn-success px-4 py-2" onClick={UpdateRecord}>
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
}

export default UserUpdate;
