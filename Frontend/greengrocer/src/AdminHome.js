import react, { useEffect, useState } from 'react'
import axios from 'axios';
import { BsFillArchiveFill, BsPeopleFill } from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function AdminHome()
{

    const url="http://127.0.0.1:8080/admin/allData"
    const [count,setCount]=useState([]);

    const FetchRecords= ()=>{
      axios.get(url).then((result)=>{
        setCount(result.data);
      })
    }
    useEffect(()=>{FetchRecords()},[])
    

    return(
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                    </div>
                    </div>    
                <h3>{count.productCount}</h3>
                
                <div className='card'>
                    <div className='card-inner'>
                    <h3>USERS</h3>
                    <BsPeopleFill className='card_icon'/>
                    </div>
                    </div>
                    <h3>{count.userCount}</h3>
                <div className='card'id='blank1'>
                    <div className='card-inner'>
                    <h3>SELLERS</h3>
                    <BsPeopleFill className='card_icon'/>
                    </div>
                    </div>
                    <h3>{count.sellerCount}</h3>
                <div className='card' id='blank2'>
                    <div className='card-inner'>
                    <h3>DELIVERY BOY</h3>
                    <BsPeopleFill className='card_icon'/>
                    </div>
                    </div>
                    <h3>{count.deliveryboyCount}</h3>
            </div>

            </main>
    )
}
export default AdminHome