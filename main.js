let products = [["Apple", 2.4], ["Banana", 1.8], ["Cherry", 3], ["Peach", 1.2], ["Watermelon", 0.7], ["Melon", 1], ["Plum", 3, 2]];
let cardsContainer = document.querySelector(".cards-container")
for (i = 0; i < products.length; i++) {
    let productsDiv = document.createElement("div");
    productsDiv.classList.add("products-divs")
    cardsContainer.appendChild(productsDiv);
    let productName = document.createElement("p");
    productName.innerHTML = `Product name: ${products[i][0]}`;
    productsDiv.appendChild(productName);
    let productPrice = document.createElement("p");
    productPrice.innerHTML = `Product price: ${products[i][1]}`;
    productsDiv.appendChild(productPrice);
}
let buttonLowToHigh = document.querySelector("#low-to-high");
buttonLowToHigh.addEventListener("click", function () {
    cardsContainer.innerHTML = null;
    for (i = 0; i < products.length; i++) {
        products.sort(function (a, b) {
            return a[1] - b[1]
        })
        let productsDiv = document.createElement("div");
        productsDiv.classList.add("products-divs")
        cardsContainer.appendChild(productsDiv);
        let productName = document.createElement("p");
        productName.innerHTML = `Product name: ${products[i][0]}`;
        productsDiv.appendChild(productName);
        let productPrice = document.createElement("p");
        productPrice.innerHTML = `Product price: ${products[i][1]}`;
        productsDiv.appendChild(productPrice);
    }
})
let HighToLow = document.querySelector("#High-to-Low");
HighToLow.addEventListener("click", function () {
    cardsContainer.innerHTML = null;
    for (i = 0; i < products.length; i++) {
        products.sort(function (a, b) {
            return b[1] - a[1]
        })
        let productsDiv = document.createElement("div");
        productsDiv.classList.add("products-divs")
        cardsContainer.appendChild(productsDiv);
        let productName = document.createElement("p");
        productName.innerHTML = `Product name: ${products[i][0]}`;
        productsDiv.appendChild(productName);
        let productPrice = document.createElement("p");
        productPrice.innerHTML = `Product price: ${products[i][1]}`;
        productsDiv.appendChild(productPrice);
    }
})
let AtoZ = document.querySelector("#A-Z");
AtoZ.addEventListener("click", function () {
    cardsContainer.innerHTML = null;
    for (i = 0; i < products.length; i++) {
        products.sort()
        let productsDiv = document.createElement("div");
        productsDiv.classList.add("products-divs")
        cardsContainer.appendChild(productsDiv);
        let productName = document.createElement("p");
        productName.innerHTML = `Product name: ${products[i][0]}`;
        productsDiv.appendChild(productName);
        let productPrice = document.createElement("p");
        productPrice.innerHTML = `Product price: ${products[i][1]}`;
        productsDiv.appendChild(productPrice);
    }
})
let ZtoA = document.querySelector("#Z-A");
ZtoA.addEventListener("click", function () {
    cardsContainer.innerHTML = null;
    for (i = 0; i < products.length; i++) {
        products.sort();
        products.reverse();
        console.log(products)
        let productsDiv = document.createElement("div");
        productsDiv.classList.add("products-divs")
        cardsContainer.appendChild(productsDiv);
        let productName = document.createElement("p");
        productName.innerHTML = `Product name: ${products[i][0]}`;
        productsDiv.appendChild(productName);
        let productPrice = document.createElement("p");
        productPrice.innerHTML = `Product price: ${products[i][1]}`;
        productsDiv.appendChild(productPrice);
    }
})
