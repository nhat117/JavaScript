//IIFE - Immidiate involk function expression
// let fullName ='Tommy';

//Dung ; truoc IIFE
// IIFE la private

// let i = 1;
// ;(function myFunc(msg){
//     console.log(i);
//     if(i > 10) return;
//     myFunc(i ++)
// })(i);
//
//IIFE Example
//Use to encapsulate data, imiddatelu invole
// let app =(function (car){
//     const cars=[];
//     return {
//         get(index){
//             return cars[index];
//         },
//         add(car){
//             cars.push(car);
//         }, edit(index,car){
//             cars[index]= car;
//         }, delete(index){
//             cars.splice(index, 1);
//         }
//     }
// })();

// app.add('BMW');
//
// app.add('Merc');
//
// app.add('Tex');
//  app.cars = null;
//  app.add('Yo');


// Can't not access outside of iife'
// myFunc(fullName)

//IIFE for running instantanousl
//Using IIFE TO CREATE LOCAL ZONE, AVOIDING AFFECTING GLOBAL SCOPE VARIABLE

//Scope

//Global, khai bao o ben ngoai

// {
//     This is a code block
// }

// function  logger() {
//     const msg = "Thuoc code block"
// }

//Tao ra 1 pham vi moi pvi gglobal, trong moi ham co 4 logger
// logger();
// console.log(fullName);

//Closure inside the scope of the scope closure
//Closure usage
//Reduce the code length


function creatCounter() {
    let counter = 0;

    function increase() {
        return counter++;
    }

    return increase;
}

//A typical closure in action, encapsulate to a local scope
//Environment
const counter1 = creatCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

//New environment

//Will ingest a new counter
const counter2 = creatCounter();

console.log(counter2());
console.log(counter2());
console.log(counter2());

//Actual implementation of closure

function createLogger(nameSpace) {
    function logger(msg) {
        console.log(`[${nameSpace}] ${msg}`);
    }

    return logger;
}

// -------------Application------------
const infoLogger = createLogger('Info');

infoLogger('Start sending email');
infoLogger('Sending respones .....')
infoLogger('Transaction success!!!');

const errorLogger = createLogger('Error');

errorLogger('Cannot find a valid email addres');
errorLogger('Attempt fail!!!');

//-----Store data in a local storage

function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {};
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }
    
    //Export a function
    return storage;
}

//Profile js
//Ingest the input into a varaible
const profileSetting = createStorage('profile_setting'); 
profileSetting.set('name', 'Nhat Bui');
profileSetting.set('age', '14');
profileSetting.set('email', 'nhat117@gmail.com');
console.log(profileSetting.get('name'));

const profileSetting2 = createStorage('user_setting');
profileSetting2.set('name', 'Nhat Bui');
profileSetting2.set('age', '14');
profileSetting2.set('email', 'nhat117@gmail.com');
console.log(profileSetting2.get('name'));

//OOP implementation
//Cannot update the output

function creatCar() {
    const cars = [];
    
    //If no return available cars will be deleted
    //Khong duoc xoa khoi bo nho
    return {
        add(car) {
            cars.push(car);
        },
        show() {
            console.log(cars);
        }
    }
}

const app = creatCar();
app.add('Mercedes');
app.show();








