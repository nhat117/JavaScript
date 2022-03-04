// //1. Let, const
// // Var:  Allow full scope in code block / Let, const local to code block: Scope
// //      : Hosting support     / Hosting non support
// //Const/ Var, Let: Assignment
//
// //Code block: if,else, loop,{},...
//
// //** Const Could  re assign the property of the object
// //Const  cannot be reassign
//
// //Pure js :vr
// //Using babel: const, let
// //Don't need mutation : const
// //Need mutation: let
// const a = {
//     name: 'javascript'
// }
//
// a.name = 'PHP';
// console.log(a.name);
//
// //Arrow function
//
// function logger(log) {
//     console.log(log);
// }
//
// logger('Message');
//
// //Expressive function
// const sum = (a,b)=>a + b;
//
// console.log(sum(2,2))
//
// //Return right a way an object
// const object = (a,b)=>(
//     {
//         a: a,
//         b: b
//     }
// )
//
// const msgDisp = (log)=> console.log(log);
//
// msgDisp('Yo')
//
// //Arrow function does not have context this
// const course = {
//     name: 'JavaScript basic',
//     getName: () =>{
//         return this;//Context
//     }
// }
//
// console.log(course.getName());
//
// //Cannot use arrow function as a constructor function
// const Course = function(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// const jsCourse =new Course('JS',4000);
// console.log(jsCourse);
//
// //Template literal, multiline string
// const courseName = 'JS';
// let description = 'Course Name: '+ courseName;
//
// console.log(description);
//
// //Template literal
// description = `Course name ${courseName}`;
// console.log(description);
// //Multiline string
// const lines = `Line1
// Line2
// Line3`
// console.log(lines);
//
// //Object
// class Lesson{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
//
//     getName(){
//         return this.name;
//     }
//
//     getPrice(){
//         return this.price;
//     }
// }
//
// const phpCourse = new Lesson('PHP',3000);
//
// const javaCourse = new Lesson('Java', 4000);
//
// console.log(phpCourse);
// console.log(javaCourse);
//
// //Enhance object literal dung neu bien va key trung nhau
//
// // 1.Key, value definition
//
// var name = 'Javascript';
// var price = 3000;
// var course2 = {
//     name,
//     price
// }
// console.log(course2);
//
// // 2.Method definition
// var course2 = {
//     name,
//     price,
//     getName() {
//         return name;
//     }
// }
//
// console.log(course2.getName());
// //3. Object key in variable form
//
// var fieldName = 'name';
// var fieldPrice ='price';
//
// const course3 ={
//     [fieldName]: 'JS',
//     [fieldPrice]: 1000
// }
// console.log(course3);
//
// //Default Parameter value
// //ES5
// function logging(data){
//     if(typeof data=== 'undefined'){
//         data='Default param';
//     }
//     console.log(data);
// }
//
// logging();
// //ES6
// function logging(data, type ='log') {
//     console[type](data);
// }
//
// logging('Yo','error');
//
// //Destructuing: use with object and array ... rest use in conjunction wihth destructuring, reset parameter
// var array = ['Js','php','ruby'];
//
// var [c,...rest] = array;
//
// var course5= {
//     name:'JavaScript',
//     price: 1000,
//     image: 'url',
//     desc: 'value',
//     children: {
//         name: 'React'
//     }
// };
//
// //Have to input the right key
// var{name: parent, children:{name}, desc = 'default description'} = course5;
//
// console.log(name, parent, desc);
// // console.log(c, rest);
// //Array
//
// //Rest param -- use with destructuring or int the function like this
// function logger(...param) {
//     //When useing rest parameter always receive an array.
//     param.forEach((e)=>{
//         console.log(e);
//     });
// }
//
// logger(1,2,3,4,5);
//
//
// function logger({name, price,...rest}) {
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }
//
// logger({
//     name: 'js',
//     price: 1000,
//     description: 'Description Content',
//     scrape: 'abc'
// });
//
// //Spread
// // to replace concat
// var array = ['Js','php','PHP'];
// var array2 = ['React','Dart'];
//
// var array3 = [...array2,...array];
// console.log(array3);
//
// var Object1 ={
//     name: 'JS'
// }
//
// var Object2 = {
//     price: 10000
// }
//
// var Object3 = {
//     ...Object1,
//     ...Object2
// }
//
// console.log(Object3);
// //API and stuff
//
// var defaultConfig = {
//     api:'url',
//     ver: '1',
//     other: 'other config'
// }
//
// var exConfig = {
//     ...defaultConfig,
//     api: 'new url'
// }
// console.log(exConfig);
//
// function  logger(...rest) {
//     rest.forEach((data)=>{
//         console.log(data);
//     });
// }
//
//
// //Define parameter: rest
// //In the parameter ... spread
// logger(...array);
//
// //Tagged template literal **Important
// function highlight([initial,...string],...rest) {
//     console.log(initial);
//     console.log(string);
//     return rest.reduce((acc, curr)=>[...acc,`<span>${curr}</span>`,string.shift()],[initial]).join('');
// }
//
// var brand = 'F8';
// var course6 = 'JavaScript'
// const html = highlight`Hoc lap trinh ${course6} tai ${brand}!`;
// console.log(html)

//Modules
// import logger5, {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from'./logger.js';
// logger5('Test msg', TYPE_WARN);


//Optional Chainning

// const sample = {
//     name:'Alice',
//     cat:{
//         name:'Dinah2',
//         cat2:{
//             name:'Dinah3',
//             cat3:{
//                 name: 'Dinah4'
//             }
//         }
//     }
// }

//Using optional Chainning to deal with this shit

// if(sample?.cat?.cat2?.cat3) {
//     console.log(sample.cat.cat2.cat3.name);
// }

//API(URL)- Application Programming Interface: Cong giao tiep giua cac phan mem

//Backend ->API -> Fetch -> JSON

//JSON -> parse -> render HTML view

let postAPI = 'http://localhost:3000 '

//Fetch return a promise

//Return data stream
// fetch(postAPI).then((response) => {
//     //json.parse -> Javascuot
//     //Built in json parser
//     return response.json();
// }).then((data) => {
//     let htmls = data.map((post) => {
//         return `<div> 
//                     <h2>${post.title}</h2>
//                     <p>${post.body}</p>
//                 </div>`;
//     });
//     let html = htmls.join('');
//     let doc = document.querySelector('.content');
//     doc.innerHTML = html;
// }).catch((error) => {
//     alert(error);
// });

//JSON Server: Fake api server




