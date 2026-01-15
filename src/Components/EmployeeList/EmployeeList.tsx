import "./EmployeeList.css"

// Array of Department and Employees
const Department = [
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

function EmployeeList() {
    return(
    <ul id="employees">

        {Department.map((department, index) => (
            <div key={index}>
                <li className="department-titles" >{department.name}</li>
                {department.employees.map((employee, employeeIndex) => (
                    <li className="employee-list" key={employeeIndex}> {employee}</li>
                ))}
            </div>         
        ))}
    </ul>);
}

export default EmployeeList;