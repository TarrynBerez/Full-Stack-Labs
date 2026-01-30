// CSS Imports
import './App.css'

// Type Imports
import type { Organization } from './Types/Organization'
import type { Department } from './Types/Department'

// React Imports
import { useState } from 'react'
import { Routes, Route, Navigate} from "react-router-dom"

// Data Imports
import { organizationList } from './Data/organizations'
import { DepartmentList } from './Data/employees'

// Component Imports
import EmployeeList from './Components/EmployeeList/EmployeeList'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Navbar from './Components/Navbar/Navbar'
import Organizations from './Components/Organization/Organization'



function App() {
  const [departments, setDepartments] = useState<Department[]>(DepartmentList)
  const [organizations] = useState<Organization[]>(organizationList)

  return (
    <>
      <Header/>
      <Navbar/>
        <Routes>
           <Route path="*" element={<Navigate to="/employees"/>} />
            <Route path='/employees' element={
                <>
                  <Form departments={departments} setDepartments={setDepartments}/>
                  <EmployeeList departments={departments}/>
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
