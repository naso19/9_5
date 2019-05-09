
const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const usernameUI = document.getElementById('username') 
const passwordUI = document.getElementById('password')
const checkboxUI = document.getElementById('terms')
const submitBtnUI = document.getElementById('submit-btn')

// using the onlick property of the submit button and attaching functions to it

submitBtnUI.onclick = function () {

    if(passwordUI.value.length < 8) {
        alert ("password too short, please enter 8 characters")
        return false
    }

    // If the user has agreed to the terms and conditions, check if username is in use
    if(checkboxUI.checked) {
        var firstName = firstNameUI.value
        var lastName = lastNameUI.value
        var username = usernameUI.value
        var password = passwordUI.value
        var isUsernameInUse = false;
        
        for(let i = 0; i < customers.length; i++) {
            if(usernameUI.value === customers[i].username) {
            alert("username already registered, choose a different username");
            isUsernameInUse = true;
    }    
   }
   //if username is NOT in use, push new User and save into local storage
    if(!isUsernameInUse) {
    
        // To store the user I add him to the array of users (DB)
        customers.push(new User(firstName, lastName, username, password));
        
        localStorage.setItem('customers', JSON.stringify(customers));
        alert("now please log in");
    }
 }
}