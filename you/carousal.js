// import {append_data} from './components/reuse.js'


function carousel() {
  let images = [
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3476/1363476-h-4b13ab355e0e',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1298/1351298-h-66706310312e',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218',
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e',
  ]

 let imgEl = document.createElement('img')
  imgEl.src =
    'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h'
  document.getElementById('carousel').append(imgEl)
  let i = 1
  let stop = setInterval(function () {
    if (i === images.length) {
      i = 0
    }
    imgEl.src = images[i]
    document.getElementById('carousel').append(imgEl)
    i++
  }, 2500)
}

carousel();


const movies=[
    {
        name:"Tanhaji",
        date: "2021/11/12",
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
        rating:"8.9"
    },
    {
        name:"Bajarangi Bhaijaan",
        date: "2020/11/12",
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1777/1000071777/1000071777-v",
        rating:"8.6"
    },
    {
        name:"Bhool Bhulayya",
        date: "2020/11/12",
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8105/1118105-v-cf275eb3c3f2",
        rating:"7.9"
    },
    {
        name:"M.S.Dhoni",
        date: "2020/11/12",
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
        rating:"8.5"
    },
    {
        name:"Housefull-4",
        date: "2020/11/12",
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v",
        rating:"8.3"
    },
    {
        name:"Baghi-3",
        date: "2020/11/12",
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
        rating:"6.9"
    },
    {
        name:"Baby",
        date: "2020/11/12",
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7416/957416-v",
        rating:"8.2"
    },
    {
        name:"Super-30",
        date: "2020/11/12",
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v",
        rating:"7.5"
    },
    {
        name:"Rocky",
        date: "2020/11/12",
        image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7391/1367391-v-84d5e12d4c3d",
        rating:"7.8"
    }
];
    

 
   
 

function appendMovie(el){
  let loader= document.getElementById("image_loading");
  loader.style.display="none";
    document.getElementById("movies").innerHTML=null;
    el.forEach(function(data){
        
    
    let div= document.createElement("div");

    let image= document.createElement("img");
    image.src= data.image;

    let name= document.createElement("h3");
    name.innerText=data.name;

    let date= document.createElement("p");
    
    date.innerText=data.date;
   

    let rating= document.createElement("p");
    rating.innerText=data.rating;
   
    div.append(image,name,date,rating);
    // let span=document.createElement("span");
    // span.innerText="Releasing date:"
    // date.append(span);
    document.getElementById("movies").append(div);
})
}

setTimeout(function(){
  appendMovie(movies);

},3000)

 document.getElementById("sort-hl").addEventListener("click",sort_1);

 function sort_1(el){

    let data= movies;
   data= data.sort((a,b)=>b.rating-a.rating);
     
     appendMovie(data);
   
 }

 document.getElementById("sort-lh").addEventListener("click",sort_2);

 function sort_2(el){

    let data= movies;
   data= data.sort((a,b)=>a.rating-b.rating);
     
     appendMovie(data);
   
 }
 

 let login= document.getElementById("navin");
 login.addEventListener("click", loginFun);
 let logDiv= document.getElementById("login");
 let signdiv= document.getElementById("signin");
 function loginFun (){
  // el.preventDefault();
 
  logDiv.style.display="block";
 }

 
 
  
 


 let acc= document.getElementById("not_acc");
 acc.addEventListener("click",function(){
  logDiv.style.display="none";
  signdiv.style.display="block";
 })

 let not_acc= document.getElementById("acc");
 not_acc.addEventListener("click",function(){
  logDiv.style.display="block";
  signdiv.style.display="none";
 })


    // go to search page 

   function goTo(){
      window.location.href="search.html"
    }


                    //  log in and sign in functionalities 
                    

    let signData= document.getElementById("form2");

    signData.addEventListener("submit", myfun);

       let dataArr=JSON.parse(localStorage.getItem("data"))||[];
    
     
    function myfun(event){
      event.preventDefault()
      let nameS=document.getElementById("nameS").value;
      let emailS= document.getElementById("emailS").value;
      let phoneS= document.getElementById("phoneS").value;
      let passwordS= document.getElementById("passwordS").value;
      let confirmS= document.getElementById("confirm").value;


      if(passwordS!=confirmS){
        alert("Password Not Matched!!")
      }else{
  
     
      
      if(emailS==""||phoneS==""||passwordS==""||confirmS==""){
        alert("fill all information");
      }
  logDiv.style.display="block";
  document.querySelector("#login>p").innerHTML="";
  signdiv.style.display="none";
 
  addData(nameS,emailS,phoneS,passwordS,confirmS);

    document.getElementById("nameS").value="";
    document.getElementById("emailS").value="";
    document.getElementById("phoneS").value="";
     document.getElementById("passwordS").value="";
    document.getElementById("confirm").value="";
      }
  }

    function addData(nameS,emailS,phoneS,passwordS,confirmS) {
      let obj={
        name:nameS,
       email: emailS,
       phone:phoneS,
       password:passwordS,
       confirm:confirmS
      }
      dataArr.push(obj);
    localStorage.setItem("data",JSON.stringify(dataArr));
   }


   let localData= JSON.parse(localStorage.getItem("data"));


    // loging in 
    let index=[];

   let loginData= document.getElementById("butin");

   loginData.addEventListener("click", myloginfun);

    
   
    
   function myloginfun(event){
     event.preventDefault()
     let email= document.getElementById("email").value;
     
     let password= document.getElementById("password").value;
     
    localData.forEach(function(el,i){
      index.push(i);
      localStorage.setItem("index",i);
      if(el.email==email&&el.password==password){
         window.location.href="login.html"
        
      }else{
        alert("Account not found!")
      }
    })
        
   }


      //  new login page 

  
    