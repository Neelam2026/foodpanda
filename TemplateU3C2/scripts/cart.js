var data =JSON.parse(localStorage.getItem("cart"))||[];
var price = [];
var value=document.querySelector("#count")
value.innerHTML=data.length;
refreshdata(data)

function refreshdata(data){
    document.querySelector("#cart").innerHTML="";
   
data.map(function(data,index){

  var div1= document.createElement('div');
  div1.setAttribute("id","div1")

  var img=document.createElement('img');
  img.setAttribute("id","poster");
  img.src=data.strMealThumb

  var dishname=document.createElement("p")

  dishname.setAttribute("id","dishname")
  dishname.innerHTML=`Name:${data.strMeal}`

 var dishprice=document.createElement("p");
 dishprice.setAttribute("id","dishprice")

 dishprice.innerHTML=Math.round(Math.random()*500);
 
 price.push(dishprice.innerHTML)


 var button1 = document.createElement('button')
 button1.setAttribute("id","remove")
 button1.innerHTML="remove";
 button1.addEventListener("click",function(){
   removeitem(data,index);
 })
div1.append(img,dishname,dishprice,button1)
document.querySelector("#cart").append(div1)

})
}
var sum=0;
for(var i=0;i<price.length;i++){
  sum+=+price[i];
}
var total=document.querySelector("#total")
total.innerHTML=`total amount of your order is ₹ ${sum}`;
// var data =JSON.parse(localStorage.getItem("cart"))||[];

function removeitem(index){
  console.log(data,index);

data.splice(index,1)

localStorage.setItem("cart",JSON.stringify(data))
refreshdata(data);
window.location.reload()

}