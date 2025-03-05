import React from "react";
import { BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify } 
from "react-icons/bs";
function DeliveryBoyHeader(){
    return(
        <header className='DeliveryBoyHeader'>
            <div className='menu-icon'>
                 <BsJustify className="icon"/>
            </div>
            <div className='header-left'>
                <BsSearch className="icon"/>
            </div>
            <div className="header-right">
                <BsFillBellFill className="icon"/>
                <BsFillEnvelopeFill className="icon"/>
                <BsPersonCircle className="icon"/>
            </div>

        </header>
    )
}
export default DeliveryBoyHeader