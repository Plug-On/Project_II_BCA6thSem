import React, { useEffect, useState } from 'react'
import Layout from '../../common/Layout'
import Sidebar from '../../common/Sidebar'
import { Link, useParams } from 'react-router-dom'
import { adminToken, apiUrl } from '../../common/http'

const OrderDetail = () => {
    const [order, setOrder] = useState([]);
    const [items, setItems] =useState([]);
    const [loader , setLoader] = useState(false);
    const params = useParams();

    const fetchOrder = async () =>{
        setLoader(true)
        const res =  await fetch (`${apiUrl}/orders/${params.id}`,{
          method: 'GET',
          headers: {
            'Content-type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${adminToken()}`
          }
        })
        .then(res => res.json())
        .then(result => {
        setLoader(false)
          if (result.status == 200) {
            setOrder(result.data);
            setItems(result.data.items)
          } else {
          console.log("Something went wrong"); 
        }
    
        })
      }

      useEffect(() =>{
        fetchOrder();
      },[]);

  return (
    <Layout>
        <div className='container'>
         <div className='row'>
             <div className='d-flex justify-content-between mt-5 pb-3'>
                 <h4 className='h4 pb-0 mb-0'>Orders</h4>
                 <Link to="/admin/orders" className="btn btn-primary">Back</Link>
             </div>
           <div className='col-md-3'>
               <Sidebar/>
           </div>
    
           <div className='col-md-9'>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className='card shadow'>
                            <div className='card-body p-4'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <h3>Order ID: #{order.id}</h3>
                                            {
                                            order.status == 'pending' && <span className='badge bg-warning'>Pending</span> 
                                            }

                                            {
                                            order.status == 'Shipped' && <span className='badge bg-warning'>Shipped</span> 
                                            }

                                            {
                                            order.status == 'delivered' && <span className='badge bg-success'>Delivered</span> 
                                            }

                                            {
                                            order.status == 'cancelled' && <span className='badge bg-danger'>Cancelled</span> 
                                            }
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='text-secondary'>Date</div>
                                        <h4 className='pt-2'>{order.created_at}</h4>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='text-secondary'>Payment</div>
                                            {
                                                order.payment_status == 'paid' ?
                                                <span className='badge bg-success'>Paid</span> :
                                                <span className='badge bg-danger'>Not paid</span>
                                            }
                                    </div>
                                </div> 
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='py-5'>
                                            <strong>{order.name}</strong>
                                            <div>{order.email}</div>
                                            <div>{order.mobile}</div>
                                            <div>{order.address}, {order.city} {order.state} {order.zip}</div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='text-secondary pt-5'>Payment Status</div>
                                        <p>COD</p>
                                    </div>
                                </div>  

                                <div class="row">
                                    <h3 class="pb-2 "><strong>Items</strong></h3>
                                    <div class="row justify-content-end">
                                        <div class="col-lg-12">
                                            <div class="d-flex justify-content-between border-bottom pb-2 mb-2">
                                                <div class="d-flex">
                                                    <img width="70" class="me-3" src="http://localhost:7000/uploads/products/small/1734940173.png" alt=""/>
                                                <div class="d-flex flex-column">
                                                    <div class="mb-2"><span>Nice Red &amp; White Dress Combination</span></div>
                                                    <div><button class="btn btn-size">L</button></div>
                                                </div>
                                                </div>
                                                <div class="d-flex">
                                                    <div>X 1</div>
                                                    <div class="ps-3">$50</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-end">
                                        <div class="col-lg-12">
                                            <div class="d-flex  justify-content-between border-bottom pb-2 mb-2">
                                                <div>Subtotal</div>
                                                <div>$50.00</div>
                                            </div>
                                            <div class="d-flex  justify-content-between border-bottom pb-2 mb-2">
                                                <div>Shipping</div>
                                                <div>$5.00</div>
                                            </div>
                                            <div class="d-flex  justify-content-between border-bottom pb-2 mb-2">
                                                <div><strong>Grand Total</strong></div>
                                                <div>$55.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    </div> 
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card shadow'>
                            <div className='card-body p-4'>
                    
                            </div>
                        </div>
                    </div>
                </div>

             
           </div>
         </div>
       </div>
    </Layout>
  )
}

export default OrderDetail
