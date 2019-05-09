// same as cart js, retrieve stuff from storage and loop trhough and display...
var currentUser = JSON.parse(localStorage.getItem("currentUser"));

items = JSON.parse(localStorage.getItem('items'));
for (let i = 0; i < items.length; i++) {
  items[i] = new LineItem(items[i].productId, items[i].quantity, items[i].username);

}

var tbody = document.getElementById('orderCatalog');

completeOrderString = ""

for (i=0; i < items.length; i++) { 
  if (items[i].username == currentUser) {
  for(j=0; j < flowers.length; j++) {
      if(items[i].productId == flowers[j].productId) {
          flowers[j].quantity=items[i].quantity
          completeOrderString += flowers[j].createOrderString()
      }
}
tbody.innerHTML = completeOrderString
}
}

const recipientFirstNameUI = document.getElementById('first-name')
const recipientLastNameUI = document.getElementById('last-name')
const recipientStreetUI = document.getElementById('street') 
const recipientZipCodeUI = document.getElementById('zipCode')
const deliveryDateUI = document.getElementById('deliveryDate')
const deliveryTimeUI = document.getElementById('deliveryTime')
const additionalCommentsUI = document.getElementById('comment-field')
const termsAndConditionsUI = document.getElementById('terms')
const completeregistrationUI = document.getElementById('submit-btn')


completeregistrationUI.onclick = function () {

  if(recipientFirstNameUI.value.length == 0 || recipientLastNameUI.value.length == 0 || recipientStreetUI.value.length == 0 || recipientZipCodeUI.value.length == 0)  {
    alert("fill in all required information");
    return false
  }

  if(termsAndConditionsUI.checked) 
    var recipientFirstName = recipientFirstNameUI.value
    var recipientLastName = recipientLastNameUI.value
    var recipientStreet = recipientStreetUI.value
    var recipientZipCode = recipientZipCodeUI.value
    var deliveryDate = deliveryDateUI.value
    var deliveryTime = deliveryTimeUI.value
    var additionalComments = additionalCommentsUI.value

orders.push(new Order(currentUser, recipientFirstName, recipientLastName, recipientStreet, recipientZipCode, deliveryDate, deliveryTime, additionalComments));
        
localStorage.setItem('orders', JSON.stringify(orders));
console.log(orders);
alert("You will now be transferred to our payment partner");
return true
}
