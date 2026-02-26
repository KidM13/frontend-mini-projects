const container = document.querySelector('.container');
const username = document.querySelector('#text');
const nameError = document.querySelector('.nameError'); 

function validate_name(){
const name = username.value.trim(); 
if(name === ''){
  return 'username is required'  
}
if(name.length >10){
    return 'username should be less than 10 characters'
}
else{
    return 'username is valid'
}
}

function showError(inputField, errorElement, message) { 
    errorElement.textContent = message; 
    nameError.classList.add('invalidUsername');
    nameError.classList.remove('validUsername'); 
} 
function showSuccess(inputField, errorElement,message) { 
    errorElement.textContent = message; 
    nameError.classList.add('validUsername'); 
    nameError.classList.remove('invalidUsername'); 
}


username.addEventListener('input',()=>{
    const message=validate_name()
    if(message==='username is valid'){
        showSuccess(username,nameError,message)
    }
    else{
        showError(username,nameError,message)

    }
    
})
