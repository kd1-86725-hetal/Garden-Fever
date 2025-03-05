
import { useState } from 'react'
import './AdminStyle.css'
import UserHeader from './UserHeader'
import UserHome from './UserHome'

function CombineHome()
{
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return(
        <div className='grid-container'>
            <UserHeader OpenSidebar={OpenSidebar}/>
            <UserHome/>
        </div>
    )
}

export default CombineHome;