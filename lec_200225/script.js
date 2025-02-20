// Promise api realworld scenarios

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("Fetch data successfully from netflix");
  }, 1000);
});

const myPromise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("Fetch data successfully from twitter");
  }, 5000);
});
const myPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("Fetch data successfully from github");
  }, 3000);
});
const myPromise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("Fetch data successfully from hotstar");
  }, 4000);
});

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

const datafromany=Promise.any([myPromise,myPromise1,myPromise2,myPromise3]);
console.log(datafromany)
