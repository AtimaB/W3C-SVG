function ssnLength(elem){
    
    if (elem.value.length = 4) {
        elem.value = elem.value.slice(0,4); 
    } 
}
 

const dob = document.getElementById('inputDate');
const ssn = document.getElementById('last4');
const form = document.getElementById('form');
const errorElement  = document.getElementById('error')

form.addEventListener('.submitBtn', (e) => {
    let messages = []
    if (ssn.value === '' || ssnLength(elem) == null) {
        messages.push('Plese enter the last 4 SSN')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})

