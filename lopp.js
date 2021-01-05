"use strict"

 var hours=["6am" ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function Resturan(location,min,max,avgCookieSale,hourlySales,dailySales){
    this.location =location ;
    this.min= min ;
    this.max=max ;
    this.avgCookieSale=avgCookieSale ;
    this.hourlySales=[] ;
    this.dailySales = [];
   this.randomCust =function(){

     var range=this.max-this.min;
      var randomCount=Math.random() * range+this.min;
    return Math.ceil(randomCount);

   } ;
this.hourly=function() {
    for ( var i=0;i<hours.length;i++){
       var  a= this.randomCust()
      var nc = Math.ceil(a *this.avgCookieSale) ;
      this.hourlySales.push(nc) ;
    this.dailySales += nc;

}}
  
   

   
   this.randomCust()
   this.hourly()
}


Resturan.prototype.hourlyDailySales=function(){
    for ( var i=0;i<hours.length;i++){
     var numOfCookies= Math.ceil(seattleCookies.randomCust() *seattleCookies.avgCookieSale);
    seattleCookies.hourlySales.push(numOfCookies);
        seattleCookies.dailySales += numOfCookies;
    }

}

 var seattleCookies = new Resturan('seatle',23,65,6.3,[],0);

console.log(seattleCookies.randomCust())
console.log(seattleCookies.hourlySales)

 var tokyoCookies = new Resturan('tokyo',3,24,1.2,[],0);
  var dubaiCookies = new Resturan('dubai',11,38,3.7,[],0);
 var parisCookies = new Resturan('paris',20,38,3.7,[],0);
 var limaCookies = new Resturan('lima',2,16,4.6,[],0);

 var container=document.getElementById('content-area'); 

 

var table =document.createElement('table');
container.appendChild(table);




var tableRawOne=document.createElement('tr');
table.appendChild(tableRawOne);
var header =document.createElement('th');
header.textContent='time'
tableRawOne.appendChild(header)

function time(){
  for (let index = 0; index < hours.length; index++) {
  var pra =document.createElement('th')
  table.appendChild(pra)
  var data=document.createElement('td')
  data.textContent=hours[index];
    tableRawOne.appendChild(data)
  }
  
   }   
  time()

  
  

  var tableRawOne=document.createElement('tr');
  table.appendChild(tableRawOne);
  var header =document.createElement('tr');
  header.textContent=seattleCookies.location
  tableRawOne.appendChild(header)

  function seat() {
    for(var i=0;i<tokyoCookies.hourlySales.length;i++){
    
  var second = document.createElement('th')
  table.appendChild(second)
  var data =document.createElement('td')
  data.textContent=seattleCookies.hourlySales[i]
  tableRawOne.appendChild(data);
  }}
  seat()


var tableRawOne=document.createElement('tr');
table.appendChild(tableRawOne);
var header =document.createElement('th');
header.textContent=tokyoCookies.location
tableRawOne.appendChild(header)

function toky() {
  for(var i=0;i<tokyoCookies.hourlySales.length;i++){
  
var second = document.createElement('th')
table.appendChild(second)
var data =document.createElement('td')
data.textContent=tokyoCookies.hourlySales[i]
tableRawOne.appendChild(data);
}}
toky()

var tableRawOne=document.createElement('tr');
table.appendChild(tableRawOne);
var header =document.createElement('th');
header.textContent=dubaiCookies.location
tableRawOne.appendChild(header)

function dubae() {
  for(var i=0;i<dubaiCookies.hourlySales.length;i++){
  
var second = document.createElement('th')
table.appendChild(second)
var data =document.createElement('td')
data.textContent=dubaiCookies.hourlySales[i]
tableRawOne.appendChild(data);
}}
dubae()

var tableRawOne=document.createElement('tr');
table.appendChild(tableRawOne);
var header =document.createElement('th');
header.textContent=parisCookies.location
tableRawOne.appendChild(header)

function pare() {
  for(var i=0;i<parisCookies.hourlySales.length;i++){
  
var second = document.createElement('th')
table.appendChild(second)
var data =document.createElement('td')
data.textContent=parisCookies.hourlySales[i]
tableRawOne.appendChild(data);
}}
pare()

var tableRawOne=document.createElement('tr');
table.appendChild(tableRawOne);
var header =document.createElement('th');
header.textContent=limaCookies.location
tableRawOne.appendChild(header)

function lma() {
  for(var i=0;i<limaCookies.hourlySales.length;i++){
  
var second = document.createElement('th')
table.appendChild(second)
var data =document.createElement('td')
data.textContent=limaCookies.hourlySales[i]
tableRawOne.appendChild(data);
}}
lma()





var tableRawOne=document.createElement('tr');
table.appendChild(tableRawOne);
var header =document.createElement('th');
header.textContent='total'
tableRawOne.appendChild(header)
function tot() {
  for(var i=0;i<limaCookies.hourlySales.length;i++){
    var total = seattleCookies.hourlySales[i]+tokyoCookies.hourlySales[i]+dubaiCookies.hourlySales[i]+parisCookies.hourlySales[i]+limaCookies.hourlySales[i]
var second = document.createElement('th')
table.appendChild(second)
var data =document.createElement('td')
data.textContent= total
tableRawOne.appendChild(data);
}
}
tot()

var tabelColom=document.createElement('th');
table.appendChild(tabelColom);
var header =document.createElement('th');
header.textContent='total dayaly'
tabelColom.appendChild(header)

function totale() {
  for(var i=0;i<limaCookies.hourlySales.length;i++){
    var total = seattleCookies.dailySales[i]+tokyoCookies.dailySales[i]+dubaiCookies.dailySales[i]+parisCookies.dailySales[i]+limaCookies.dailySales[i]
var second = document.createElement('th')
tableRawOne.appendChild(second)
var data =document.createElement('tr')
data.textContent= total
tabelColom.appendChild(data);
}
}
totale()