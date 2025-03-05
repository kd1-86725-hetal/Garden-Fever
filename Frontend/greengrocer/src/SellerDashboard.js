import {useState} from 'react'
import './AdminStyle.css'
import SellerHeader from './SellerHeader'
import SellerHome from './SellerHome'
import SellerSidebar from './SellerSidebar'

function SellerDashboard()
{
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return(
        <div className='grid-container'>
            <SellerHeader OpenSidebar={OpenSidebar}/>
            <SellerSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <SellerHome/>
        </div>
    )
}
export default SellerDashboard