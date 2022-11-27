/*
#Current time and date updating every 1000ms
    -current time will be showing as a form of hh:mm:ss
    -current date will be showing as a form of mm-dd-year 
*/

// Variables
const time = document.getElementById("clock-time");
const date = document.getElementById("clock-date");

// Function to get current time
function getTime(){
    const dateObject = new Date();

    // Initialize current times, Date Object method returns the value as integer
    const currentHour = dateObject.getHours();
    const currentMinute = dateObject.getMinutes();
    const currentSecond = dateObject.getSeconds();

    /*
    Casting integer to String and padding the strings to get it in desired form (hh:mm:ss)
    by using String medthod .padStart()
    */
    const currentHourToString = String(currentHour).padStart(2, "0");
    const currentMinuteToString = String(currentMinute).padStart(2, "0");
    const currentSecondToString = String(currentSecond).padStart(2, "0");

    // To update the current time to HTML tag
    time.innerText = `${currentHourToString}:${currentMinuteToString}:${currentSecondToString}`;
}

// Function to get current date
function getDate(){
    const dateObject = new Date();

    // Initialize current date, Date Object method returns the value as integer
    const currentMonth = dateObject.getMonth();
    const currentDay = dateObject.getDay();
    const currentYear = dateObject.getFullYear();

    /*
    Casting integer to String and padding the strings to get it in desired form (mm:dd:year)
    by using String medthod .padStart()
    */
    const currentMonthToString = String(currentMonth).padStart(2, "0");
    const currentDayToString = String(currentDay).padStart(2, "0");
    const currentYearToString = String(currentYear).padStart(2, "0");

    // To update the current time to HTML tag
    date.innerText = `${currentMonthToString}-${currentDayToString}-${currentYearToString}`;
}

// Initial display setup
getTime();
getDate();

// To update the values every 1000 mil-second
setInterval(getTime, 1000);
setInterval(getDate, 1000);

