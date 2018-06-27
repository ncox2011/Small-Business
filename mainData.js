const Employees = [
    {
        employeeId: 1,
        name: "Mandy",
        departmentId: 2,
        computerId: 3
    },
    {
        employeeId: 2,
        name: "Tami",
        departmentId: 2,
        computerId: 1
    },
    {
        employeeId: 3,
        name: "Katelyn",
        departmentId: 1,
        computerId: 2
    },
    {
        employeeId: 4,
        name: "Jay",
        departmentId: 1,
        computerId: 2
    }
]

const Departments = [
    {
        departmentId: 1,
        title: "Pharmacist"
    },
    {
        departmentId: 2,
        title: "Technician"
    }
]

const commputers = [
    {
        computerId: 1,
        compName: "POS"
    },
    {
        computerId: 2,
        compName: "Check Station"
    },
    {
        computerId: 3,
        compName: "Main Puncher"
    }
]
   

const mainSec = $("#mainSec");

for (let i =0; i < Employees.length; i++) {
    console.log(Employees[i].name)
    let employHeader = $("<h1>")
    employHeader.text(Employees[i].name)
    mainSec.append(employHeader)
    let id = Employees[i].departmentId
    let comp = Employees[i].computerId
   for (let i =0; i < Departments.length; i++) {
       if (id === Departments[i].departmentId) {
           let departmentSec = $("<section></section>")
           departmentSec.text(Departments[i].title)
           mainSec.append(departmentSec)
       }
   } 
   for (let i =0; i < commputers.length; i++){
       if (comp === commputers[i].computerId) {
           let compSec = $("<section>")
           compSec.text(commputers[i].compName)
           mainSec.append(compSec)

       }
   }

   //mainSec.append(employArticle)
}