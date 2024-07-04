// import React, { useEffect, useState } from 'react'

// function Product() {
//   const [task,setTask] = useState("")
//   const [arr,setarr] = useState(JSON.parse(localStorage.getItem("data")) || [])

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     let obj ={
//       id : Math.random()+Date.now(),
//        task : task,
//        isCompleted : false
//     }
//     setarr([...arr,obj])
//   }

//   useEffect(()=>{
//     localStorage.setItem("data",JSON.stringify(arr))
//   },[arr])

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <h1>Product List</h1>
//         <input type="text" name='title' onChange={(e)=>setTask(e.target.value)}  placeholder='Title' /><br/><br/>
//         <input type="text" name='des' onChange={(e)=>setTask(e.target.value)} placeholder='Description' /><br/><br/>
//         <input type="text" name='price' onChange={(e)=>setTask(e.target.value)} placeholder='Price' /><br/><br/>
//         <input type="text" name='img' onChange={(e)=>setTask(e.target.value)} placeholder='Add Image' /><br/><br/>
//         <button>Submit</button>
//         {/* <input type="submit"/> */}
//       </form>
//     </div>
//   )
// }

// export default Product



import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {v4 } from 'uuid'
import ProductListing from './ProductListing'

function Product() {
    const [state,setState] = useState({
        id : v4(),
        title : "",
        price : "",
        des : "",
        img : ""
    })
    const [arr,setarr] = useState(JSON.parse(localStorage.getItem("data"))||[])
    const handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
       e.preventDefault()
      setarr([...arr,state])
      setState({
        id : v4(),
        title : "",
        price : "",
        des : "",
        img : ""
      })
    }
    console.log(arr)
    useEffect(()=>{
      localStorage.setItem("data",JSON.stringify(arr))
    },[arr])
    const handleDelete = (id)=>{
       let d = arr.filter(el => el.id != id)
         setarr(d)
        // arr.filter((el)=>{
        //   if(el.id != id){
        //     return el
        //   }
        // })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}><br/><br/>
             <input type="text" name='title' value={state.title} onChange={handleChange} placeholder='Title'/><br/><br/>
             <input type="text" name='des' value={state.des} onChange={handleChange} placeholder='Description'/><br/><br/>
             <input type="text" name='price' value={state.price} onChange={handleChange} placeholder='Price'/><br/><br/>
             <input type="text" name='img' value={state.img} onChange={handleChange} placeholder='Image URL'/><br/><br/>
             <input type="submit" />
        </form>
        <ProductListing arr={arr} handleDelete={handleDelete}/>
    </div>
  )
}

export default Product
