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

// let date = 10;
//
// // switch (date) {
// //     case 2:
// //         console.log('Monday');
// //         break;
// //     case 3:
// //         console.log('Tuesday');
// //         break;
// //     case 4:
// //         console.log('Thursday');
// //         break;
// //     case 5:
// //         console.log('Wednesday');
// //         break;
// //     case 6:
// //         console.log('Friday');
// //         break;
// //     case 7:
// //         console.log('Saturday');
// //         break;
// //     default:
// //         console.log('Sunday');
// // }
//
// /* Array methode
//     forEach()
//     every()
//     some()
//     find()
//     filter()
//     map()
//     reduce()
// * */
// var courses = [
//     {
//         id: 1,
//         name: 'React',
//         coin: 100
//     },
//     {
//         id: 2,
//         name: 'Java',
//         coin: 200
//     },
//     {
//         id: 3,
//         name: 'PHP',
//         coin: 300
//     },
//     {
//         id: 4,
//         name: 'GO',
//         coin: 600
//     },
//     {
//         id: 5,
//         name: 'React',
//         coin: 900
//     },
//     {
//         id: 6,
//         name: 'DART',
//         coin: 0
//     }
// ];
//
// //For Each
// courses.forEach(function (course,index){
//     console.log(index);
//     console.log(course);
// } );
//
// //Every
// console.log(courses.every(function (course,index){
//     return course.coin === 0;
// }));
//
// // find
// console.log(courses.find(function (course,index){
//     return course.name==='Java';
// }));
//
// // let newCourses = courses.map(costHandler);
// let course = courses.map(function (course, index) {
//     return course.name;
// });
//
// function costHandler(course) {
//     return {
//       id: course.id,
//         name: `Class: ${course.name}`,
//         coin: course.coin + 1,
//         coinText: `Price: ${course.coin}`
//     };
// }
//
// // console.log(newCourses);
// console.log(course);
//
//
// //Reduce
// let i = 0;
// function sumHandler(accumulator, currentValue, currentIndex){
//     i++
//     let res =  accumulator + currentValue.coin;
//     console.table({
//         'i' : i,
//         'accumulator': accumulator,
//         'coin' : currentValue.coin,
//         'Total accumulate': res
//     });
//     return res;
// }
//
// //Storing variable
// //Storage
//
// let totalCoin = courses.reduce(sumHandler, 0);
//
//
// // let total = courses.reduce((a,b) => {
// //     return a + b.coin;
// // }, 0)
// //
// // console.log(total);
// // let j = 0;
// //
// // var total = courses.reduce((total, course) =>{
// //     j ++;
// //     console.log(j, total);
// //     return total + course.coin;
// // },0)
//
// //Flatten array
// let depthArray = [1,2,[3,4],5,6,[7,8,9]];
//
// let flatArray = depthArray.reduce((flat, depthItem)=> {
//     return flat.concat(depthItem);
// },[]);
// console.log((flatArray));
//
// let topics = [
//     {
//         topic:"Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },   {
//                 id: 2,
//                 title: "Javascript"
//             }
//         ]
//     },{
//         topic:"Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "Java"
//             },   {
//                 id: 2,
//                 title: "Go Lang"
//             }
//         ]
//     }
// ];
//
// let newArr =topics.reduce((courses, topic) =>{
//     return courses.concat(topic.courses);
// },[]);
//
// console.log(newArr);
// //Render to HTML
//
// let html = newArr.map((course) =>{
//     return`
//         <div>
//             <h2>${course.title}</h2>
//             <p>Id: ${course.id}</p>
//         </div>
//     `
// })
//
// const element = document.querySelector('body');
// element.innerHTML = html.join('');
//
//



