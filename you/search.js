


//api url= http://www.omdbapi.com/?apikey=1e7ac66c&s=avengers


async function searchMovie() {

//     let movie_name = document.getElementById('movieName').value;
   
//     // standardisation

//    let response = fetch("http://www.omdbapi.com/?apikey=b1f9ad01&s=${movie_name}");
//    response
//  .then(function(success){
// //   success.json().then(function(res){
// //     console.log(res);
// //   })
//      let data= success.json();
//     //  console.log("data",data)
//     data
//     .then(function(success){
//         console.log("success",success)
//     })
//     .catch(function(error){
//         console.log("error",error);
//     })
//  })
//  .catch(function(error){
//     console.log(error);
//  })

let picture= document.querySelector(".movie_info");
console.log(picture);
//         picture.forEach(function(el,i){
//             el.addEventListener("click",function(){
//                 info(el,i);
//             });
//         })

//         function info (el,i){
// // console.log(el,i);
//         }




let movieName = document.getElementById('movieName').value;
   console.log(movieName)

    let loader= document.getElementById("loader");
    loader.style.display="block";

    // standardisation

try{

   let response = await fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${movieName}`);
   

   let data = await response.json();
   console.log(data);
   console.log(data.Search);
    appendMovies(data.Search);

    
   
}
catch (err){
    console.log("err",err);
    
}


}


 


function appendMovies(data){
    let loader= document.getElementById("loader");
loader.style.display="none";
    
    document.getElementById("movie").innerHTML=null;
    data.forEach(el => {
        


     let div= document.createElement("div");
    

     let image= document.createElement("img");
     image.src=el.Poster;

     let name= document.createElement("h3");
     name.innerText=el.Title;

     let date= document.createElement("p");
     date.innerText=el.Year;

     div.append(image,name,date);

     document.getElementById("movie").append(div);

    });
    // document.getElementById('movieName').value="";
}



        //    debouncing
let id;

        function debounce (func,delay){

       if(id){
        clearTimeout(id);
       }
      
       id= setTimeout(function(){
        func();
       },delay)

        }

