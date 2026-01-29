import './App.css'

import { use, useState } from 'react'
import { Routes, Route} from "react-router-dom"

import EmployeeList from './Components/EmployeeList/EmployeeList'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Navbar from './Components/Navbar/Navbar'
import Organizations from './Components/Organization/Organization'



export type Department = {
  name: string,
  employees: string[]
}

export type Organization = {
  role: string,
  name: string
}

const organizationList = [
  { role: "CEO/Chair of Board", name: "Jo-Anne Sinclair" },
  { role: "COO/VP Operations", name: "Jackson Smith" },
  { role: "CFO/VP Administration", name: "Susan Thomas" },
  { role: "VP Client Services", name: "Richa Kaur" },
  { role: "CIO", name: "Josee Benjamin" },
  { role: "VP Sales & Marketing", name: "Vincent Grey" },
  { role: "Director Financial and Audit Svcs", name: "Rupa Kharki (she/her/hers)" },
  { role: "Director Human Resources", name: "Xun Kuang" },
  { role: "Director Legal Services/General Counsel", name: "Stien Pedersen" },
  { role: "Director Information Technology", name: "Sandra Bear" },
  { role: "Director Information Security and CISSO", name: "Gus Blue" },
  { role: "Director Accounting", name: "Sam Kong" },
  { role: "Director Physical Security", name: "Valentine Smith" },
  { role: "Director Facilities", name: "Mariya Kaperski" },
  { role: "Manager, Business Continuity and Disaster Recovery", name: "Abd al-Hamid Alami" },
  { role: "Manager, Internal Audit", name: "Victoria Gray" },
  { role: "Chief Architect", name: "Cheryl Guru" },
  { role: "Manager, Security Architecture", name: "Jean Ngoy" },
  { role: "Solution Architect, Online Banking", name: "Kris Gold" },
  { role: "Manager, Application Solutions", name: "Isaac Smith" },
  { role: "Lead Developer, Online Banking", name: "Payton Frost" },
  { role: "Manager, Operational Risk", name: "Samantha Nettle" },
  { role: "Manager, Vendor Relations", name: "Yolanda Ferreira" },
  { role: "Manager, Purchasing", name: "Samir Hassan" },
  { role: "Manager, Communications", name: "Yuna Aikawa" },
  { role: "Manager Customer Experience and Community Eng.", name: "Jonathan Carberry" },
  { role: "Manager of Sales", name: "Roland Wei" },
  { role: "Manager, Marketing", name: "Pran Singh" },
  { role: "Business Analyst, Online Banking", name: "Linda Analyst" },
  { role: "Manager, Contract Management", name: "Esra Sedge" },
  { role: "Manager, Compliance Management", name: "Pranee Tan" },
  { role: "Manager IT End User Service Desk", name: "Karmen Spruce" },
  { role: "Manager IT End User Computing", name: "Haydar Katirci" },
  { role: "Manager IT Telecom and Infrastructure", name: "Jill Harkness" },
  { role: "Manager, Data Center and Hosting Services", name: "Tim Morrison" },
  { role: "Manager of IT Risk Management", name: "Aleksandr Milosevic" },
  { role: "Manager IT, project management office", name: "Jim Wingnut" }
]


// Array of Department and Employees
const DepartmentList = [
  {
    name: "Administration",
    employees: [
      "Zoë Robins",
      "Madeleine Madden"
    ]
  },
  {
    name: "Audit",
    employees: [
      "Josha Sadowski",
      "Kate Fleetwood"
    ]
  },
  {
    name: "Banking Operations",
    employees: [
      "Priyanka Bose",
      "Hammed Animashaun",
      "Álvaro Morte",
      "Taylor Napier",
      "Alan Simmonds"
    ]
  },
  {
    name: "Communications",
    employees: [
      "Gil Cardinal",
      "Richard J. Lewis"
    ]
  },
  {
    name: "Corporate Services",
    employees: [
      "Randy Bradshaw",
      "Tracey Cook",
      "Lubomir Mykytiuk"
    ]
  },
  {
    name: "Facilities",
    employees: [
      "Dakota House",
      "Lori Lea Okemah",
      "Renae Morrisseau",
      "Rick Belcourt"
    ]
  },
  {
    name: "Financial Services",
    employees: [
      "Selina Hanusa",
      "Buffy Gaudry",
      "Shaneen Ann Fox",
      "Allan Little",
      "Danny Rabbit"
    ]
  },
  {
    name: "Human Resources",
    employees: [
      "Jesse Ed Azure",
      "Stacy Da Silva",
      "Vladimír Valenta",
      "Samone Sayeses-Whitney",
      "Paul Coeur"
    ]
  },
  {
    name: "Information Technology",
    employees: [
      "Graham Greene",
      "Sandika Evergreen",
      "Jennifer Rodriguez (Software Developer)"
    ]
  },
  {
    name: "IT Technician",
    employees: [
      "Aiyana Littlebear",
      "Inara Thunderbird",
      "Kaya Runningbrook",
      "Elara Firehawk",
      "Siona Moonflower",
      "Kaiyu Greywolf",
      "Ayawamat Nightwind",
      "Tala Braveheart",
      "Iniko Stonebear",
      "Onatah Redhawk"
    ]
  }
]

function App() {
  const [departments, setDepartments] = useState<Department[]>(DepartmentList)
  const [organizations, setOrganizations] = useState<Organization[]>(organizationList)

  return (
    <>
      <Header/>
      <Navbar/>
        <Routes>
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
