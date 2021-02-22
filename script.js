const dob = document.getElementById('inputDate');
const ssn = document.getElementById('last4');
const form = document.getElementById('form');

form.addEventListener('input', ()=> {
    if (ssn.value.length > 3 && dob.value.length > 0)  {
        submitBtn.removeAttribute('disabled'); 
     
    } else {
        submitBtn.setAttribure('disable', 'disable');
    }
} );


function showAlert() {
    alert ("Successfully Submitted!");
  }


