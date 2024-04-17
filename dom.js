function plus(event){
console.log(event.target.parentNode.querySelector('span'))
var num=event.target.parentNode.querySelector('span')
num.innerHTML=Number(num.innerHTML)+1
total()}

function minus(event){
    console.log(event.target.parentNode.querySelector('span'))
    var num=event.target.parentNode.querySelector('span')
    num.innerHTML=Number(num.innerHTML)-1 
    total()}



    function remove(event){
        console.log(event.target.parentNode.querySelector('i'))
        var rmv=event.target.parentNode.querySelector('i');
       console.log(rmv);
    rmv.parentNode.parentNode.parentNode.remove();
    total()}

    function like(event) {
        var heart = event.target;
       if(heart.style.color == "red")
       { heart.style.color = "black";}
       else{heart.style.color ="red";} 
    }


    function total(){
        var total=0;
var prices=document.getElementsByClassName("unit-price")
var quantities=document.getElementsByClassName('quantity')
for(var i=0; i<prices.length; i++){
total=total+Number(prices[i].innerHTML)*Number(quantities[i].innerHTML)
console.log(total,Number(prices[i].innerHTML),Number(quantities[i].innerHTML))
}  
console.log(prices,quantities,total)   
var Totals=document.querySelector('.total');
    console.log(Totals)
    Totals.innerHTML = total+"$";}
    console.log(total())

 
    