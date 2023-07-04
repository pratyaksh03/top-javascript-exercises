var str;
var num;

const repeatString = function(str,num) {
    var str1='';
    if(num>0){
        for(i=0; i < num;i++){
            str1=str1+str;
        }
        return str1;
    }
    else if(num==0){
        return "";
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
