// Script.js

localStorage = window.localStorage;

window.addEventListener('DOMContentLoaded', () => {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        if (localStorage.getItem("response_str") === null) {
            localStorage.setItem("response_str", JSON.stringify(data));
            console.log("loading");
        }

        const produceList = JSON.parse(localStorage.getItem("response_str"));

        let productsContainer = document.getElementById("product-list");
        
        produceList.forEach(item => productsContainer.appendChild(new ProductItem(item)));
    })
});