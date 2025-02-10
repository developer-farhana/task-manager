//NAVBAR
const menu=document.querySelector(".menu");
 const menuToggle=document.querySelector(".menu-toggle");
 const something=document.querySelector(".something");
 const searchInput=document.querySelector('.search-input')


  menuToggle.addEventListener("click", function(){
      menu.classList.toggle("active");

      if(menu.classList.contains('active')){
       menu.style.display="block";
      }

      else {
        menu.style.display = "none";
      }

})

something.addEventListener("click",function(){
  information.classList.add("active");

  if(information.classList.contains('active')){
    information.style.display="block";
  }
})


 
let news=[];
function displayNews(allNews){
    const newsApi=document.querySelector('.news');
    newsApi.innerHTML="";

    allNews.forEach(function(user){
      
        const singleNews=document.createElement("div");

        singleNews.innerHTML=`
              <div class="h-[290px] w-auto mx-auto p-5  shadow-2xl text-black mb-5 ">
              <img class="block mx-auto w-[60%] h-[150px] mb-2" src= "${user.image}" >
              <h2 class="font-bold text-sm mb-2">${user.title} </h2>
              <p>$ ${user.price}</p>
              </div>
        `;
        newsApi.appendChild(singleNews);

    });
}

fetch("https://fakestoreapi.com/products")
.then(function(response){
return response.json();
})

.then(function(data){
    news=data;
  return  displayNews(data);

})

        .catch(function(error) {
            console.error("Error fetching data:", error); 
    })




   searchInput.addEventListener('input',()=>{

    const inputText=searchInput.value.toLowerCase();
    const filterProduct= news.filter((input)=>{
      // console.log(input);
      
     return  input.title.toLowerCase().includes(inputText)
    })

    displayNews(filterProduct)
        
})