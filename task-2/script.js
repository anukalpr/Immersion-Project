const btn=document.querySelector(".btn");
const searchInput=document.querySelector(".search");
const card=document.querySelector(".main-card");
btn.addEventListener("click",async()=>{
    const query=searchInput.value.trim();
    if(query){
      try{
        const res=await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const data= await res.json();
        console.log(data);
        const resultsDiv = document.createElement("div"); 
        resultsDiv.classList.add("result-div");
        data.products.forEach(product => {
            const items=document.createElement("div");
            const h3=document.createElement("h3");
            h3.innerText=product.title;
            items.appendChild(h3);
            resultsDiv.appendChild(items)

            if (product.images.length > 0) {
              const img = document.createElement("img");
              img.classList.add("img");
              img.setAttribute('src', product.images[0]); 
              resultsDiv.appendChild(img);
          }

        });
        card.appendChild(resultsDiv);
      }
      catch(err){
        console.log(err);
      }
    }

})