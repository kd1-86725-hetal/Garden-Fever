import react from 'react'
import {BsCart3, BsFillArchiveFill, BsGrid1X2Fill, BsMenuButtonWideFill, BsPeopleFill} from 'react-icons/bs'
import './AdminStyle.css'
import { Link } from 'react-router-dom'

function AdminSidebar({openSidebarToggle, OpenSidebar})
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
                    <Link to={'/goToAdminDashboard'}>
                    <BsGrid1X2Fill className='icon'/>Admin Dashboard
                    </Link>
                    
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/getAllProducts'}>
                    <BsFillArchiveFill className='icon'/>Products
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/getAllUsers'}>
                        <BsPeopleFill className='icon'/>Customers
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/getAllSellers'}><BsPeopleFill className='icon'/>Sellers
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/getAllDeliveryBoys'}>
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
export default AdminSidebar