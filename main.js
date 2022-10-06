// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

/*
functionName: createUser
parameters: 2 strings (firstName, lastName)

return: object
{
    firstName: string
    lastName: string
}

putting firstName and lastName into an object
*/

// user object and its functions
function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    };

    return user;
}
function setAge(user, age){
    user.age = age;
    return user;
}

function incrementAge(user){
    user.age = user.age + 1;
    return user;
}

// car object and its functions
function createCar(make, model, year, needsMaintenance){
    let car = {
        make: make,
        model: model,
        year: year,
        needsMaintenance: needsMaintenance
    };
    return car;
}

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}

// student object and its functions
function createStudent(name, email, grades){

    let student = {
        name: name,
        email: email,
        grades: grades
    };
    return student; 

}
function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades);
    return student;
}


//Creates an object called 'mesuara'
const mesuara = createUser('Mesuara', 'Kaleziq');
console.log(mesuara);


const tim = createUser('Tim', 'Horton');
setAge(tim, 50);
console.log(tim);


const angela = createUser('Angela', 'Merkel');
setAge(angela, 66);
incrementAge(angela);
console.log(angela);

const mustang = createCar('Ford', 'Mustang', 1969, true);
fixCar(mustang);
console.log(mustang);

const anthony = createStudent('Anthony', 'anthony.derosa@codeimmersives.com',[80, 100, 95]);
const newGrades = [88, 70, 90];
addGrades(anthony, newGrades);
console.log(anthony)



// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
