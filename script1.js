var table = document.createElement('table');
table.className="table";

var thead = document.createElement('thead');
thead.className = "thead-dark";

var tr =document.createElement('tr');
var th1 = createtrtd("th","#");
var th2 = createtrtd("th","First");
var th3 = createtrtd("th","Last");
var th4 = createtrtd("th","Handle");
tr.append(th1,th2,th3,th4);
thead.append(tr);

var tbody = document.createElement('tbody');

var tr =document.createElement('tr');
var th = createtrtd("th","1");
var td1 = createtrtd("td","Mark");
var td2 = createtrtd("td","Otto");
var td3 = createtrtd("td","@mdo");
tr.append(th,td1,td2,td3);
tbody.append(tr);

var tr =document.createElement('tr');
var th = createtrtd("th","2");
var td1 = createtrtd("td","Jacob");
var td2 = createtrtd("td","Thornton");
var td3 = createtrtd("td","@fat");
tr.append(th,td1,td2,td3);
tbody.append(tr);

var tr =document.createElement('tr');
var th = createtrtd("th","3");
var td1 = createtrtd("td","Larry");
var td2 = createtrtd("td","the Bird");
var td3 = createtrtd("td","@twitter");
tr.append(th,td1,td2,td3);
tbody.append(tr);

table.append(thead,tbody);
document.body.append(table);


function createtrtd(elemntname,value)
{
    var td = document.createElement(elemntname)
    td.innerHTML=value
    return td;
}


var button = document.createElement('button')
button.innerHTML="click me"
button.className = "btn btn-primary"
button.addEventListener('click',alert)
document.body.append(button)

function alert()
{
   var p =  document.createElement('p')
   p.innerHTML="this is the p"
   p.style.color="white"
   p.style.backgroundColor="red"
   p.style.width = "10%"
   p.style.textAlign="center"
   document.body.append(p)
}

