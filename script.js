
const promise = new Promise(promiseFunction)

function promiseFunction(resolve, reject) {
    if(false){
      resolve("success");
    } else {
      reject("failure");
    }
}
//console.log(promise);

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))


// benzetmek adına fonksiyonlara benzetebiliriz.
function namer() {
  if(true){
    return "success";
  } else {
    return "failure";
  }
}

const doSomething = new Promise((resolve, reject)=>{
  const lessons = ["HTML", "CSS", "JS"]
  const find = lessons.find(item=>item==="JS")

  if(find==="JS"){
    resolve("i love JS");
  }else {
    reject("i dont know JS yet");
  }
})

doSomething.then(result => console.log(result)).catch(error=>console.log("error"))
doSomething.catch(error=>console.log("error"))


const doSomething2 = new Promise((resolve, reject)=>{
  const lessons = ["HTML", "CSS", "JSS"]
  const finded = lessons.filter(element=>element==="JS")

  if(finded.length > 0){
    resolve(finded);
  }else {
    reject("i dont know JS yet");
  }
})

//console.log(doSomething2)
doSomething2.then(result => console.log(result)).catch(error=>console.log(error))

import {staff} from "../JS-117/staff.js";
const staffJSON = JSON.parse(staff)
//console.log(staffJSON.staff)

const filterStaff = new Promise((resolve, reject)=>{
   const firstNames = staffJSON.staff.map(item=>item.name.firstName)
    if(firstNames.length>0 && firstNames.includes("Geneva")){
        resolve(firstNames)
    }else {
      reject("no Geneva")
    }
 })

 filterStaff
  .then(res=>{
    console.log(res)
    const ulItem = document.createElement("ul");
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      const listItem = document.createElement("li");
      listItem.innerHTML = element;
      ulItem.appendChild(listItem);
    }
    document.body.appendChild(ulItem)
  })
  .catch(err=>console.log(err));


  // generator function

  const promiseFunctionOne = () => {
    return new Promise((resolve,reject)=>{
      resolve("success");
      reject("fail");
    })
  }

  //const promiseOne = promiseFunctionOne();

 
  const promiseFunctionTwo = (elma) => new Promise((resolve, reject) => {
    if(elma === "elma"){
      resolve("bu bir elmadır");
    } else {
      reject("armut");
    } 
  })
  //const promiseTwo = promiseFunctionTwo("elma");
  console.log(promiseFunctionTwo("elma"))  // bu bir promise üretir
  promiseFunctionTwo("elma")
    .then(istedigimizbirdeger => console.log(istedigimizbirdeger))
    .catch(ggg=>console.log(ggg))


  function abc(a) {
    return new Promise((resolve, reject) => {
      resolve(a);
    })
  }

  abc(3).then(res=>console.log(res*2));  // promise fonksiyonu

  //namer().then(res=>console.log(res)); // promise olmayan düz bir fonksiyona then işlemez


  //normal fonksiyonu promise e dönüştüren başka bir yol async
  const calculate = async (param) => {
    return param*2
  }

  console.log(calculate(5));// promise
  calculate(7)
  .then(res => console.log(res))
  .catch(err=>console.log(err))

  // normal fonksiyonda returnu kullanırsın ama data boş gelirse undefined alırsın.
  const calculate2 = (param) => {
    return param*2
  }
const result = calculate2();
console.log(result);


  // async function name(params) {
    
  // }
