// var languages = ['Java','Java Script','PHP','Ruby'];
//
// for(let i= 0; i < languages.length; i ++) {
//     console.log(languages[i]);
// }
//
// for(let language of languages){
//     console.log(language);
// }
//
// for(let language in languages){
//     console.log(language);
// }
//
// console.log(Array.isArray(languages))
//
// console.log(languages.join(''));
// console.log(languages.join().split(','));
// console.log(languages.pop());
// let yo = languages.slice(0);
// console.log(languages);
// console.log(yo)

// To String
// Pop
// Push
// Shift
// UnShift
// Splicing
// Concat
// Slicing

// function compute(input, input2){
//     console.log(input);
//     console.log(input2);
// }
//
// compute('Hello',2);
//
// function writeLog(){
//     let name ='';
//     for(let param of arguments){
//         name +=`${param} ,`
//     }
//     console.log(name);
// }
//

// A typical Object constructor
// function User(firstName, lastName, avt) {
//     this.firstName= firstName;
//     this.lastName = lastName;
//     this.avt = avt;
//
//     this.getName = function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
//
// let avt = new User('Nhat','Bui','abc');
// let avt2 = new User('Kay','Joe','124');
//
// console.log(avt.getName());
// console.log(avt2);

let date = 10;

// switch (date) {
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Wednesday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 7:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('Sunday');
// }

/* Array methode
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
* */
var courses = [
    {
        id: 1,
        name: 'React',
        coin: 100
    },
    {
        id: 2,
        name: 'Java',
        coin: 200
    },
    {
        id: 3,
        name: 'PHP',
        coin: 300
    },
    {
        id: 4,
        name: 'GO',
        coin: 600
    },
    {
        id: 5,
        name: 'React',
        coin: 900
    },
    {
        id: 6,
        name: 'DART',
        coin: 0
    }
];

//For Each
courses.forEach(function (course,index){
    console.log(index);
    console.log(course);
} );

//Every
console.log(courses.every(function (course,index){
    return course.coin === 0;
}));

// find
console.log(courses.find(function (course,index){
    return course.name==='Java';
}));

// let newCourses = courses.map(costHandler);
let course = courses.map(function (course, index) {
    return course.name;
});

function costHandler(course) {
    return {
      id: course.id,
        name: `Class: ${course.name}`,
        coin: course.coin + 1,
        coinText: `Price: ${course.coin}`
    };
}

// console.log(newCourses);
console.log(course);


//Reduce
let i = 0;
function sumHandler(accumulator, currentValue, currentIndex){
    i++
    let res =  accumulator + currentValue.coin;
    console.table({
        'i' : i,
        'accumulator': accumulator,
        'coin' : currentValue.coin,
        'Total accumulate': res
    });
    return res;
}

//Storing variable
//Storage

let totalCoin = courses.reduce(sumHandler, 0);


// let total = courses.reduce((a,b) => {
//     return a + b.coin;
// }, 0)
//
// console.log(total);
// let j = 0;
//
// var total = courses.reduce((total, course) =>{
//     j ++;
//     console.log(j, total);
//     return total + course.coin;
// },0)

//Flatten array
let depthArray = [1,2,[3,4],5,6,[7,8,9]];

let flatArray = depthArray.reduce((flat, depthItem)=> {
    return flat.concat(depthItem);
},[]);
console.log((flatArray));

let topics = [
    {
        topic:"Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },   {
                id: 2,
                title: "Javascript"
            }
        ]
    },{
        topic:"Back-end",
        courses: [
            {
                id: 1,
                title: "Java"
            },   {
                id: 2,
                title: "Go Lang"
            }
        ]
    }
];

let newArr =topics.reduce((courses, topic) =>{
    return courses.concat(topic.courses);
},[]);

console.log(newArr);
//Render to HTML

let html = newArr.map((course) =>{
    return`
        <div>
            <h2>${course.title}</h2>
            <p>Id: ${course.id}</p>
        </div>
    `
})

console.log(html.join(''));

