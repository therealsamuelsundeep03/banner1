function checkBox(){
    var count = 0;
    var val = [];
    var check = document.getElementsByName("food");
    for(var i = 0;i < check.length;i++){
        if(check[i].checked){
            count++;
            val.push(check[i].value);
        }if(count > 2){
            alert("Select Only Two Options");
            check[i].checked = false;
            break;  
        }
    }
    return val;
}
function displaydata(){  
var res = checkBox();       
var tbody = document.getElementById("tbody");
tbody.innerHTML += `<td>${document.getElementById("fn").value}</td>
                    <td>${document.getElementById("ln").value}</td>
                    <td>${document.getElementById("address").value}</td>
                    <td>${document.getElementById("pin").value}</td>
                    <td>${document.querySelector('input[name = "gen"]:checked').value}</td>
                    <td>${document.getElementById("state").value}</td>
                    <td>${document.getElementById("country").value}</td>
                    <td>${res}</td>`
 document.querySelector("form").reset();                   
}