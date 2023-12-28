const form=document.querySelector('form');
const email=document.getElementById('email');


form.addEventListener('click',e=>{
    
      const emailVal=email.value;
      const validEmail= emailVal.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      
    if(!form.checkValidity() & !validEmail) {
        e.preventDefault();
    } 
    form.classList.add('was-validated');
})
