

let url='https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian'

async function getproducts(){
    try{
        let res= await fetch(url) ;
        let data= await res.json()
        console.log("data:",data)
        append(data)
    }
    catch(err){
      console.log(err)
    }

}

getproducts()

function append(data){
   // document.getElementById("menu").innerHTML=""
    data.meals.forEach(function(data){
    let menu=document.getElementById("menu");
    let div1=document.createElement("div");
   div1.setAttribute("id","div1")
    //console.log(data.meals[0].strMeal)
    let img=document.createElement("img")
     img.src=data.strMealThumb;
    img.setAttribute("id","size")
     let name=document.createElement("div");
     name.textContent=data.strMeal
     let price=document.createElement("div");
     price.innerText=`₹ ${Math.round(Math.random()*500)}`;

     let btn=document.createElement("button")
     btn.textContent="Add to cart"
     btn.addEventListener("click",function(){
         carttocart(data)
     })

      div1.append(img,name,price,btn)
      menu.append(div1)
   
})

let cart=JSON.parse(localStorage.getItem("cart"))||[]
function  carttocart(data){
   
    cart.push(data);
    localStorage.setItem("cart" ,JSON.stringify(cart))

    refreshcartcount(cart)
    alert("Added to cart")
}
}




function refreshcartcount(cart){
    let count=document.getElementById("count");
    count.textContent=`cart count ${cart.length}`
}



