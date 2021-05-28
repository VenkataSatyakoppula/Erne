var des = new Date("june 19,2021 18:00:00").getTime();
var interval = setInterval(function(){
var now = new Date().getTime()

var diff = des - now;
var days = Math.floor(diff/(24*60*60*1000));
var hours = Math.floor((diff%(24*60*60*1000))/(1000*60*60));
var minutes = Math.floor((diff%(60*60*1000))/(1000*60));
var seconds = Math.floor((diff%(60*1000))/(1000))
console.log(days,hours,minutes,seconds)
document.querySelector(".day").innerHTML = days+"Days";
document.querySelector(".rem").innerHTML = hours +" Hour(s) "+minutes + " Minutes "+seconds+ " Seconds ";
},1000);