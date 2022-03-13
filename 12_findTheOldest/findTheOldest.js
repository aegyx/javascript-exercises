const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((oldest, currentPerson) => {
        let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath); 
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        return currentAge > oldestAge ? currentPerson : oldest;
    });
};


function getAge(birthYear, deathYear) {
    if (!deathYear) {
        let currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    };
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;



