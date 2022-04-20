// The js Date Object
function makeDate(){
    let currentDate = new Date();
    let secs = currentDate.getSeconds(),
        mins = currentDate.getMinutes(),
        hours =currentDate.getHours(),
        day  =  currentDate.getDay(),
        date = currentDate.getDate(),
        month = currentDate.getMonth(),
        year = currentDate.getFullYear();
   
    if(secs < 10){
        secs = `0${secs}`;
    }
    if(hours < 10){
        hours = `0${hours}`;
    }
    if(mins < 10){
        mins = `0${mins}`;
    }

    let daysOfTheWeek = [
       "Sunday",
       "Monday",
       "Tuesday",
       "Wednesday",
       "Thursday",
       "Friday",
       "Saturday"
    ];
    let formattedDay = daysOfTheWeek[day];
    let monthsOfTheYear =[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let formattedMonth = monthsOfTheYear[month];

    document.getElementById("day").innerText = formattedDay ;
    document.getElementById("date").innerText = date;
    document.getElementById("month").innerText = formattedMonth;
    document.getElementById("year").innerText = year;
    document.getElementById("hours").innerText = hours;
    document.getElementById("mins").innerText = mins;
    document.getElementById("secs").innerText = secs;
}

setInterval(makeDate, 1000);