import react from 'react'
import {BsFillBellFill,BsFillEnvelopeFill,BsJustify, BsPerson, BsPersonCircle, BsSearch} from 'react-icons/bs'

function SellerHeader({OpenSidebar})
{
    return(
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar}/>
            </div>
            <div className='header-left'>
                <BsSearch className='icon'/>
            </div>
            <div className='header-right'>
                <BsFillBellFill className='icon'/>
                <BsFillEnvelopeFill className='icon'/>
                <BsPersonCircle className='icon'/>
            </div>
        </header>
        
    )
}
export default SellerHeader