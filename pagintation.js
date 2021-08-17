//creating a new request.
var xhr = new XMLHttpRequest();
xhr.open("GET","https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json");
xhr.send();
xhr.onload = function(){
  var data = JSON.parse(this.response);
  
  //data

function displaydata(x){
  var tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for(var i = ((x-1)*10);i < (x*10);i++){
    tbody.innerHTML +=`<td>${data[i].id}</td>
                       <td>${data[i].name}</td>
                       <td>${data[i].email}</td>`              
  }
}
  var tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  for(var i = 0;i < 10;i++){
  tbody.innerHTML +=`<td>${data[i].id}</td>
                       <td>${data[i].name}</td>
                       <td>${data[i].email}</td>`                
  }

  //creating buttons.
  var first = document.createElement("button");
  first.innerHTML = "FIRST";
  first.style = "font-weight:bold";
  first.className = "button";
  first.addEventListener('click',function(){
    displaydata(1);
  })
  document.body.append(first);


  var prev = document.createElement('button');
  prev.innerHTML = "PREV";
  prev.className = "button";
  prev.style = "font-weight:bold";
  function prevdata(y){
    y=y-1
    prev.addEventListener('click',function(){
      displaydata(y);
    })
  }

  var next = document.createElement('button');
  next.innerHTML = "NEXT";
  next.className = "button";
  next.style = "font-weight:bold";
  document.body.append(prev,next)

  var temp= [];
  for(var i = 0; i <= 9;i++){
    var button = document.createElement("button");
    button.innerHTML = i+1;
    button.className = "button";
    button.style = "font-weight:bold";
    temp.push(button);
    document.body.append(button);
  }

  var last = document.createElement("button");
  last.innerHTML = "LAST";
  last.className = "button";
  last.style = "font-weight:bold";
  last.addEventListener('click',function(){
  displaydata(10);
  })
  document.body.append(last);

  temp.forEach((e)=>{
    e.onclick = function(){
      displaydata(e.innerHTML); 
      prevdata(e.innerHTML);
    }
})
}