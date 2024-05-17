import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login'
import Register from './Register'
import { createContext, useState } from "react"
import Todohome from "./Todohome"
import Create from "./Create"
export const Data = createContext()


function App() {

  const [logindetails,setLogindetails] = useState([])


  return (
    <Data.Provider value={{logindetails, setLogindetails}}>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Login/>}/> 
       <Route path="/register" element={<Register/>} />
       <Route path="/todohome" element={<Todohome/>}/>
       <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  </Data.Provider>
  )
}

export default App
