// product-item.js

localStorage = window.localStorage;

class ProductItem extends HTMLElement {
    constructor(item) {
        super();

        const shadow = this.attachShadow({mode: "open"});

        const itemContainer = document.createElement("li");
        itemContainer.setAttribute("class", "product");

        // // source
        const source = document.createElement("img");
        source.src = item.image;
        source.alt = item.title;
        source.width = 200;

        // name
        const name = document.createElement("p");
        name.setAttribute("class", "title");
        name.textContent = item.title;

        // price
        const price = document.createElement("p");
        price.setAttribute("class", "price");
        price.textContent = "$" + item.price;

        // button
        const button = document.createElement("button");

        let cartCount = document.getElementById("cart-count");
        if (localStorage.getItem(item.id) === null) {
            button.textContent = "Add to Cart";
            button.setAttribute("onclick", "alert('Added to Cart!')");
        }
        else {
            button.textContent = "Remove from Cart";
            button.setAttribute("onclick", "alert('Removed from Cart!')");
            cartCount.textContent = parseInt(cartCount.textContent) + 1;
        }

        button.addEventListener("click", function() {
            if (button.textContent === "Add to Cart") {
                button.textContent = "Remove From Cart";
                button.setAttribute("onclick", "alert('Removed from Cart!')");
                cartCount.textContent = parseInt(cartCount.textContent) + 1;
                localStorage.setItem(item.id, item.id);
            }
            else {
                button.textContent = "Add to Cart";
                button.setAttribute("onclick", "alert('Added to Cart!')");
                cartCount.textContent = parseInt(cartCount.textContent) - 1;
                localStorage.removeItem(item.id, item.id);
            }

        });

        // link styling
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './styles/styles.css');
        shadow.appendChild(linkElem);

        // add to site
        shadow.appendChild(itemContainer);
        itemContainer.appendChild(source);
        itemContainer.append(name);
        itemContainer.append(price);
        itemContainer.append(button);
    }
}

customElements.define('product-item', ProductItem);