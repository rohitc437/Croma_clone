var new_total1 =JSON.parse(localStorage.getItem('new_total'));
console.log(Number(new_total1));


function makePayment(){
    setTimeout(function(){
        alert('Payment sucessful');
    },4000);
   
}