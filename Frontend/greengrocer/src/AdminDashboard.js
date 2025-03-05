import {useState} from 'react'
import './AdminStyle.css'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import AdminHome from './AdminHome'

function AdminDashboard()
{
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return(
        <div className='grid-container'>
            <AdminHeader OpenSidebar={OpenSidebar}/>
            <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <AdminHome/>
        </div>
    )
}
export default AdminDashboard