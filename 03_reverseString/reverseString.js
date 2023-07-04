const reverseString = function(str) {
    const array = str.split('');
    const reversedArray = array.reverse();
    const reversedString = reversedArray.join('');
    return reversedString;
};

module.exports = reverseString;
