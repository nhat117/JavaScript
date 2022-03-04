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


// let array = [1,2,3,4,5];
// let initial = 10;
//
// Array.prototype.myReduce = function (callBack,res){
//     let i = 0;
//     //Incase only 1 argument
//     if(arguments.length < 2){
//         res = this[0];
//         i = 1;
//     }
//     for( i ; i < this.length; i++) {
//         res = callBack(res,this[i],i,this);
//     }
//     return res;
// }
//
// let res = array.myReduce((total, num) =>{
//     return total + num;
// },10);
// console.log(typeof (res));
// console.log(res);
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
//
// let ele = document.querySelector('div');
// ele.addEventListener('click',(e)=>{
//     console.log('DIV');
// });
// ele = document.querySelector('button');
// ele.addEventListener('click',(e)=>{
//     e.stopPropagation(); //Prevent noi bot
//     console.log('Button');
// // })
//
// // ele.addEventListener('mousedown', (e)=>{
// //     e.preventDefault();
// // });
// //
// // ele.addEventListener('click',(e)=>{
// //     console.log(e.target);
// // });
//
// //1.Event Listener -or Dom Event ? /
// //Lang nge/Huy bo lang nghe
// let btn = document.querySelector('button');
// btn.addEventListener('click',()=>{
//     //Viec 1
//     console.log("Viec1");
// });
//
// btn.addEventListener('click',()=>{
//     //Viec 2
//     console.log("Viec 2");
// });
//
// btn.addEventListener('click',viec1);
// btn.addEventListener('click',viec2);
// setTimeout(()=>{
//     // Huy bo lang nghe
//     btn.removeEventListener('click',viec1);
// },3000);
//
// function viec1() {
//     console.log('1');
// }
//
// function viec2() {
//     console.log('2');
// }

//2.JSON: Là một định dang dữ liệu: Chuỗi
//JavaScript Object Notation
//JSON: Number, Boolean, Null, Array, Object

//Encode - Decode
//Stringify /Parse JavaScript Type -> JSON
//Parse: json -> JavaScript Type

// let jsonObject = '{"name":"Nhat Bui","age": 23}' ;
// let jsonArray = '["name","tommy"]';
// console.log(typeof (JSON.parse(jsonObject)));
// console.log(JSON.parse(jsonObject));
//
//
// console.log(typeof (JSON.parse(jsonArray)));
// console.log(JSON.parse(jsonArray));
//
// //Stringify
//
// console.log(typeof (JSON.stringify(
//     ['JavaScript','PHP']
// )));
//
// console.log(typeof (JSON.stringify(
//     {name: 'Nhat Bui','age': 23}
// )));


//Promise
//Sync: Chay theo tuan tu

//Sleep -> console.log(2) : Async
// setTimeout(()=>{
//     console.log(1);
// }, 1000);
// console.log(2);

//ASync:
//SetTimeout, setInterval, fetch, XMLHTTPRequest, file reading
//Request Animation

//Call Back: Xu ly thao tac bat dong back

//Noi Dau :

//CallBack Hell
//Pyramid of doom
// setTimeout(() =>{
//     let i = 1;
//     console.log(i);
//     setTimeout(()=>{
//         i ++;
//         console.log(i);
//         setTimeout(()=>{
//             i++;
//             console.log(i);
//         },1000);
//     },1000);
// },1000);

//Promise How to write a Promise - use when in hell - when dealing wihth async task
//1.New Promise
//2.Exevutor

//2 state
// 1.Pendding
//2.Fulfilled promise.resolve -.then
//3.reject()  promise .reject -. catch
// let promise = new Promise(
//     //Executor need 2 variable as a function
//     (resolve, reject) => {
//         //Logic
//         //Thanh Cong -> resolve
//         //That bai -> reject
//         // resolve([{
//         //     id: 1,
//         //     name: 'JavaScript'
//         // }]);
//         // reject('Error 404');
//         resolve();
//     }
// );

// Chainning
//Recive data from previous then
//If the first then is not return promise, next the will receive the return data
//Else it will execute inside the promise and return the promise
// promise.then(()=>{
//     console.log(1);
//     return 1;
// }).then((i)=>{
//      i ++;
//     console.log(i);
//     return i;
// }).then((i)=>{
//      i++;
//      console.log(i);
//      return i;
// }).then((i)=>{
//     i ++;
//     console.log(i)
//     console.log('Done');
// })
//     .catch((error)=>{
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log('Finally')
//     })

// promise.then(()=>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve([1,2,3])
//         },3000)
//     })
// }).then((data) =>{
//     //Recieve [1,2,3] array return from the above mention data;
//     console.log(data);
// }).catch(()=>{
//     console.log('error');
// }).finally(()=>{
//     console.log('Done');
// })
//
// function sleep(ms) {
//     return new Promise((resolve)=>{
//         setTimeout(resolve,ms);
//     });
// }
//
// sleep(1000).then(
//     ()=>{
//         console.log(1);
//         return sleep(1000);
//     }
// ).then(
//     ()=>{
//         console.log(2);
//         return new Promise((resolve, reject) =>{
//             // reject('Error !!');
//         })
//     }
// ).then(
//     ()=>{
//         console.log(3);
//         return sleep(1000);
//     }
// ).then(
//     ()=>{
//         console.log(4);
//         return sleep(1000);
//     }
// ).catch((err)=>{
//     console.log(err);
// })

//promise.reject
//promise.all
//Return a new Promise
// let promise2 = Promise.resolve('Okay');

//Library output always a promise

// let promise2 = Promise.reject('Error');
//
// promise2.then((res)=>{
//     console.log('result', res);
// }).catch((err)=>{
//     console.log('error', err);
// })

//promise.all run parallel of 2 promise

let promise1 = new Promise(
    (resolve)=>{
        setTimeout(()=>{
            resolve([1]);
        },2000);
    }
)


// let promise2 = new Promise(
//     (reject)=>{
//         // setTimeout(()=>{
//         //     // resolve([2,3]);
//         //
//         // },5000);
//         reject('error');
//     }
// )

let promise2 = Promise.reject('error');

Promise.all([promise1, promise2]).then((res)=>{
    let result = res[0].concat(res[1]);
    console.log(result);
}).catch((err)=>{
    console.log(err);
})




















