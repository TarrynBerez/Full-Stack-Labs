import './App.css'
import { useState } from 'react'
import EmployeeList from './Components/EmployeeList/EmployeeList'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'

export type Department = {
  name: string,
  employees: string[]
}

// Array of Department and Employees
const DepartmentList = [
  {
    name: "Executive",
    employees: [
      "Jo-Anne Sinclair",
      "Jackson Smith",
      "Susan Thomas",
      "Richa Kaur",
      "Josee Benjamin",
      "Vincent Grey"
    ]
  },
  {
    name: "Finance & Audit",
    employees: [
      "Rupa Kharki",
      "Sam Kong",
      "Victoria Gray"
    ]
  },
  {
    name: "Human Resources",
    employees: [
      "Xun Kuang"
    ]
  },
  {
    name: "Legal",
    employees: [
      "Stien Pedersen"
    ]
  },
  {
    name: "Information Technology",
    employees: [
      "Sandra Bear",
      "Gus Blue",
      "Cheryl Guru",
      "Jean Ngoy",
      "Kris Gold",
      "Isaac Smith",
      "Payton Frost"
    ]
  },
  {
    name: "Operations",
    employees: [
      "Samantha Nettle",
      "Yolanda Ferreira",
      "Samir Hassan",
      "Yuna Aikawa",
      "Jonathan Carberry",
      "Roland Wei",
      "Pran Singh",
      "Linda Analyst",
      "Esra Sedge",
      "Pranee Tan"
    ]
  },
  {
    name: "IT",
    employees: [
      "Karmen Spruce",
      "Haydar Katirci",
      "Jill Harkness",
      "Tim Morrison",
      "Aleksandr Milosevic",
      "Jim Wingnut"
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
];

function App() {
  const [departments, setDepartments] = useState<Department[]>(DepartmentList)

  return (
    <>
      <Header/>
      <Form departments={departments} setDepartments={setDepartments}/>
      <EmployeeList departments={departments}/>
      <Footer/>
    </>
  )
}

export default App
