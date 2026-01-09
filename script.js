const employees = ["Livy Morra", "Olukayode Aggio", "Ezio Zeni", "Nikodimos Tarasenko", "Severino Rana", "Groovesounds Soulquest"]

const employeeList = document.getElementById("employees");

employees.forEach(employee => {
    const li = document.createElement("li");
    li.textContent = employee
    employeeList.appendChild(li)
})