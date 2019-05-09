class Order {
    constructor(currentUser, recipientFirstName, recipientLastName, recipientStreet, recipientZipCode, city, deliveryDate, deliveryTime, additionalComments) {
        this.currentUser = currentUser;
        this.recipientFirstName = recipientFirstName; 
        this.recipientLastName = recipientLastName;
        this.recipientStreet = recipientStreet;
        this.recipientZipCode = recipientZipCode;
        this.deliveryDate = deliveryDate;
        this.deliveryTime = deliveryTime;
        this.additionalComments = additionalComments;
    }
}

var orders = []
