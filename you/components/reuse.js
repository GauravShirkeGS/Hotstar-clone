

let append_data = function(el){
    return `
    
    let loader= document.getElementById("loader");
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
      `
}



export {append_data}