//Callback func
// function myFunction(param) {
//     console.log(typeof param);
// }
//
// // Call bakc in javascript
// myFunction(123);
//
// function loggingTest(param) {
//     if(typeof param==='function') {
//         param('123');
//     }
// }
//
// function callBack(param) {
//     console.log(param);
// }
//
// loggingTest(callBack);
//
// var courses = [
//     'Java Script',
//     'PHP',
//     'Ruby'
// ];
//
// var htmls = courses.map((course)=>{
//     return`<h2>${course}</h2>`;
// });
//
// console.log(htmls.join(''));
//
//  Array.prototype.map2= function (callBack){
//      let arrlength = this.length;
//      let output = [];
//      for(let i = 0; i < arrlength; i++) {
//          output.push(callBack(this[i],i));    
//      }
//      return output;
//  }
//  let arr = courses.map2(function(course,index){
//      console.log(index);
//      return course;
//  });
//  console.log(arr);  
 
 //HTML Dom có 3 tp

// Element
// Attribute href ="" 
// Text
//Node : các tp của DOM đêù có thể là node

 // ---------------------------------------------------
// Javascript: Browser | Server(NodeJS)

// HTML -> DOM -> DOM API
// document.write('Hello World!');
//
// // 1. Element: ID, class, tag
// // CSS Selector : Query selector queryselectorAll(), HTML Collection
// // 2 Attribute
// // 3 Text
//
// // let headingNode = document.getElementById('heading');
// // console.log({
// //     element:headingNode
// // });
// //
//
// let headingNode = document.querySelector('.box-1 li');
// console.log()
//
// let boxNode = document.querySelector('.box-1');
// console.log(boxNode.querySelector('li'));
// boxNode.title='Heading';
// boxNode.setAttribute('class','heading');
// boxNode.title = 'Title test';
// // alert(headingElement.title);
// // 1. GetElementById //Truc tiep element
// // 2. GetElementsByClassName
// // 3. getElementsByTagName
// // 4.querySelector //Truc tiep element
//
// // 5.queryselectorAll
// // 6. HTML Collection
// // 7 document.write: Đặt ở đâu render ở đó
//
// //InnerText - textcontent;
// let headingElement = document.querySelector('.heading');
//  headingElement.innerText = 'New Heading';
//
//  console.log(headingElement.textContent);
//
// // 1.Them Element vo 1 element
//
// let boxElement = document.querySelector('.box');
// // boxElement.outerHTML = '<h1>This is a rendering text using javascript</h1>';
//
// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor : 'green'
// });
//
// // Class List property
//
// // add
// // contains
// // remove
// // toggle
//
// console.log(boxElement.classList)

//Dom Event
// const h1 = document.querySelectorAll('.heading');
//
// for(let i of h1) {
//     i.addEventListener('click',(e)=>{
//         console.log(i);
//     });
// }

//Input select
// document.addEventListener('keydown',(e)=>{
//     console.log(e.which)
// })

//Prevent default
//Stop propagation;
// let element = document.links;
// for(let ele of element) {
//     ele.addEventListener('click', (e)=>{
//         let link = e.target.href;
//         if(!link.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     });
// }

let ele = document.querySelector('div');
ele.addEventListener('click',(e)=>{
    console.log('DIV');
});
ele = document.querySelector('button');
ele.addEventListener('click',(e)=>{
    e.stopPropagation(); //Prevent noi bot
    console.log('Button');
})

// ele.addEventListener('mousedown', (e)=>{
//     e.preventDefault();
// });
//
// ele.addEventListener('click',(e)=>{
//     console.log(e.target);
// });

//1.Event Listener -or Dom Event ? /
//Lang nge/Huy bo lang nghe
let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    //Viec 1
    console.log("Viec1");
});

btn.addEventListener('click',()=>{
    //Viec 2
    console.log("Viec 2");
});

btn.addEventListener('click',viec1);
btn.addEventListener('click',viec2);
setTimeout(()=>{
    // Huy bo lang nghe
    btn.removeEventListener('click',viec1);
},3000);

function viec1() {
    console.log('1');
}

function viec2() {
    console.log('2');
}

//2.JSON



























