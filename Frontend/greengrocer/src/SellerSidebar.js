import {BsCart3, BsFillArchiveFill, BsGrid1X2Fill, BsMenuButtonWideFill, BsPeopleFill} from 'react-icons/bs'
import './AdminStyle.css'
import { Link } from 'react-router-dom'

function SellerSidebar({openSidebarToggle, OpenSidebar})
{
    return(
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='icon_header'/> GreenGrocer
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to={'/goToSellerDashboard'}>
                    <BsGrid1X2Fill className='icon'/>Seller Dashboard
                    </Link>    
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/getAllOrders'}>
                        <BsPeopleFill className='icon'/>View orders
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/updateSeller'}><BsPeopleFill className='icon'/>Update Profile
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/sellerCompletedOrders">
                        <BsMenuButtonWideFill className='icon'/>Completed Orders
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/getAllDelieryBoyBySeller'}>
                        <BsPeopleFill className='icon'/>Delivery Boys
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/">
                        <BsMenuButtonWideFill className='icon'/>Logout
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default SellerSidebar