document.getElementById('emailForm').addEventListener('submit',function(event){
    event.preventDefault();
    const email=document.getElementById('email').value;
    const span=document.getElementById('inv');
    


    if(validarEmail(email)){
        span.textContent='Email conferido';
        span.style.color='green';
        document.getElementById('email').style.border='1px solid green';

        
       const url=`confir.html?email=${encodeURIComponent(email)}`;
       window.location.href=url;
       
    }else{
        span.textContent='Email Invalido .Tente novamente';
        span.style.color='red';
        document.getElementById('email').style.border='1px solid red';
    }

});
function validarEmail(email){
    const regex =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
}