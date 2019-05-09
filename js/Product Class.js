class Flower {
    constructor(productId, productName, productDescription, productImage, productPrice, quantity) {
        this.productId = productId;
        this.productImage = productImage;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.quantity = null;
    }
    
// A function inside a class, it is called a 'method'. No need to put 'function' before 'createProductString'
   createProductString() {
    return `<tr><td><img src="${this.productImage}"></td><td>${this.productName}
    </td><td>${this.productDescription}</td><td>${this.productPrice} €</td><td><div class="formDiv"><span>Quantity:</span>
    <input type="number" min="1.00" class="quantity">
    </div></td><td><button data-id="${this.productId}" onclick="addToCartClick(event)">Add to Cart</button></td></tr>`
    }

   createLineItemString(uniqueId) {
    return `<tr><td><img src="${this.productImage}"></td><td>${this.productName}
    </td><td>${this.productDescription}</td><td>${this.quantity}</td><td>${this.productPrice*this.quantity} € </td>
    <td><button data-id="${this.productId}" onclick="removeFromCartClick('${uniqueId}')">Remove from cart</button></td></tr>`
    }

   createOrderString() {
   return `<tr><td>${this.productName}<td>${this.quantity}</td><td>${this.productPrice*this.quantity} €</td>`
    }
}


    
