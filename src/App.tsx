// CSS Imports
import './App.css'

// Type Imports
import type { Organization } from './Types/Organization'

// React Imports
import { useState } from 'react'
import { Routes, Route, Navigate} from "react-router-dom"

// Data Imports
import { organizationList } from './Data/organizations'

// Component Imports
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Organizations from './Components/Organization/Organization'

//hook
import EmployeePage from './Pages/EmployeePage'



function App() {
  const [organizations] = useState<Organization[]>(organizationList)

  return (
    <>
      <Header/>
      <Navbar/>
        <Routes>
           <Route path="*" element={<Navigate to="/employees"/>} />
            <Route path='/employees' element={
                <>
                  <EmployeePage/>
                </>
              }>
            </Route>
            <Route  path='/organizations' element={<Organizations organizations={organizations}/>}> </Route>
        </Routes>
      <Footer/>
    </>
  )
}

export default App
