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

function getDataType(car, dataType){
    if(dataType === 'make'){
        return 'string';
    }
    else if(dataType === 'model'){
        return 'string';
    }
    else if(dataType === 'year'){
        return 'number';
    }
    else if(dataType === 'needsMaitenance'){
        return 'boolean';
    }

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

// newTodo object and its functions
function createNewTodo(title, isComplete){
    let newTodo = {
        title: title, 
        isComplete: isComplete
    };
    return newTodo;
}

function addTodo(todos, newTodo){
    todos.push(newTodo);
    return todos;
}

//playlist and a song object
const playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};

function newSong(title, artist, duration){
    const song = {
    title: title,
    artist: artist,
    duration: duration
    }; 
    return song;
};

function addSong(playlist, song){
    playlist.duration = playlist.duration + song.duration;
    playlist.songs.push(song);
    return playlist;
}
//reportCard object and functions  

function createReportCard(lowestGrade, highestGrade, averageGrade, grades){
    const reportCard = {
        lowestGrade: lowestGrade,
        highestGrade: highestGrade,
        averageGrade: averageGrade,
        grades: grades
    }; 
    return reportCard;
}

function updateReportCard(reportCard, grade){

    reportCard.grades.push(grade);
    reportCard.lowestGrade = Math.min(...reportCard.grades);
    reportCard.highestGrade = Math.max(...reportCard.grades);
    reportCard.averageGrade = avgGrade(reportCard.grades)
    return reportCard;

    function avgGrade(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
           sum = sum + arr[i]; 
        }
    
        return (sum / arr.length);
    }
}



////////////////////////////////////////////////////////////////////////////////

//Creates an object called 'mesuara'
const mesuara = createUser('Mesuara', 'Kaleziq');
console.log(mesuara);

// Creates an object called 'tim'
const tim = createUser('Tim', 'Horton');
setAge(tim, 50);
console.log(tim);

// Creates an object called 'angela'
const angela = createUser('Angela', 'Merkel');
setAge(angela, 66);
incrementAge(angela);
console.log(angela);

// Creates an object called mustang
const mustang = createCar('Ford', 'Mustang', 1969, true);
fixCar(mustang);
console.log(mustang);
console.log(getDataType(mustang,'make'));
console.log(getDataType(mustang,'model'));
console.log(getDataType(mustang,'year'));
console.log(getDataType(mustang,'needsMaitenance'));

const anthony = createStudent('Anthony', 'anthony.derosa@codeimmersives.com',[80, 100, 95]);
const newGrades = [88, 70, 90];
addGrades(anthony, newGrades);
console.log(anthony)

//Implementation of todo object
const todos = [
    { 
        title: 'Get gas', 
        isComplete: false },
    { 
        title: 'Buy bread', 
        isComplete: true  
    }
];
const gas = createNewTodo('Get gas', false);
const bread = createNewTodo('Buy bread',true);
const mom = createNewTodo('Call mom', false);
addTodo(todos,mom);

//Creates old friends object and implements addSong() function
const oldFriends = newSong("Old Friends", "Pinegrove", 3 );
console.log(oldFriends)
addSong(playlist, oldFriends);
console.log(playlist)

//Creates reportCard and adds new grade

const myReportCard = createReportCard(70, 96, 82, [70, 95, 80]);
updateReportCard(myReportCard, 62);
console.log(myReportCard);
const myReportCard2 = createReportCard(70, 96, 82, [70, 95, 80]);
updateReportCard(myReportCard2, 100);
console.log(myReportCard2);



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
