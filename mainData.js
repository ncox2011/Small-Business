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
   

const mainArt = $("#mainArt");

for (let i =0; i < Employees.length; i++) {
    let newArt = $("<article>")
    newArt.attr("class", "arty")
    let divs = $("<div>")
    divs.attr("class", "divvy")
    newArt.append(divs)
    let employHeader = $("<header>")
    employHeader.attr("class", "please work")
    divs.append(employHeader)
    let employH1 = $("<h1>")
    employH1.text(Employees[i].name)
    employHeader.append(employH1)
    let id = Employees[i].departmentId
    let comp = Employees[i].computerId
   for (let i =0; i < Departments.length; i++) {
       if (id === Departments[i].departmentId) {
           let departmentSec = $("<section>")
           departmentSec.text(Departments[i].title)
           divs.append(departmentSec)
       }
   } 
   for (let i =0; i < commputers.length; i++){
       if (comp === commputers[i].computerId) {
           let compSec = $("<section>")
           compSec.text(commputers[i].compName)
           divs.append(compSec)
       }
   }
   mainArt.append(newArt)

   //mainSec.append(employArticle)
}