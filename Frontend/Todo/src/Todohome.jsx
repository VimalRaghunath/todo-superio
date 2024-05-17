import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

function Todohome() {

   const [todo, setTodo] = useState([])

   useEffect(()=>{
     axios.get("http://localhost:5000/api/user/get")
     .then(result => setTodo(result.data))
     .catch(err => console.log(err))
   },[])

   const handleEdit = (id) => {
    axios.put("http://localhost:5000/api/user/update/"+id)
    .then(result => console.log(result))
    .catch(err => console.log(err))
   }

  return (
    <div className="bg-cover bg-center h-[43.4rem] w-full flex items-center justify-center text-black">

    <div className="bg-cover bg-center h-[43.4rem] w-full flex items-center justify-center text-black">
      <Create/>
      <br/>
      {
        todo.length === 0
        ?
        <div><h2> No Record </h2></div>
        :
        todo.map(value => (
          <div className=''>
            <div className='' onClick={() => handleEdit(todo._id)}>
            <p>{value.task}</p>
           </div>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Todohome
