const container = document.querySelector('.container');
const username = document.querySelector('#text');
const nameError = document.querySelector('nameError'); 

function validate_name(){
const name = username.value.trim(); 
if(name === ''){
  return 'username is required'  
}
if(name.length >10){
    return 'username should be less than 10 characters'
}
else{
    return ''
}
}

function showError(inputField, errorElement, message) { 
    errorElement.textContent = message; 
    inputField.classList.add('invalid'); 
    inputField.classList.remove('valid');
    
} 
function showSuccess(inputField, errorElement) { 
    errorElement.textContent = ''; 
    inputField.classList.add('valid');  
    inputField.classList.remove('invalid'); 
}


username.addEventListener('input',()=>{
    const errormsg=validate_name()
    if(errormsg){
        showError(username,nameError,errormsg)
    }
    else{
        showSuccess(username,nameError)
    }
    
})
