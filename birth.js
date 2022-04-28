function calculateBirth(age){

    var currentYear = new Date().getFullYear();

    var birthYear = currentYear - age;

    return birthYear;
}

module.exports = {
    calculateBirth
}
