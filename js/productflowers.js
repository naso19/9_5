
// create elements <table> and a <tbody>
var tbody = document.getElementById('catalog');

 // empty array, loop through flowers/products and display them in html table. 
completeProductString = ""

for (i=0; i < flowers.length; i++) {
   completeProductString += flowers[i].createProductString()
}

tbody.innerHTML = completeProductString

//search function. loop trought the flowers and create a new table displaying ones that match search input word
function filterResults(event) {
  const value = document.getElementById("search").value;

  completeProductString = ""

  for (i=0; i < flowers.length; i++) {
    if (flowers[i].productName.toLowerCase().includes(value.toLowerCase())) {
      completeProductString += flowers[i].createProductString()
    }
  }

  tbody.innerHTML = completeProductString
}

function addToCartClick(event) {
// event button is tied to the specific data set (product Id) 
  var productId = event.target.dataset.id
// retrieve currentUser so that the new lineItem has that property saved, and can be retrieved for that user
  var username = JSON.parse(localStorage.getItem("currentUser"))
// the use of parentElement allows us to retrieve the input from the specific input field next to the button
// thus saving only the input from there and not all quantity input fields
  const parent = event.target.parentElement.parentElement;
  const quantity = parent.querySelector('.quantity')

// if local storage has no items, push new item. if there are items, retrieve them
  if (localStorage.getItem('items') == null) {
    items = []
  } else {
    items = JSON.parse(localStorage.getItem('items'))
  }

// add a uniqueId so that that particular product can be removed from cart later
// push new item into empty or retrieved array
 var uniqueId = new Date()
  if (quantity.value < 1) {
    alert("please choose at least 1 product") 
  } else {
  items.push(new LineItem(productId, quantity.value, username, uniqueId));
  localStorage.setItem('items', JSON.stringify(items));
 
  alert("product added to cart")
}
}