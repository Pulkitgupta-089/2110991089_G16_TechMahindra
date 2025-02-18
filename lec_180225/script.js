// Higher order function

// data = [2,4,6,8,10];

// function double(data)
// {
//     doubleDataArr=[];
//     for(let i=0;i<=data.length;i++)
//     {
//     doubleDataArr.push(data[i]*2);
//     }
// }

// console.log(doubleDataArr(data));

// const calculateDoubleData = function (data){
//     const output=[];
//     const put=[];
//     for(let i=0;i<data.length;i++)
//     {
//         output.push(data[i]*2);
//         put.push(data[i]/2);
//     }
//     return output;
   
// }

// const Half = function (data){
//     const output=[];
//     for(let i=0;i<data.length;i++)
//     {
//         output.push(data[i]/2);
//     }
//     return output;
// }


// const calculateAddTen = function (data){
//     const output=[];
//     for(let i=0;i<data.length;i++)
//     {
//         output.push(data[i]+10);
//     }
//     return output;
// }
// console.log(calculateDoubleData(data));
// console.log(Half(data));
// console.log(calculateAddTen(data));

function double(insideData)
{
    var ans=insideData*2;
    return ans;
}

function half(insideData)
{
    var ans=insideData/2;
    return ans;
}

function AddTen(insideData)
{
    var ans=insideData+10;
    return ans;
}

const calculateData = function (data,callback){
    console.log("We are inside CalculateData");
    var output=[];
    for(let i=0;i<data.length;i++)
    {
        output.push(callback(data[i]));
    }
    return output;
}

// console.log(calculateData(data,double));
// console.log(calculateData(data,half));
// console.log(calculateData(data,AddTen));

// Polyfill feature in js
// By using prototype

// Array.prototype.mapp = function(logic){
//     var output=[];
//     for(let i=0;i<this.length;i++)
//     {
//         output.push(logic(this[i]));
//     }
//     return output;
// }
// console.log(data.mapp(double));

// function diameter(inside){
//     var ans=inside*2;
//     return ans;
// }
// function circumference(inside){
//     var ans=2*3.14*inside;
//     return ans;
// }
// function Area(inside){
//     var ans=3.14*inside*inside;
//     return ans;
// }
// Array.prototype.mapp = function(calculate){
//     var output=[];
//     for(let i=0;i<this.length;i++)
//     {
//         output.push(calculate(this[i]));
//     }
//     return output;
// }
// console.log(data.mapp(diameter));
// console.log(data.mapp(circumference));
// console.log(data.mapp(Area));

// data = [1, 3, 6, 8, 7, 10];

// function filterOdd(data) {
//   var res = [];

//   for (let i = 0; i<data.length; i++) {
//     if (data[i] % 2 != 0) {
//       res.push(data[i]);
//     }
//   }
//   return res;
// }

// console.log(filterOdd(data));

const users=[
    { firstName:"Ram",lastname:"Ray",age:21},
    { firstName:"sahil",lastname:"Aggarwal",age:22},
    { firstName:"Ayush",lastname:"Gupta",age:23},
    { firstName:"rahul",lastname:"jindal",age:20},
    { firstName:"sam",lastname:"kite",age:24},
]


//combine first name and last name

const FullName = users.map((map)=>{users.firstName+" "+users.lastname});

//lets filter out age above 24, there full name:

console.log(FullName);