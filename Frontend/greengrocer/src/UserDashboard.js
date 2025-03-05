import {useState} from 'react'
import './AdminStyle.css'
import UserSidebar from './UserSidebar'
import UserHeader from './UserHeader'
import UserHome from './UserHome'

function UserDashboard()
{
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return(
        <div className='grid-container' style={{ background:"white"}}>
            <UserHeader OpenSidebar={OpenSidebar}/>
            <UserSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <UserHome/>
        </div>
    )
}
export default UserDashboard    