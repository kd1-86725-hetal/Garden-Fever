import { useState } from "react";
import './DeliveryBoy.css'

import DeliveryBoySidebar from "./DeliveryBoySidebar";
import DeliveryBoyHome from "./DeliveryBoyHome";
import DeliveryBoyHeader from "./DeliveryBoyHeader";
function DeliveryBoyDash(){
    return(
       <div className='grid-container'>
        <DeliveryBoyHeader/>
        <DeliveryBoySidebar/>
        <DeliveryBoyHome/>
       </div>
    )
}
export default DeliveryBoyDash;