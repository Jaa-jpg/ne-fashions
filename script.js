const products = [
    {
        id: 1,
        name: "Beige Everyday Kurti",
        category: "Kurtis",
        price: 899,
        oldPrice: 1199,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 2,
        name: "Floral Comfort Kurti",
        category: "Daily Wear",
        price: 799,
        oldPrice: 999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 3,
        name: "Rose Printed 3 Piece Set",
        category: "3 Piece Sets",
        price: 1499,
        oldPrice: 1799,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 4,
        name: "Classic Black Dress",
        category: "Daily Wear",
        price: 999,
        oldPrice: 1299,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 5,
        name: "Ivory Office Wear Dress",
        category: "Designer Wear",
        price: 1299,
        oldPrice: 1599,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 6,
        name: "Soft Pink Designer Kurti",
        category: "Designer Wear",
        price: 1199,
        oldPrice: 1499,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 7,
        name: "Elegant Printed Frock",
        category: "Frocks",
        price: 1099,
        oldPrice: 1399,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1506629905607-d9b1a5f4a7b3?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 8,
        name: "Minimal Beige Designer Set",
        category: "3 Piece Sets",
        price: 1799,
        oldPrice: 1999,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80"
    }
];


let cart = [];
let wishlist = [];


function displayProducts(list = products) {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <p style="grid-column:1/-1;text-align:center;">
                No products found.
            </p>
        `;

        return;
    }


    list.forEach(product => {

        const discount =
            Math.round(
                ((product.oldPrice - product.price) /
                product.oldPrice) * 100
            );


        grid.innerHTML += `

            <div class="product-card">

                <button
                    class="wishlist"
                    onclick="toggleWishlist(${product.id})"
                >
                    ${wishlist.includes(product.id) ? "♥" : "♡"}
                </button>

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <div class="rating">
                        ★★★★★ ${product.rating}
                    </div>

                    <p class="price">

                        <span class="old-price">
                            ₹${product.oldPrice}
                        </span>

                        ₹${product.price}

                        <small>
                            (${discount}% OFF)
                        </small>

                    </p>

                    <button
                        class="add"
                        onclick="addToCart(${product.id})"
                    >
                        ADD TO CART
                    </button>

                </div>

            </div>

        `;
    });
}


function addToCart(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    updateCartCount();

    alert(`${product.name} added to cart!`);
}


function updateCartCount() {

    const count = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    document.getElementById("cartCount").textContent = count;
}


function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist = wishlist.filter(item => item !== id);

    } else {

        wishlist.push(id);

    }

    displayProducts();
}


function showWishlist() {

    if (wishlist.length === 0) {

        alert("Your wishlist is empty.");

        return;
    }

    const items = wishlist.map(id => {

        const product =
            products.find(item => item.id === id);

        return product.name;

    });

    alert(
        "Your Wishlist:\n\n" +
        items.join("\n")
    );
}


function showCart() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    let message = "YOUR CART\n\n";

    let subtotal = 0;


    cart.forEach(item => {

        const total =
            item.price * item.quantity;

        subtotal += total;

        message +=
            `${item.name} × ${item.quantity} = ₹${total}\n`;

    });


    message +=
        `\nSubtotal: ₹${subtotal}`;

    alert(message);
}


function searchProducts() {

    const input =
        document.getElementById("searchInput");

    const searchTerm =
        input.value.toLowerCase();


    const filtered =
        products.filter(product =>
            product.name
                .toLowerCase()
                .includes(searchTerm)
        );

    displayProducts(filtered);
}


function displayProducts() {

    const grid =
        document.getElementById("productGrid");

    let list = [...products];


    const search =
        document.getElementById("searchInput")?.value
        .toLowerCase() || "";


    const category =
        document.getElementById("categoryFilter")?.value
        || "All";


    const sort =
        document.getElementById("sortFilter")?.value
        || "default";


    if (search) {

        list = list.filter(product =>
            product.name
                .toLowerCase()
                .includes(search)
        );

    }


    if (category !== "All") {

        list = list.filter(product =>
            product.category === category
        );

    }


    if (sort === "low") {

        list.sort((a, b) => a.price - b.price);

    }


    if (sort === "high") {

        list.sort((a, b) => b.price - a.price);

    }


    grid.innerHTML = "";


    list.forEach(product => {

        const discount =
            Math.round(
                ((product.oldPrice - product.price) /
                product.oldPrice) * 100
            );


        grid.innerHTML += `

            <div class="product-card">

                <button
                    class="wishlist"
                    onclick="toggleWishlist(${product.id})"
                >
                    ${wishlist.includes(product.id) ? "♥" : "♡"}
                </button>

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <div class="rating">
                        ★★★★★ ${product.rating}
                    </div>

                    <p class="price">

                        <span class="old-price">
                            ₹${product.oldPrice}
                        </span>

                        ₹${product.price}

                        <small>
                            ${discount}% OFF
                        </small>

                    </p>

                    <button
                        class="add"
                        onclick="addToCart(${product.id})"
                    >
                        ADD TO CART
                    </button>

                </div>

            </div>

        `;
    });
}


function filterCategory(category) {

    document.getElementById("categoryFilter").value =
        category;

    displayProducts();

    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function scrollToShop() {

    document
        .getElementById("shop")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("active");

}


function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting NE Fashions!"
    );

}


displayProducts();