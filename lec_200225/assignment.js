async function fetchuserData() {
  let username = document.getElementById("username").value;
  

  const githubdata=await fetch(`https://api.github.com/users/${username}`);

  const mydata=await githubdata.json();

  userdataDisplay(mydata);
 
}

function userdataDisplay(mydata){
    const mydata1=mydata;
    const userimg=document.getElementById("user-img");
    userimg.src=mydata1.avatar_url;
  
    const username1=document.getElementById('fetch-user');
  
   username1.innerHTML=mydata1.name;
  
   const userbio=document.getElementsByClassName("bio");
   userbio[0].innerHTML=mydata1.bio;
  
   const userfollower=document.getElementsByClassName("followers");
   
   userfollower[0].innerHTML=mydata1.followers;
  
   const userRepos=document.getElementsByClassName("repo");
   userRepos[0].innerHTML=mydata1.public_repos;
}
