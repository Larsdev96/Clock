var sound1 = new Audio('/audio/geluid1.mp3');
var sound2 = new Audio('/audio/geluid2.mp3');
var sound3 = new Audio('/audio/mainsound.mp3');


function displayTime() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() +1;
    var currentDay = currentDate.getDate();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();

    document.getElementById("year").innerHTML = currentYear;
    document.getElementById("months").innerHTML = currentMonth;
    document.getElementById("days").innerHTML = currentDay + ".";
    document.getElementById("hours").innerHTML = currentHour + ":";
    document.getElementById("minutes").innerHTML = currentMinute + ":";
    document.getElementById("seconds").innerHTML = currentSecond;

    if (currentMonth === 1) {
        document.getElementById("months").innerHTML = "january";
    }
    
    else if (currentMonth === 2) {
        document.getElementById("months").innerHTML = "february";
    }
    
    else if (currentMonth === 3) {
        document.getElementById("months").innerHTML = "march";
    }
    
    else if (currentMonth === 4) {
        document.getElementById("months").innerHTML = "april";
    }
    
    else if (currentMonth === 5) {
        document.getElementById("months").innerHTML = "may";
    }
    
    else if (currentMonth === 6) {
        document.getElementById("months").innerHTML = "june";
    }
    
    else if (currentMonth === 7) {
        document.getElementById("months").innerHTML = "july";
    }
    
    else if (currentMonth === 8) {
        document.getElementById("months").innerHTML = "august";
    }
    
    else if (currentMonth === 9) {
        document.getElementById("months").innerHTML = "september";
    }
    
    else if (currentMonth === 10) {
        document.getElementById("months").innerHTML = "october";
    }
    
    else if (currentMonth === 11) {
        document.getElementById("months").innerHTML = "november";
    }
    
    else if (currentMonth === 12) {
        document.getElementById("months").innerHTML = "december";
    }


    
    switch (currentSecond) {
        case 0:
            sound2.play();
            break;
        case 1:
            sound1.play();
            break;
        case 2:
            sound2.play();
            break;
        case 3:
            sound1.play();
            break;
        case 4:
            sound2.play();
            break;
        case 5:
            sound1.play();
            break;
        case 6:
            sound2.play();
            break;
        case 7:
            sound1.play();
            break;
        case 8:
            sound2.play();
            break;
        case 9:
            sound1.play();
            break;
        case 10:
            sound2.play();
            break;
        case 11:
            sound1.play();
            break;
        case 12:
            sound2.play();
            break;
        case 13:
            sound1.play();
            break;
        case 14:
            sound2.play();
            break;
        case 15:
            sound1.play();
            break;
        case 16:
            sound2.play();
            break;
        case 17:
            sound1.play();
            break;
        case 18:
            sound2.play();
            break;
        case 19:
            sound1.play();
            break;
        case 20:
            sound2.play();
            break;
        case 21:
            sound1.play();
            break;
        case 22:
            sound2.play();
            break;
        case 23:
            sound1.play();
            break;
        case 24:
            sound2.play();
            break;
        case 25:
            sound1.play();
            break;
        case 26:
            sound2.play();
            break;
        case 27:
            sound1.play();
            break;
        case 28:
            sound2.play();
            break;
        case 29:
            sound1.play();
            break;
        case 30:
            sound2.play();
            break;
        case 31:
            sound1.play();
            break;
        case 32:
            sound2.play();
            break;
        case 33:
            sound1.play();
            break;
        case 34:
            sound2.play();
            break;
        case 35:
            sound1.play();
            break;
        case 36:
            sound2.play();
            break;
        case 37:
            sound1.play();
            break;
        case 38:
            sound2.play();
            break;
        case 39:
            sound1.play();
            break;
        case 40:
            sound2.play();
            break;
        case 41:
            sound1.play();
            break;
        case 42:
            sound2.play();
            break;
        case 43:
            sound1.play();
            break;
        case 44:
            sound2.play();
            break;
        case 45:
            sound1.play();
            break;
        case 46:
            sound2.play();
            break;
        case 47:
            sound1.play();
            break;
        case 48:
            sound2.play();
            break;
        case 49:
            sound1.play();
            break;
        case 50:
            sound2.play();
            break;
        case 51:
            sound1.play();
            break;
        case 52:
            sound2.play();
            break;
        case 53:
            sound1.play();
            break;
        case 54:
            sound2.play();
            break;
        case 55:
            sound1.play();
            break;
        case 56:
            sound2.play();
            break;
        case 57:
            sound1.play();
            break;
        case 58:
            sound2.play();
            break;
        case 59:
            sound1.play();
            break;
        default:
            break;
        };

        if (currentHour == 0 && currentMinute == 0 && currentSecond == 0) {
            sound3.play();
        }
        if (currentHour == 0 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        
        if (currentHour == 1 && currentMinute == 00 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 1 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 2 && currentMinute == 00 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 2 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 3 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 3 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 4 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 4 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 5 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 5 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 6 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 6 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 7 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 7 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 8 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 8 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 9 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 9 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 10 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 10 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 11 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 11 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 12 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 12 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 13 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 13 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 14 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 14 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 15 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 15 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 16 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 16 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 17 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 17 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 18 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 18 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 19 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 19 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 20 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 20 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 21 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 21 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 22 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 22 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 23 && currentMinute == 0 && currentSecond == 0){
            sound3.play();
        }
        if (currentHour == 23 && currentMinute == 30 && currentSecond == 0){
            sound3.play();
        }
        
} setInterval(displayTime, 10)




