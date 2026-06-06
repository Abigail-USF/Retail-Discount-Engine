console.log("JavaScript connected!");
// Step 2:
const products = [
    {
        name: "Laptop",
        category: "electronics",
        price: 800,
        inventory: 5
    },
    {
        name: "Headphones",
        category: "electronics",
        price: 100,
        inventory: 10
    },
    {
        name: "T-Shirt",
        category: "apparel",
        price: 20,
        inventory: 15
    },
    {
        name: "Milk",
        category: "groceries",
        price: 4,
        inventory: 25
    },
    {
        name: "Detergent",
        category: "household",
        price: 12,
        inventory: 8

    }
];
// Step 3:
for (const product of products) {
    switch (product.category) {
        case "electronics":
            console.log(product.name + " gets 20% off");
            break;

        case "apparel":
            console.log(product.name + " gets 15% off");
            break;

        case "groceries":
        case "household":
            console.log(product.name + " gets 10% off");
            break;

        default:
            console.log(product.name + " gets no discount");
    }
}
// Step 4: 
// let customerType = "student";

if (customerType === "student") {
    console.log("Extra discount: 5%");
} else if (customerType === "senior") {
    console.log("Extra discount: 7%");
} else {
    console.log("No extra discount");
}
// Step 5:
const carts = [
    { productName: "Laptop", quantity: 1 },
    { productName: "T-Shirt", quantity: 2 },
    { productName: "Milk", quantity: 3 }
];

for (let i = 0; i < 3; i++) {
    let cart = carts[i];

    let product = products.find(item => item.name === cart.productName);

    let categoryDiscount = 0;

    switch (product.category) {
        case "electronics":
            categoryDiscount = 0.20;
            break;
        case "apparel":
            categoryDiscount = 0.15;
            break;
        case "groceries":
        case "household":
            categoryDiscount = 0.10;
            break;
        default:
            categoryDiscount = 0;
    }

    let customerDiscount = 0;

    if (customerType === "student") {
        customerDiscount = 0.05;
    } else if (customerType === "senior") {
        customerDiscount = 0.07;
    } else {
        customerDiscount = 0;
    }

    let originalTotal = product.price * cart.quantity;
    let totalDiscount = categoryDiscount + customerDiscount;
    let finalTotal = originalTotal - (originalTotal * totalDiscount);

    product.inventory = product.inventory - cart.quantity;

    console.log("Customer " + (i + 1));
    console.log("Total cost: $" + finalTotal);
    console.log("Remaining inventory for " + product.name + ": " + product.inventory);
}
//Step 6:
for (let key in products[0]) {
    console.log(key + ": " + products[0][key]);
}   
//Step 7:
for (const product of products) {
    const { name, category, price, inventory } = product;
    console.log("Name: " + name);
    console.log("Category: " + category);
    console.log("Price: " + price);
    console.log("Inventory: " + inventory);

for (const {key, value} of Object.entries(product)) {
    console.log(key + ": " + value);
}
}
