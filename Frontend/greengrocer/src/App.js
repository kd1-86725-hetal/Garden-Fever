import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';

import SellerRegistration from './SellerRegistration';
import SellerLogin from './SellerLogin';
import ResetPassword from './ResetPassword';
import AdminDashboard from './AdminDashboard';

import AllSeller from './AllSeller';
import DeliveryLogin from './DeliveryLogin';
import DeliveryRegistration from './DeliveryRegistration';

// import Home from './Home';

import UpdateUser from './UpdateUser';
import AllUser from './AllUser';
import AllProducts from './AllProducts';
import AllDelieryBoy from './AllDeliveryBoy';
import SellerDashboard from './SellerDashboard';
import Products from './Products';
import Cart from './Cart';
import UserDashboard from './UserDashboard';
import CombineHome from './CombineHome';
import ControlledCarousel from './ControlledCarousel';
import AllOrder from './AllOrder';

import DeliveryBoyDash from './DeliveryBoyDash';
import Common from './common';
import AdminLogin from './AdminLogin';

import SellerUpdate from './SellerUpdate';
import AssignOrder from './AssignOrder';
import AllDelieryBoyBySeller from './AllDeliveryBoyBySeller';
import AddDeliveryBoy from './AddDeliveryBoy';
import DeliveryBoyUpdate from './DeliveryBoyUpdate';
import ActivateLogin from './ActivateLogin';
import UserUpdate from './UserUpdate';
import UserAllOrders from './UserAllOrders';
import SellerAllCompletedOrders from './SellerAllCompletedOrders';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path = '/' element={<Common/>}/>
          {/* <Route exact path = '/' element={<Home/>}/> */}
          <Route exact path = '/UserLogin' element={<UserLogin/>}/>
          <Route exact path = '/UserRegistration' element={<UserRegistration/>}/>
          <Route exact path = '/DeliveryLogin' element={<DeliveryLogin/>}/>
          <Route exact path = '/DeliveryRegistration' element={<DeliveryRegistration />}/>
          <Route exact path = '/SellerRegistration' element={<SellerRegistration/>}/>
          <Route exact path = '/SellerLogin' element={<SellerLogin/>}/>
          <Route exact path = '/Forget' element={<ResetPassword/>}/>
          <Route exact path = '/AdminDashboard' element={<AdminDashboard/>}/>
          <Route exact path = '/UserDashboard' element={<UserDashboard/>}/>
          <Route exact path = '/SellerDashboard' element={<SellerDashboard/>}/>
          <Route exact path = '/ActivateLogin' element={<ActivateLogin/>}/>
          <Route exact path = '/myOrders' element={<UserAllOrders/>}/>
 
          {/* <Route exact path = '*' element={<Login/>}/> */}
          {<Route exact path = '/Update' element={<UpdateUser/>}/>}
          

         {/* <DeliveryBoyDash/> */}

          <Route exact path = '/getAllSellers' Component={AllSeller}/>
          <Route exact path = '/getAllUsers' Component={AllUser}/>
          <Route exact path = '/getAllProducts' Component={AllProducts}/>
          <Route exact path = '/getAllDeliveryBoys' Component={AllDelieryBoy}/>
          <Route exact path = '/goToAdminDashboard' Component={AdminDashboard}/>


          {/* Seller Dashboard */}
          <Route exact path = '/getAllOrders' Component={AllOrder}/>
          <Route exact path = '/goToSellerDashboard' Component={SellerDashboard}/>
          <Route exact path = '/updateSeller' Component={SellerUpdate}/>
          <Route exact path = '/getAssignOrder' Component={AssignOrder}/>
          <Route exact path = '/getAllDelieryBoyBySeller' Component={AllDelieryBoyBySeller}/>
          <Route exact path = '/goToAddDeliveryBoy' Component={AddDeliveryBoy}/>
          <Route exact path = '/sellerCompletedOrders' Component={SellerAllCompletedOrders}/>
          
          {/* <Route exact path = '*' element={<Login/>}/> */}
          <Route exact path = '/UserUpdate' element={<UserUpdate/>}/>
          <Route exact path = '/products' element={<Products/>}/>
           <Route exact path='/DeliveryBoyDash' element={<DeliveryBoyDash/>}/>
           <Route exact path='/goToDeliveyDashboard' Component={DeliveryBoyDash}/>
          <Route exact path = '/cart' element={<Cart/>}/>
          <Route exact path = '/AdminLogin' element={<AdminLogin/>}/>
           <Route exact path='/DeliveryBoyDash' element={<DeliveryBoyDash/>}/>
           <Route exact path='/goToDeliveyBoyUpdate' Component={DeliveryBoyUpdate}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
