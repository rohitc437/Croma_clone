
function signup(){
    let email =JSON.stringify(document.getElementById('email').value);
    let pass = JSON.stringify(document.getElementById('pass').value);

    localStorage.setItem('email1',email );
    localStorage.setItem('pass1',pass)
    alert('Now go to sing in button');
    console.log(email)
}
function signin(){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let email1 =JSON.parse(localStorage.getItem('email1'));
    let pass1 = JSON.parse(localStorage.getItem('pass1'));
    if(email == email1 && pass== pass1){
        alert('sign in sucessfull');
        window.location.href="index.html"
    }else{
        alert('wrong email or pass');
    }
}