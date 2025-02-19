// reduce

//sum of array  

const arr=[5,7,3,1,8];

// var sumOfArr=0;

// for(let i=0;i<arr.length;i++)
// {
//     sumOfArr+=arr[i];
// }

// console.log(sumOfArr);

// arr.reduce(function(acc,curr){

// },0);

// const users = [
//     {firstname:"Sahil", lastname:"Aggarwal",age:22},
//     {firstname:"Ayush", lastname:"Gupta",age:23},
//     {firstname:"Pulu", lastname:"Gupta",age:22},
//     {firstname:"aggu", lastname:"ji",age:21},
// ];

// const ans = users.reduce(function(acc,curr){

// },{})


//max number in array

// arr = [2, 4, 7, 19, 35, 1, 8];
// var maxNum = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (maxNum < arr[i]) {
//     maxNum = arr[i];
//   }
// }

// console.log(maxNum);

// //reduce - max number in array

// const ans = arr.reduce(function (acc, curr) {
//   if (curr > acc) {
//     acc = curr;
//   }

//   return acc;
// });

// console.log(ans);

// reachedRestaurant(function (){
//     console.log("i reached eagle motel")
// })
// .then(TableFinding)
// .then(MenuDiscover)
// .then(PriceCheck)
// .then(startOrder)
// .then(MainCourse)

// createOrder(cart,callback){
//     console.log("ORDER CREATION")
//     orderPayment(orderId,callback){
//         console.log("order payment")
//         orderSummary(orderId,callback){
//             console.log("order summary")
//             updateWallet(){
//                 console.log("wallet updated")
//             }
//         }
//     }
// }


const cart = [];


function createOrder(cart){
   const myPromise = new Promise(function(resolve,reject){
    if(cart.length>0){
        console.log("order created successfully")
        resolve("12345")
    }
    else{
        const err= new Error("order failed")
        reject(err.message);
    }
   });
   return myPromise
}
function orderPayment(orderId) {
    console.log("Order Payment successful", orderId);
  }
  
  function orderSummary(orderId) {
    console.log("Order summary created", orderId);
  }
  
  function updateWallet() {
    console.log("Wallet update");
  }
// console.log(createOrder(cart));

// createOrder(cart)
// .then(function orderPayment(orderId){
//     console.log("order payment successful",orderId)
// })
// createOrder(cart);
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet)

createOrder(cart)
    .then(function(orderId){
        return orderPayment(orderId)
    })
    .then(function(orderId){
        return orderSummary(orderId)
    })
    .then(function(){
        return updateWallet()
    })
.catch( function (err){
    console.log("error occured")
    console.log(err.message)
})