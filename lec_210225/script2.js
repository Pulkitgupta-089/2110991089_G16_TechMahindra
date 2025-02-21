async function fetchuserData(){
    const data=await fetch("https://api.chucknorris.io/jokes/categories");
    const mydata=await data.json();
    displaydata(mydata);
}

function displaydata(data){
    const mydata=data;
    const inputvalue=document.getElementById("searchbox");
    mydata.filter(()=>{
        if(inputvalue.target.value===mydata){
            console.log(mydata)

        }
    })
}

document.getElementById("searchbox").addEventListener("input",(e)=>{
    if(e.target.value!=""){
        setTimeout(fetchuserData,1000);
    }

})