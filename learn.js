var table = document.createElement('table');
table.className = "table";

var thead = document.createElement('th');
var tr = document.createElement('tr');
var th1 = createthtd("th","name")
var th2 = createthtd("th","age")
var th3 = createthtd("th","birthdate")
tr.append(th1,th2,th3);
thead.append(tr);
table.append(thead);
document.body.append(table); 

var tbody = document.createElement('tbody')
table.append(tbody)
document.body.append(table);

var myArray = [
    {'name':'Michael', 'age':'30', 'birthdate':'11/10/1989'},
    {'name':'Mila', 'age':'32', 'birthdate':'10/1/1989'},
    {'name':'Paul', 'age':'29', 'birthdate':'10/14/1990'},
    {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
    {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
    {'name':'Erik', 'age':'24', 'birthdate':'10/31/1995'},
]
tdata(myArray)

function tdata(data);
{
    for(var i = 0;i<data.length;i++){
    var tr = document.createElement('tr');
    var td1 = createthtd("td",data[i].name);
    var td2 = createthtd("td",data[i].age);
    var td3 = createthtd("td",data[i].birthdate);
   
}
}



function createthtd(elementname,value ="")
{
    var td = document.createElement(elementname);
    td.innerHTML = value;
    return td;
}
