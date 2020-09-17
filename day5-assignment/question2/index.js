window.onload=function(){
let initialbuses=[];
if(localStorage.getItem("buses")==null){
    localStorage.setItem("buses",JSON.stringify(initialbuses));
}
};
function display(superArray=undefined){
    let tableData="";
    let buses;
    if(superArray==undefined){
        buses=JSON.parse(localStorage.getItem("buses"));
    }
    else{
        buses=superArray;
    }
    buses.forEach(function(bus,index){
        let currentRow=`<tr>
        <td>${index+1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.number}</td>
        <td>${bus.capacity}</td>
        </tr>`
        tableData+=currentRow;
    });
    document.getElementsByClassName("getData")[0].innerHTML=tableData;
}
display();
function addBus(event){
    event.preventDefault();
    let bus={};
    let name=document.getElementById("name").value;
    let source=document.getElementById("source").value;
    let destination=document.getElementById("destination").value;
    let number=document.getElementById("number").value;
    let capacity=document.getElementById("capacity").value;
    bus.name=name;
    bus.source=source;
    bus.destination=destination;
    bus.number=number;
    bus.capacity=capacity;
    let buses=JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses",JSON.stringify(buses));
    display();
    document.getElementById("name").value="";
    document.getElementById("source").value="";
    document.getElementById("destination").value="";
    document.getElementById("number").value="";
    document.getElementById("capacity").value="";
}

function searchBySource(){
    let searchSource=document.getElementById("searchSource").value;
    let buses=JSON.parse(localStorage.getItem("buses"));
    let newArray=buses.filter(function(bus){
        return(bus.source.toUpperCase().indexOf(searchSource.toUpperCase())!= -1);
    });
    display(newArray);
}
function searchByDest(){
    let searchDestination=document.getElementById("searchDestination").value;
    let buses=JSON.parse(localStorage.getItem("buses"));
    let newArray=buses.filter(function(bus){
        return(bus.destination.toUpperCase().indexOf(searchDestination.toUpperCase())!= -1);
    });
    display(newArray);
}



























