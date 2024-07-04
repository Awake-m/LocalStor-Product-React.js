import React from 'react'

function ProductListing({arr,handleDelete}) {
  return (
    <>
      {
          arr && arr.map((el)=>{
            return (
               <div key={el.id} style={{display : "flex"}}>
                   <div>
                       <img src={el.img} alt={el.title} />
                   </div>
                   <div>
                      <h1>{el.title} - {el.des}</h1>
                      <button>EDIT</button>
                      <button onClick={()=>handleDelete(el.id)}>DELETE</button>
                   </div>
                   <div>
                       <h3>{el.price}</h3>
                   </div>
               </div>
            )
          })
        }
    </>
  )
}

export default ProductListing