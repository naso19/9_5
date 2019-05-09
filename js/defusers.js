var customers = []
// pushing the default users into an empty array
customers.push(new User("Nadja", "Soukka", "NaSo", "password"))
customers.push(new User("Faraz", "Jahoor", "FaJa", "password2"))
customers.push(new User("Nemanja", "Golubovic", "NeGo", "password3"))

//MAKE SURE WHY WE ARE GETTING THE ITEM CUSTOMERS NOT SETTING IT? HOW ARE THEY IN LOCAL STORAGE TO "GET" FROM THERE
//localStorage.setItem('customers', JSON.stringify(customers));
for(let i = 0; i < customers.length; i++) {
     customers = JSON.parse(localStorage.getItem('customers'))
     customers[i] = new User(customers[i].firstName, customers[i].lastName, customers[i].username, customers[i].password);
}
/*for (let i = 0; i < customers.length; i++) {
     customers = JSON.parse(localStorage.getItem('customers'));
     customers[i] = new User(customers[i].firstName, customers[i].lastName, customers[i].username, customers[i].password);
    }*/
