let employees=[
    {
        name:"jack",
        age:30,
        city:"china",
        salary:100000
    },
    {
        name:"aish",
        age:20,
        city:"India",
        salary:200000
    },
    {
        name:"suriya",
        age:17,
        city:"USA",
        salary:90000
    },
    {
        name:"shanmu",
        age:30,
        city:"Russia",
        salary:50000
    },
    {
        name:"issac",
        age:21,
        city:"India",
        salary:250000
    },
]
function display(employeeArray){
    let tableData="";
    employeeArray.forEach(function(employee,index){
        let currentrow=`<tr>
        <td>${index+1}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.city}</td>
        <td>${employee.salary}</td>
        <td><button onclick="deleteData(${index})">Delete</button></td>
        </tr>`
        tableData=tableData+ currentrow;
        });
        document.getElementsByClassName("getData")[0].innerHTML=tableData;
}
display(employees);

function searchByName(){
    let searchName=document.getElementById("searchName").value;
    let newArray=employees.filter(function(employee){
        return(employee.name.toUpperCase().indexOf(searchName.toUpperCase())!= -1);
    });
    display(newArray);

}
function searchByCity(){
    let searchCity=document.getElementById("searchCity").value;
    let newArray=employees.filter(function(employee){
        return(employee.city.toUpperCase().indexOf(searchCity.toUpperCase())!= -1);
    });
    display(newArray);
}
function deleteData(index){
    employees.splice(index,1);
    display(employees);
}
