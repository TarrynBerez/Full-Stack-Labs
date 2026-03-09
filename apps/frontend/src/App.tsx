// CSS Imports
import './App.css'

// import { useState } from 'react'
import { Routes, Route, Navigate} from "react-router-dom"

// Component Imports
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'

// Pages
import OrganizationPage from "./Pages/OrganizationPage"
import EmployeePage from './Pages/EmployeePage'


function App() {

return (
<>
  <Header/>
  <Navbar/>
    <Routes>
      <Route path="*" element={<Navigate to="/employees"/>} />
      <Route path='/employees' element={<EmployeePage/>}></Route>
      <Route path='/organizations' element={<OrganizationPage/>}> </Route>
    </Routes>
  <Footer/>
</>
)
}

export default App
