const leapYears = function(input) {
    if(input%100==0){
        if(input%400==0){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if(input%4==0){
            return true;
        }
        else {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = leapYears;
