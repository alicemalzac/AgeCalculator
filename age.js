function calculateAge(birthYear){

    var currentYear = new Date().getFullYear();

    var age = currentYear - birthYear;

    return age;
}

module.exports = {
    calculateAge
}
