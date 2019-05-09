
var currentUser = JSON.parse(localStorage.getItem("currentUser"));

// get items from local storage and tell that they are of the LineItem class.
items = JSON.parse(localStorage.getItem('items'));
for (let i = 0; i < items.length; i++) {
  items[i] = new LineItem(items[i].productId, items[i].quantity, items[i].username, items[i].uniqueId);
}

var tbody = document.getElementById('cartCatalog');

let completeLineItemString = ""
displayCartItems();

function displayCartItems(){
    tbody.innerHTML = "";

/* loop through items and find matches for currentUser & loop through flowers and find the ones with the matching
productId. Then add the line item quantity to the flower and display the lineItemString  */
for (i=0; i < items.length; i++) { 
    if (items[i].username == currentUser) {
    for(f=0; f < flowers.length; f++) {
        if(items[i].productId == flowers[f].productId) {
            flowers[f].quantity=items[i].quantity
            completeLineItemString += flowers[f].createLineItemString(items[i].uniqueId)
        }
}
tbody.innerHTML = completeLineItemString
        }
    }
}

// loop through items and find the one with a matching uniqueId, splice the matching one from the array
function removeFromCartClick(uniqueId) {
    for (i=0; i < items.length; i++) {
        if(items[i].uniqueId === uniqueId){
            items.splice(i, 1)
        }
    }
// save the remaining items to local storage as a new "items" array 
    localStorage.setItem("items", JSON.stringify(items));
// refresh page, so that item is no longer displayed in the cart
    window.location = "./cart.html";
    displayCartItems();
    console.log(items)
    alert("product removed from cart")
  }
