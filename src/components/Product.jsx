import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {

const [Product, setProduct]=useState([])

useEffect(()=>{
axios.get("https://fakestoreapi.com/products").then((res)=>setProduct(res.data));
},[])

return (
    <div>
      <h1 className='text-2xl text-center'>PRODUCTS</h1>
      <div className='grid grid-cols-3 gap-4 rounded text-center'>
        {
          Product.map((e)=>(
            <div key={e} className='bg-blue-400 rounded-2xl p-4'>
              <h1>ID:{e.id}</h1>
              <h1>Title:{e.title}</h1>
              <h1>Price:{e.price}</h1>
              <h1>Description{e.description}</h1>
              <h1>Catagory:{e.category}</h1>
              <img src={e.image} alt="" className='w-[200px] h-[250px] m-auto text-center'/>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Product
