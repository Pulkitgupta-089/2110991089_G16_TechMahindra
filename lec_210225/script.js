// ? call(),apply,bind


let studentSahil={
    firstname:"Sahil",
    lastname:"Aggarwal",

    getName: function(){
        console.log(this.firstname+" "+this.lastname);
    },

    // getResult: function(){
    //     console.log("passed")
    // }

}

let studentJasjot={
    firstname:"Jasjot",
    lastname:"Singh",

    getName: function(){
        console.log(this.firstname+" "+this.lastname);
    },

    // getResult: function(){
    //     console.log("passed")
    // }

}

let getName=function(classStudent){
    console.log(this.firstname+" "+this.lastname+" from class "+classStudent)
}


//call

getName.call(studentSahil);
getName.call(studentJasjot);

const getStudent1=getName.call(studentSahil,"G16,G17");


// call mein humare paas agar 50 object hain toh agar hume sabka naam print karwana hai toh hume saare mein ek function bananan padega which is very hectic and time consuming
// but agar hum ek global function banadenge toh call se hum usme wo object ka naam daal ke usse directly invoke karwasakte hain
//call and apply page chalte hi run ho jaate hain but bind mein hume invoke karna padta hai

const getStudent2=getName.apply(studentSahil,["G16,G15,G17"]);

const getStudentBind=getName.bind(studentSahil,"G16");
console.log(getStudentBind())


document.getElementById("grand-parent").addEventListener("click",(e)=>{
    console.log("this is grand-parent");
    e.stopPropagation();

})

document.getElementById("parent").addEventListener("click",(e)=>{
    console.log("this is parent")
    e.stopPropagation()
})
document.getElementById("child").addEventListener("click",(e)=>{
    console.log("this is child")
    e.stopPropagation()
})