// CSS Imports
import './App.css'

import { Routes, Route, Navigate} from "react-router-dom"

// Component Imports
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'

// Pages
import OrganizationPage from "./Pages/OrganizationPage"
import EmployeePage from './Pages/EmployeePage'
import Protected from './auth/protected'


function App() {
return (
<>
  <Header/>
  <Navbar/>
    <Routes>
      <Route path="*" element={<Navigate to="/employees"/>} />
      <Route path='/employees' element={
          <Protected organization_name="Pixell River">
          <EmployeePage/> 
          </Protected>}>
          </Route>
      <Route path='/organizations' element={ 
          <Protected organization_name="Pixell River"> 
          <OrganizationPage/> 
          </Protected>}> 
          </Route>
    </Routes>
  <Footer/>
</>
)
}

export default App
