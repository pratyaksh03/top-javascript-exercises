const findTheOldest = function(array) {
    const getAge = function(birth,death){
        if(!death){
            death = new Date().getFullYear();
        }
        return death - birth;
    }
    return array.reduce((oldest,current)=> {
        const oldestAge = getAge(oldest.birth,oldest.death);
        const currentAge = getAge(current.birth,current.death);
        return oldestAge<currentAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
