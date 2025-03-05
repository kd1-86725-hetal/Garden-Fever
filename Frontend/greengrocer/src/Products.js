import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
function Products()
{
    const[products,setProducts] = useState([]);

    const url = "http://localhost:8080/products";

    const FetchProducts = () =>
    {
        axios.get(url).then((result)=>{
            setProducts(result.data);
        })
    }

    useEffect(()=>
    {
        FetchProducts()
    },[]);

    return(
        <div className="container"> 
            <div className="table-responsive">
                <table className="table table-stripped">
                     <thead>
                        <tr>
                            <th>Product Id</th> 
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Seller Id</th>
                            <th>Seller Name</th>
                        </tr>
                     </thead>
                
                <tbody>
                    {
                        products.map((product)=>
                        {
                            return(
                                <tr key={product.pid}>
                                    <td>{product.pid}</td>
                                    <td>{product.pname}</td>
                                    <td><img src="https://img.freepik.com/free-photo/front-view-vegetable_140725-103355.jpg?size=626&ext=jpg" style={{width:"20%" ,height:"10%"}}></img></td>
                                    <td>{product.price}</td>
                                    <td>{product.seller.sid}</td>
                                    <td>{product.seller.fullName}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
                </table>
            </div>
        </div>
    )
}


export default Products;