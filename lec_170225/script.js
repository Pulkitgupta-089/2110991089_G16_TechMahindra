// function a() {
//   var count = 0;

//   document.getElementById("btn").addEventListener("click", function () {
//     count++;
//     console.log("clicked");
//   });
// }

// function b() {
//   var count = 0;

//   document.getElementById("btn-1").addEventListener("click", function () {
//     count++;
//     console.log("clicked");
//   });
// }
// a();
// b();

// document.getElementById("btn-2").addEventListener('click',function(){
//     console.log("Clicked");
// })
// document.getElementById("btn-3").addEventListener('click',function(){
//     console.log("Clicked");
//  })
// document.getElementById("btn").addEventListener('click',function(){
//     console.log("Clicked");
// })

// call stack comes under web browser api and there are some other web api like settimeout , setinterval, bluetooth,geolocation, url-path,camera, microphone, local storage, cookies, sessions etc and all this comes under JRE javascript runtime environment


function reachedrestaurant(callback){
    console.log("reached restaurant")
    setTimeout(callback,1000)
}

function tablefinding(callback){
    console.log("table found");
    setTimeout(callback,2000)

    

}

function menudiscover(callback){
    console.log("menudiscover")
    setTimeout(callback,3000)
}

function pricecheck(callback){
    console.log("price checked");
    setTimeout(callback,4000)
}

function starterorder(callback){
    console.log("starter ordered")
    setTimeout(callback,5000)
}

function maincourseorfer(callback){
    console.log("main course order")
    setTimeout(callback,6000)
}

function dessert(callback){
    console.log("derssert ordered")
    setTimeout(callback,7000)
}

function payBill(callback){
    console.log("paid bill")
    setTimeout(callback,8000)
}

function sauf(){
    console.log("sauf eating")
   
}

//reachedrestaurant(tablefinding(menudiscover(pricecheck(starterorder(maincourseorfer(dessert(payBill(sauf()))))))))  //this will run properly but in this scenario there might be a chance of some errors  this is not right syntax


// the right syntax is 

reachedrestaurant(() => {
    tablefinding(() => {
      menudiscover(() => {
        pricecheck(() => {
          starterorder(() => {
           maincourseorfer(() => {
             dessert(() => {
                payBill(()=>{
                    sauf();
                }); //this is good practice (pyramid of doom)
              });
            });
          });
        });
      });
    });
  });