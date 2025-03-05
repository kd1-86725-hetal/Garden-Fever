import react from 'react'
import {BsCart3, BsFillArchiveFill, BsGrid1X2Fill, BsMenuButtonWideFill, BsPeopleFill} from 'react-icons/bs'
import './AdminStyle.css'
import { Link } from 'react-router-dom'

function UserSidebar({openSidebarToggle, OpenSidebar})
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
                    <Link to={'/UserDashboard'}>
                    <BsFillArchiveFill className='icon'/>Products
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/cart'}>
                        <BsPeopleFill className='icon'/>My Bucket
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/myOrders">
                        <BsMenuButtonWideFill className='icon'/>My Orders
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/UserUpdate'}><BsPeopleFill className='icon'/>Update Profile
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/'}>
                        <BsPeopleFill className='icon'/>Logout
                    </Link>
                </li>
              
            </ul>
        </aside>
    )
}
export default UserSidebar