// ==========================================
// NE FASHIONS PRODUCTS
// ==========================================

const products = [

    {
        id: 1,
        name: "Elegant Blue Floral Printed Frock",
        price: 699,
        category: "Frocks",
        fabric: "Georgette",
        colour: "Blue",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/frock-1.jpg",
    },

    {
        id: 2,
        name: "Elegant Mustard Embroidered Frock",
        price: 699,
        category: "Frocks",
        fabric: "Mangalagiri",
        colour: "Mustard",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/frock-2.jpg",
    },

    {
        id: 3,
        name: "Elegant White Printed Frock",
        price: 699,
        category: "Frocks",
        fabric: "Dhabu cotton",
        colour: "White",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/frock-3.jpg",
    },

    {
        id: 4,
        name: "Elegant Rust Orange Embroidered Suit Set",
        price: 899,
        category: "3 Piece Sets",
        fabric: "Roman silk",
        colour: "Rust orange",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/3-piece-1.jpg",
    },

    {
        id: 5,
        name: "Elegant Deep Purple Embroidered Suit Set",
        price: 899,
        category: "3 piece sets",
        fabric: "Roman silk",
        colour: "Deep Purple",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/3-piece-2.jpg",
    },

    {
        id: 6,
        name: "Elegant Navy Blue Embroidered Suit Set",
        price: 750,
        category: "Kurtis",
        fabric: "Rayon-cotton",
        colour: "Navy Blue",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/kurti-2.jpg",
    },

    {
        id: 7,
        name: "Elegant Navy Blue Printed Kurti",
        price: 899,
        category: "Kurtis",
        fabric: "Rayon-cotton",
        colour: "Navy Blue",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/kurti-1.jpg",
    },

    {
        id: 8,
        name: "Elegant Grey Blue Peacock Suit Set",
        price: 899,
        category: "Daily wear",
        fabric: "Rayon",
        colour: "Grey Blue",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/daily-wear-1.jpg",
    },

    {
        id: 9,
        name: "Elegant Yellow Floral Suit Set",
        price: 899,
        category: "Daily wear",
        fabric: "Rayon",
        colour: "Yellow",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/daily-wear-2.jpg",
    },

    {
        id: 10,
        name: "Graceful Mustard Floral Suit Set",
        price: 899,
        category: "Daily Wear",
        fabric: "Rayon",
        colour: "Mustard yellow",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/daily-wear-3.jpg",
    },

    {
        id: 11,
        name: "Elegant Olive Beige Floral Suit Set",
        price: 1100,
        category: "Sets",
        fabric: "Jamdani",
        colour: "Olive Beige",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/set-1.jpg",
    },

    {
        id: 12,
        name: "Elegant Blue Grey Floral Peacock Suit Set",
        price: 1100,
        category: "Sets",
        fabric: "Jamdani",
        colour: "Blue Grey",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/set-2.jpg",
    },

    {
        id: 13,
        name: "Elegant Rust Red Floral Suit Set",
        price: 999,
        category: "Sets",
        fabric: "Rayon",
        colour: "Rust Red",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/set-3.jpg",
    },

    {
        id: 14,
        name: "Elegant Deep Plum Floral Suit Set",
        price: 999,
        category: "Sets",
        fabric: "Rayon",
        colour: "Deep Plum",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/set-4.jpg",
    },

    {
        id: 15,
        name: "Elegant Maroon Floral Suit Set",
        price: 999,
        category: "Sets",
        fabric: "Rayon",
        colour: "Maroon",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/set-5.jpg",
    },

    {
        id: 16,
        name: "Elegant Rani Pink Floral Suit Set",
        price: 699,
        category: "Sets",
        fabric: "Rayon",
        colour: "Rani Pink",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/set-6.jpg",
    },

    {
        id: 17,
        name: "Elegant Mauve Floral Suit Set",
        price: 899,
        category: "Sets",
        fabric: "Rayon",
        colour: "Mauve",
        sizes: ["M", "L", "XL", "XXL"],
        image: "images/set-7.jpg",
    },
];


// ==========================================
// CART & WISHLIST
// ==========================================

let cart = JSON.parse(localStorage.getItem("neCart")) || [];

