document.querySelector("form").addEventListener("submit",paynow);

function paynow(event){
  event.preventDefault();




alert("your order is accepted");

setTimeout(function(){
  alert("your order is being cooked");

},3000)

setTimeout(function(){
  alert("your order is ready");

},8000)

setTimeout(function(){
  alert("Order out for delivery ");

},10000)

  setTimeout(function(){
  alert("Order delivered ");
  window.location.href="index.html";

  

},12000)
var data =JSON.parse(localStorage.getItem("cart"))||[];
      data.innerHTML="";
      localStorage.setItem("cart",JSON.stringify(data));

}