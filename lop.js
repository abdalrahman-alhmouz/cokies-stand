"use strict"
 var hours=["6am " ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
//seattle
var seattleCookies = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        var range=seattleCookies.max-seattleCookies.min;
         var randomCount=Math.random() * range+seattleCookies.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (var i=0;i<hours.length;i++){
            var numOfCookies= Math.ceil(seattleCookies.randomCust() *seattleCookies.avgCookieSale);
            seattleCookies.hourlySales.push(numOfCookies);
            seattleCookies.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       var container=document.getElementById('content-area');
       var h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Seattle';
       container.appendChild(h2);
       var list=document.createElement('ul');
       container.appendChild(list);
       for (var i=0;i<hours.length;i++){
        var listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+seattleCookies.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       var listItem = document.createElement('li');
        listItem.textContent  ='Total: '+seattleCookies.dailySales+' cookies';
        list.appendChild(listItem);


   },
}


   seattleCookies.hourlyDailySales();
   seattleCookies.render();

    
    
    



//Tokyo
var tokyoCookies = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avgCookieSale: 1.2,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        var range=tokyoCookies.max-tokyoCookies.min;
         var randomCount=Math.random() * range+tokyoCookies.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (var i=0;i<hours.length;i++){
            var numOfCookies= Math.ceil(tokyoCookies.randomCust() *tokyoCookies.avgCookieSale);
            tokyoCookies.hourlySales.push(numOfCookies);
            tokyoCookies.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       var container=document.getElementById('content-area');
       var h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Tokyo';
       container.appendChild(h2);
       var list=document.createElement('ul');
       container.appendChild(list);
       for (var i=0;i<hours.length;i++){
        var listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+tokyoCookies.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       var listItem = document.createElement('li');
        listItem.textContent  ='Total: '+tokyoCookies.dailySales+' cookies';
        list.appendChild(listItem);


   },
}


tokyoCookies.hourlyDailySales();
tokyoCookies.render();
   //Dubai
   var dubaiCookies = {
    location: 'Dubai',
    min: 11,
    max: 38,
    avgCookieSale: 3.7,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        var range=dubaiCookies.max-dubaiCookies.min;
         var randomCount=Math.random() * range+dubaiCookies.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (var i=0;i<hours.length;i++){
            var numOfCookies= Math.ceil(this.randomCust() *this.avgCookieSale);
            dubaiCookies.hourlySales.push(numOfCookies);
            dubaiCookies.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       var container=document.getElementById('content-area');
       var h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Dubai';
       container.appendChild(h2);
       var list=document.createElement('ul');
       container.appendChild(list);
       for (var i=0;i<hours.length;i++){
        var listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+dubaiCookies.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       var listItem = document.createElement('li');
        listItem.textContent  ='Total: '+dubaiCookies.dailySales+' cookies';
        list.appendChild(listItem);


   },
}


dubaiCookies.hourlyDailySales();
dubaiCookies.render();
   //Paris
   var parisCookies = {
    location: 'Paris',
    min: 20,
    max: 38,
    avgCookieSale: 3.7,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        var range=parisCookies.max-parisCookies.min;
         var randomCount=Math.random() * range+this.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (var i=0;i<hours.length;i++){
            var numOfCookies= Math.ceil(parisCookies.randomCust() *parisCookies.avgCookieSale);
            parisCookies.hourlySales.push(numOfCookies);
            parisCookies.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       var container=document.getElementById('content-area');
       var h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Paris';
       container.appendChild(h2);
       var list=document.createElement('ul');
       container.appendChild(list);
       for (var i=0;i<hours.length;i++){
        var listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+parisCookies.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       var listItem = document.createElement('li');
        listItem.textContent  ='Total: '+parisCookies.dailySales+' cookies';
        list.appendChild(listItem);


   },
}


parisCookies.hourlyDailySales();
parisCookies.render();
   //Lima
   var limaCookies = {
    location: 'Lima',
    min: 2,
    max: 16,
    avgCookieSale: 4.6,
    hourlySales:[],
    dailySales:0,

   randomCust :function () {
        var range=parisCookies.max-this.min;
         var randomCount=Math.random() * range+parisCookies.min;
         return Math.ceil(randomCount);
      },

    hourlyDailySales :function () {
        for (var i=0;i<hours.length;i++){
            var numOfCookies= Math.ceil(parisCookies.randomCust() *parisCookies.avgCookieSale);
            parisCookies.hourlySales.push(numOfCookies);
            parisCookies.dailySales += numOfCookies;
        }
        },
       
   render :function(){
       var container=document.getElementById('content-area');
       var h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Lima';
       container.appendChild(h2);
       var list=document.createElement('ul');
       container.appendChild(list);
       for (var i=0;i<hours.length;i++){
        var listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+parisCookies.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       var listItem = document.createElement('li');
        listItem.textContent  ='Total: '+parisCookies.dailySales+' cookies';
        list.appendChild(listItem);


   },
}


limaCookies.hourlyDailySales();
limaCookies.render();