let wishlist = JSON.parse(localStorage.getItem("neWishlist")) || [];


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts() {

    const productGrid =
        document.getElementById("productGrid");

    const category =
        document.getElementById("categoryFilter").value;

    const sort =
        document.getElementById("sortFilter").value;

    const search =
        document.getElementById("searchInput").value
        .toLowerCase();


    let filteredProducts = products.filter(product => {

        const matchesCategory =
            category === "All" ||
            product.category === category;

        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.colour.toLowerCase().includes(search) ||
            product.fabric.toLowerCase().includes(search);

        return matchesCategory && matchesSearch;

    });


    if (sort === "low") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    }

    if (sort === "high") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    }


    productGrid.innerHTML = "";


    filteredProducts.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image-wrap">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    style="cursor: pointer;"
                >

                <button
                    class="wishlist-btn"
                    onclick="toggleWishlist(${product.id})"
                >
                    ${wishlist.includes(product.id) ? "♥️" : "♡"}
                </button>

            </div>


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <h4>
                    ₹${product.price.toLocaleString("en-IN")}
                </h4>

                <p>
                    ${product.colour} • ${product.fabric}
                </p>

                <p>
                    Sizes:
                    ${product.sizes.join(", ")}
                </p>

                <button
                    class="primary-btn"
                    onclick="addToCart(${product.id})"
                >
                    ADD TO CART
                </button>

            </div>

        `;


        // PRODUCT IMAGE CLICK
        const productImage =
            card.querySelector(".product-image-wrap img");

        productImage.addEventListener("click", function () {

            openImageModal(
                this.src,
                this.alt
            );

        });


        productGrid.appendChild(card);

    });


    updateCounts();

}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(productId) {

    const existing =
        cart.find(item => item.id === productId);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }


    saveCart();

    updateCounts();

}


// ==========================================
// REMOVE FROM CART
// ==========================================

function removeFromCart(productId) {

    cart =
        cart.filter(item => item.id !== productId);

    saveCart();

    updateCounts();

    showCart();

}


// ==========================================
// WISHLIST
// ==========================================

function toggleWishlist(productId) {

    if (wishlist.includes(productId)) {

        wishlist =
            wishlist.filter(id => id !== productId);

    } else {

        wishlist.push(productId);

    }


    localStorage.setItem(
        "neWishlist",
        JSON.stringify(wishlist)
    );


    displayProducts();

    showWishlist();

}


// ==========================================
// SHOW WISHLIST
// ==========================================

function showWishlist() {

    const modal =
        document.getElementById("wishlistModal");

    const container =
        document.getElementById("wishlistItems");


    if (wishlist.length === 0) {

        container.innerHTML =
            "<p>Your wishlist is empty.</p>";

    } else {

        container.innerHTML = "";


        wishlist.forEach(id => {

            const product =
                products.find(p => p.id === id);


            if (!product) return;


            container.innerHTML += `

                <div class="popup-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        style="cursor: pointer;"
                    >

                    <div>

                        <h3>
                            ${product.name}
                        </h3>

                        <p>
                            ₹${product.price.toLocaleString("en-IN")}
                        </p>

                        <button
                            onclick="addToCart(${product.id})"
                        >
                            Add to Cart
                        </button>

                        <button
                            onclick="toggleWishlist(${product.id})"
                        >
                            Remove
                        </button>

                    </div>

                </div>

            `;

        });


        // WISHLIST IMAGE CLICK
        const wishlistImages =
            container.querySelectorAll(".popup-item img");

        wishlistImages.forEach(img => {

            img.addEventListener("click", function () {

                openImageModal(
                    this.src,
                    this.alt
                );

            });

        });

    }


    modal.classList.add("active");

}


// ==========================================
// CLOSE WISHLIST
// ==========================================

function closeWishlist() {

    document
        .getElementById("wishlistModal")
        .classList.remove("active");

}


// ==========================================
// SHOW CART
// ==========================================

function showCart() {

    const modal =
        document.getElementById("cartModal");

    const container =
        document.getElementById("cartItems");

    const totalElement =
        document.getElementById("cartTotal");


    if (cart.length === 0) {

        container.innerHTML =
            "<p>Your cart is empty.</p>";

        totalElement.innerText =
            "Total: ₹0";

    } else {

        container.innerHTML = "";

        let total = 0;


        cart.forEach(item => {

            const product =
                products.find(p => p.id === item.id);

            if (!product) return;


            const itemTotal =
                product.price * item.quantity;

            total += itemTotal;


            container.innerHTML += `

                <div class="popup-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div>

                        <h3>
                            ${product.name}
                        </h3>

                        <p>
                            ₹${product.price.toLocaleString("en-IN")}
                        </p>

                        <p>
                            Quantity:
                            ${item.quantity}
                        </p>

                        <button
                            onclick="removeFromCart(${product.id})"
                        >
                            Remove
                        </button>

                    </div>

                </div>

            `;

        });


        totalElement.innerText =
            "Total: ₹" +
            total.toLocaleString("en-IN");


        const checkoutBtn =
            document.createElement("button");

        checkoutBtn.className =
            "primary-btn checkout-btn";

        checkoutBtn.innerText =
            "CHECKOUT";

        checkoutBtn.onclick =
            checkout;

        container.appendChild(checkoutBtn);

    }


    modal.classList.add("active");

}


// ==========================================
// CLOSE CART
// ==========================================

function closeCart() {

    document
        .getElementById("cartModal")
        .classList.remove("active");

}


// ==========================================
// CHECKOUT
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    alert("Checkout coming soon!");


    document
        .getElementById("cartModal")
        .classList.remove("active");

}


// ==========================================
// IMAGE MODAL
// ==========================================

function openImageModal(image, name) {

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("imageModalImg");


    modalImage.src =
        image;

    modalImage.alt =
        name;


    modal.classList.add("active");

}


function closeImageModal() {

    document
        .getElementById("imageModal")
        .classList.remove("active");

}


// ==========================================
// COUNTS
// ==========================================

function updateCounts() {

    const cartCount =
        document.getElementById("cartCount");

    const wishlistCount =
        document.getElementById("wishlistCount");


    cartCount.innerText =
        cart.reduce(
            (total, item) => total + item.quantity,
            0
        );


    wishlistCount.innerText =
        wishlist.length;

}


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem(
        "neCart",
        JSON.stringify(cart)
    );

}


// ==========================================
// CATEGORY FILTER
// ==========================================

function filterCategory(category) {

    document.getElementById(
        "categoryFilter"
    ).value = category;


    displayProducts();


    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// SEARCH
// ==========================================

function searchProducts() {

    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });


    displayProducts();

}


// ==========================================
// SCROLL TO SHOP
// ==========================================

function scrollToShop() {

    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("active");

}


// ==========================================
// CONTACT FORM
// ==========================================

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting NE Fashions!"
    );

}


// ==========================================
// CLOSE POPUPS WHEN CLICKING OUTSIDE
// ==========================================

window.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains("popup")
        ) {

            event.target.classList.remove("active");

        }

    }
);


// ==========================================
// LOAD PRODUCTS WHEN WEBSITE OPENS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayProducts();

        updateCounts();

    }
);