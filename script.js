//1.create a XHR object
var req = new XMLHttpRequest();
//2.open a connection.
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending the request
req.send();
//4.once the data(string) recived what opertion it must perform.
req.onload=function(){
    var data=JSON.parse(this.response);
   // console.log(data);
for(var i=0;i<data.length;i++)
(
    console.log(data[i].name)
)

}