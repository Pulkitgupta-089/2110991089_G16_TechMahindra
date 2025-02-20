// Promise api realworld scenarios

// const myPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("Fetch data successfully from netflix");
//   }, 1000);
// });

// const myPromise1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("Fetch data successfully from twitter");
//   }, 5000);
// });
// const myPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("Fetch data successfully from github");
//   }, 3000);
// });
// const myPromise3 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("Fetch data successfully from hotstar");
//   }, 4000);
// });

//Promise.all

// const data=Promise.all([myPromise,myPromise1,myPromise2,myPromise3]);
// console.log(data);

// const datafromallsettled = Promise.allSettled([
//   myPromise,
//   myPromise1,
//   myPromise2,
//   myPromise3,
// ]);
// console.log(datafromallsettled);

// const datafromrace=Promise.race([myPromise,myPromise1,myPromise2,myPromise3]);
// console.log(datafromrace)

// const datafromany=Promise.any([myPromise,myPromise1,myPromise2,myPromise3]);
// console.log(datafromany)

// async is a feature to make any function asynchronous

// const samarPromised=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("I will be on time")
//     },4000)
// })

// console.log("hello class");
//  function techMahindra(){
//     console.log("samar");
// }
// techMahindra();
// console.log("class end")

// ! async is also a promise it works like a promise

// async function techdirectFunction(){
//     console.log("this is hello tech mahindra")
// }

// const techData=techdirectFunction();
//console.log(techData);
// techData.then((res)=>{
//     return res;
// })

// console.log("class start");

// const projectSubmission=new Promise(function(res,rej){
//     setTimeout(()=>{
//         res("Submitted Project Successfully")
//     },5000)
// })
// console.log("class lunch")

// async function projectEvaluation(){
//     console.log("Attendance viva")
//     const projectFile= await projectSubmission;
//     console.log(projectFile);
//     console.log("project file check")
// }
// projectEvaluation();
// console.log("class end")

// console.log("class start");

// const promise1 = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res("kuber writing");
//   }, 10000);
// });
// console.log("attendance marking");

// async function fileEvaluation() {
//   const fileEval = await promise1;
//   console.log(fileEval);

//   console.log("class end");
// }

// fileEvaluation();

// async function fetchApi(){
//     const data=await fetch("https://api.chucknorris.io/jokes/categories");
//     const mydata=await data.json();
//     return mydata;

// }
// const finaldata=fetchApi();
// finaldata.then((res)=>{
//     console.log(res)
// })

