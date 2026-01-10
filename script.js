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

// Declarations 
const employeeList = document.getElementById("employees");
const footer = document.getElementById("footer")
const date = new Date()
const currentYear = date.getFullYear()

// List loop
Department.forEach(employee => {
    // Title
    const title = document.createElement("li")
    title.textContent = employee.name
    title.style.fontWeight = "bold";
    title.style.listStyle = "none";
    title.style.marginTop = "20px";
    employeeList.appendChild(title)

        // Employee list
        employee.employees.forEach(employee => {
            const li = document.createElement("li");
            li.textContent = employee
            li.style.marginLeft = "20px";
            employeeList.appendChild(li)
    })
})

// Date for copyright
footer.append(currentYear)
