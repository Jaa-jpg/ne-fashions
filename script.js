/* =========================================================
   NE FASHIONS - FINAL PRODUCT DATA
   15 VISIBLE PRODUCTS
   17 IMAGE GROUPS
   COLOR VARIANTS ARE CONNECTED
========================================================= */

const SUPABASE_URL = "https://rcablyesxkzvxzolwvyz.supabase.co";

const SUPABASE_KEY = "sb_publishable_7WueOf83yr4MDgHOz506iA_wGZ3uzcB";

const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

const products = [

  /* ---------------- FROCKS ---------------- */

  {
    id: "frock-1",
    name: "Elegant Blue Floral Printed Frock",
    category: "Frocks",
    price: 699,
    description: "Elegant blue floral printed frock with a graceful feminine silhouette.",
    material: "Georgette",
    colors: [
      {
        name: "Blue",
        images: [
          "images/frock-1.0.jpg",
          "images/frock-1.jpg",
          "images/frock-1.1.jpg",
          "images/frock-1.2.jpg",
          "images/frock-1.3.jpg",
          "images/frock-1.4.jpg"
        ]
      }
    ]
  },

  {
    id: "frock-2",
    name: "Elegant Mustard Embroidered Frock",
    category: "Frocks",
    price: 699,
    description: "Beautiful mustard embroidered frock designed for a soft and elegant look.",
    material: "Mangalagiri",
    colors: [
      {
        name: "Mustard",
        images: [
          "images/frock-2.0.jpg",
          "images/frock-2.jpg",
          "images/frock-2.1.jpg",
          "images/frock-2.2.jpg",
          "images/frock-2.3.jpg"
        ]
      }
    ]
  },

  {
    id: "frock-3",
    name: "Elegant White Printed Frock",
    category: "Frocks",
    price: 699,
    description: "Elegant white printed frock with a timeless everyday style.",
    material: "Dhabu Cotton",
    colors: [
      {
        name: "White",
        images: [
          "images/frock-3.0.jpg",
          "images/frock-3.jpg",
          "images/frock-3.1.jpg",
          "images/frock-3.2.jpg",
          "images/frock-3.3.jpg",
          "images/frock-3.4.jpg"
        ]
      }
    ]
  },


  /* ---------------- DAILY WEAR ---------------- */

  {
    id: "dailywear-1",
    name: "Elegant Grey Blue Peacock Suit Set",
    category: "Daily Wear",
    price: 899,
    description: "A graceful grey blue peacock printed suit set perfect for everyday elegance.",
    material: "Rayon",
    colors: [
      {
        name: "Grey Blue",
        images: [
          "images/dailywear-1.0.jpg",
          "images/dailywear-1.jpg"
        ]
      }
    ]
  },

  {
    id: "dailywear-2",
    name: "Elegant Yellow Floral Suit Set",
    category: "Daily Wear",
    price: 899,
    description: "Bright and feminine yellow floral suit set for a fresh everyday look.",
    material: "Rayon",
    colors: [
      {
        name: "Yellow",
        images: [
          "images/dailywear-2.0.jpg",
          "images/dailywear-2.jpg",
          "images/dailywear-2.1.jpg",
          "images/dailywear-2.2.jpg",
          "images/dailywear-2.3.jpg"
        ]
      }
    ]
  },

  {
    id: "dailywear-3",
    name: "Graceful Mustard Floral Suit Set",
    category: "Daily Wear",
    price: 899,
    description: "Graceful mustard floral suit set with a comfortable everyday silhouette.",
    material: "Rayon",
    colors: [
      {
        name: "Mustard",
        images: [
          "images/dailywear-3.0.jpg",
          "images/dailywear-3.jpg"
        ]
      }
    ]
  },


  /* ---------------- KURTIS ---------------- */

  {
    id: "kurti-1",
    name: "Elegant Navy Blue Printed Kurti",
    category: "Kurtis",
    price: 899,
    description: "A sophisticated navy blue printed kurti designed for effortless styling.",
    material: "Rayon Cotton",
    colors: [
      {
        name: "Navy Blue",
        images: [
          "images/kurti-1.0.jpg",
          "images/kurti-1.jpg"
        ]
      }
    ]
  },

  {
    id: "kurti-2",
    name: "Elegant Navy Blue Embroidered Kurti",
    category: "Kurtis",
    price: 750,
    description: "Elegant navy blue embroidered kurti with a refined traditional finish.",
    material: "Rayon Cotton",
    colors: [
      {
        name: "Navy Blue",
        images: [
          "images/kurti-2.0.jpg",
          "images/kurti-2.jpg",
          "images/kurti-2.1.jpg",
          "images/kurti-2.2.jpg",
          "images/kurti-2.3.jpg"
        ]
      }
    ]
  },


  /* ---------------- 3 PIECE SET - COLOR VARIANT ---------------- */

  {
    id: "three-piece-1",
    name: "Elegant Embroidered 3 Piece Suit Set",
    category: "3 Piece Sets",
    price: 899,
    description: "Elegant embroidered three-piece suit set available in beautiful statement colours.",
    material: "Roman Silk",
    colors: [
      {
        name: "Orange",
        images: [
          "images/Orange1-3piece-1.0.jpg",
          "images/Orange1-3piece-1.jpg",
          "images/Orange1.1-3piece-1.jpg",
          "images/Orange1.2-3piece-1.jpg",
          "images/Orange1.3-3piece-1.jpg",
          "images/Orange1.4-3piece-1.jpg"
        ]
      },
      {
        name: "Purple",
        images: [
          "images/Purple1-3piece-2.0.jpg",
          "images/Purple1-3piece-2.jpg",
          "images/Purple1.1-3piece-2.jpg",
          "images/Purple1.2-3piece-2.jpg",
          "images/Purple1.3-3piece-2.jpg",
          "images/Purple1.4-3piece-2.jpg"
        ]
      }
    ]
  },


  /* ---------------- SET - COLOR VARIANT ---------------- */

  {
    id: "floral-set-1",
    name: "Elegant Floral Suit Set",
    category: "Sets",
    price: 999,
    description: "Beautiful floral suit set available in rich maroon and purple colour options.",
    material: "Rayon",
    colors: [
      {
        name: "Maroon",
        images: [
          "images/maroonset-3.0.jpg",
          "images/maroonset-3.jpg",
          "images/maroonset-3.1.jpg",
          "images/maroonset-3.2.jpg",
          "images/maroonset-3.3.jpg"
        ]
      },
      {
        name: "Purple",
        images: [
          "images/purpleset-4.0.jpg",
          "images/purpleset-4.jpg",
          "images/purpleset-4.1.jpg",
          "images/purpleset-4.2.jpg",
          "images/purpleset-4.3.jpg"
        ]
      }
    ]
  },


  /* ---------------- OTHER SETS ---------------- */

  {
    id: "set-1",
    name: "Elegant Olive Beige Floral Suit Set",
    category: "Sets",
    price: 1100,
    description: "Elegant olive beige floral suit set with a premium traditional appearance.",
    material: "Jamdani",
    colors: [
      {
        name: "Olive Beige",
        images: [
          "images/set-1.0.jpg",
          "images/set-1.jpg",
          "images/set-1.1.jpg",
          "images/set-1.2.jpg",
          "images/set-1.3.jpg"
        ]
      }
    ]
  },

  {
    id: "set-2",
    name: "Elegant Blue Grey Floral Peacock Suit Set",
    category: "Sets",
    price: 1100,
    description: "Beautiful blue grey floral peacock suit set with an elegant traditional feel.",
    material: "Jamdani",
    colors: [
      {
        name: "Blue Grey",
        images: [
          "images/set-2.0.jpg",
          "images/set-2.jpg",
          "images/set-2.1.jpg",
          "images/set-2.2.jpg",
          "images/set-2.3.jpg"
        ]
      }
    ]
  },

  {
    id: "set-5",
    name: "Elegant Maroon Floral Suit Set",
    category: "Sets",
    price: 999,
    description: "Elegant maroon floral suit set with a rich and graceful appearance.",
    material: "Rayon",
    colors: [
      {
        name: "Maroon",
        images: [
          "images/set-5.0.jpg",
          "images/set-5.jpg"
        ]
      }
    ]
  },

  {
    id: "set-6",
    name: "Elegant Rani Pink Floral Suit Set",
    category: "Sets",
    price: 699,
    description: "Beautiful rani pink floral suit set for a bright and feminine look.",
    material: "Rayon",
    colors: [
      {
        name: "Rani Pink",
        images: [
          "images/set-6.0.jpg",
          "images/set-6.jpg"
        ]
      }
    ]
  },

  {
    id: "set-7",
    name: "Elegant Mauve Floral Suit Set",
    category: "Sets",
    price: 899,
    description: "Soft mauve floral suit set designed for effortless elegance.",
    material: "Rayon",
    colors: [
      {
        name: "Mauve",
        images: [
          "images/set-7.0.jpg",
          "images/set-7.jpg",
          "images/set-7.1.jpg",
          "images/set-7.2.jpg",
          "images/set-7.3.jpg"
        ]
      }
    ]
  }

];


/* =========================================================
   STATE
========================================================= */

let currentProduct = null;
let currentColorIndex = 0;
let currentImageIndex = 0;
let selectedSize = null;

let cart = JSON.parse(localStorage.getItem("neFashionsCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("neFashionsWishlist")) || [];

/* Convert old wishlist format into new format */
wishlist = wishlist.map(item => {

  if (typeof item === "string") {
    return {
      productId: item,
      color: null,
      size: null
    };
  }

  return item;
});

function updateCartCount() {
  const count = document.getElementById("cartCount");
  if (!count) return;

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  count.textContent = totalQuantity;
  count.classList.toggle("show", totalQuantity > 0);
}

/* =========================================================
   HELPERS
========================================================= */

function money(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function getProductColor(product, index = 0) {
  return product.colors[index] || product.colors[0];
}

function getCurrentColor() {
  return currentProduct.colors[currentColorIndex];
}

function getCurrentImage() {
  return getCurrentColor().images[currentImageIndex];
}

function saveCart() {
  localStorage.setItem("neFashionsCart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("neFashionsWishlist", JSON.stringify(wishlist));
}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

  const grid = document.getElementById("productGrid");

  if (!grid) return;

  grid.innerHTML = products.map(product => {

    const firstColor = product.colors[0];

    return `
      <article class="product-card">

        <div
          class="product-image-wrap"
          onclick="openProduct('${product.id}', 0)"
        >

          <img
            id="card-image-${product.id}"
            src="${firstColor.images[0]}"
            alt="${product.name}"
            onerror="handleImageError(this)"
          >

        </div>

        <div class="product-info">

          <h3>${product.name}</h3>

          <div class="product-price">
            ${money(product.price)}
          </div>

          ${
            product.colors.length > 1
            ?
            `
            <div class="card-colors">

              ${product.colors.map((color, index) => `
                <button
                  class="card-color ${index === 0 ? "active" : ""}"
                  title="${color.name}"
                  onclick="event.stopPropagation(); changeCardColor('${product.id}', ${index})"
                >
                  <span
                    class="card-color-circle"
                    style="background-color: ${getColorValue(color.name)};"
                  ></span>
                </button>
              `).join("")}

              <span class="color-label">
                ${product.colors.length} Colors
              </span>

            </div>
            `
            : ""
          }

        </div>

      </article>
    `;

  }).join("");
}

/* =========================================================
   CARD COLOR CHANGE
========================================================= */

function changeCardColor(productId, colorIndex) {

  const product = products.find(p => p.id === productId);

  if (!product) return;

  const image = document.getElementById(`card-image-${productId}`);

  image.src = product.colors[colorIndex].images[0];

  const card = image.closest(".product-card");

  card.querySelectorAll(".card-color").forEach((button, index) => {
    button.classList.toggle("active", index === colorIndex);
  });

}


/* =========================================================
   PRODUCT DETAIL
========================================================= */


function openProduct(productId, colorIndex = 0) {

  currentProduct = products.find(p => p.id === productId);

  if (!currentProduct) return;

  currentColorIndex = colorIndex;
  currentImageIndex = 0;
  selectedSize = null;

  document.getElementById("productDetail").classList.add("active");

  renderProductDetail();
}

function renderProductDetail() {

  if (!currentProduct) return;

  const color = getCurrentColor();

  document.getElementById("detailCategory").textContent =
    currentProduct.category;

  document.getElementById("detailName").textContent =
    currentProduct.name;

  document.getElementById("detailPrice").textContent =
    money(currentProduct.price);

  document.getElementById("productDescription").textContent =
    currentProduct.description;

  document.getElementById("materialCare").textContent =
    `${currentProduct.material}. Hand wash or gentle wash recommended. Dry in shade and iron carefully.`;

  document.getElementById("selectedColorText").textContent =
    `• ${color.name}`;

  document.getElementById("detailMainImage").src =
    color.images[currentImageIndex];

 renderThumbnails();
 renderColorOptions();
 updateSizeButtons();
 updateDetailWishlistButton();
 updateDetailCartButton();

}


/* =========================================================
   COLOR CIRCLES
========================================================= */

function getColorValue(colorName) {

  const colors = {
    "Purple": "#8E4585",
    "Orange": "#E87532",
    "Blue": "#3F6FA8",
    "Mustard": "#D4A72C",
    "White": "#FFFFFF",
    "Grey Blue": "#71859A",
    "Yellow": "#E6C229",
    "Navy Blue": "#243B64",
    "Maroon": "#7A263A",
    "Olive Beige": "#9B916B",
    "Blue Grey": "#71808C",
    "Rani Pink": "#D94F83",
    "Mauve": "#A77B8E",
    "Grey": "#808080"
  };

  return colors[colorName] || "#CCCCCC";
}


/* =========================================================
   THUMBNAILS
========================================================= */

function renderThumbnails() {

  const gallery = document.getElementById("thumbnailGallery");
  const color = getCurrentColor();

  gallery.innerHTML = color.images.map((image, index) => `
    <button
      class="${index === currentImageIndex ? "active" : ""}"
      onclick="selectImage(${index})"
    >
      <img src="${image}" alt="" onerror="handleImageError(this)">
    </button>
  `).join("");
}


/* =========================================================
   COLOR OPTIONS
========================================================= */

function renderColorOptions() {

  const container = document.getElementById("colorOptions");

  if (!container || !currentProduct) return;

  const colors = currentProduct.colors || [];

  container.innerHTML = colors.map((color, index) => `
    <button
      type="button"
      class="color-option ${index === currentColorIndex ? "active" : ""}"
      onclick="selectColor(${index})"
      title="${color.name}"
    >
      <span
        class="color-circle"
        style="background-color: ${getColorValue(color.name)};"
      ></span>
    </button>
  `).join("");
}


/* =========================================================
   COLOR SELECT
========================================================= */

function selectColor(index) {

  if (!currentProduct.colors[index]) return;

  currentColorIndex = index;
  currentImageIndex = 0;

  renderProductDetail();
}


/* =========================================================
   IMAGE SELECT
========================================================= */

function selectImage(index) {

  const color = getCurrentColor();

  if (!color.images[index]) return;

  currentImageIndex = index;

  document.getElementById("detailMainImage").src =
    color.images[index];

  renderThumbnails();
}


/* =========================================================
   IMAGE NAVIGATION
========================================================= */

function nextImage() {

  const color = getCurrentColor();

  currentImageIndex =
    (currentImageIndex + 1) % color.images.length;

  updateMainImage();
}

function previousImage() {

  const color = getCurrentColor();

  currentImageIndex =
    (currentImageIndex - 1 + color.images.length) %
    color.images.length;

  updateMainImage();
}

function updateMainImage() {

  const image = getCurrentImage();

  document.getElementById("detailMainImage").src = image;

  renderThumbnails();

  if (
    document.getElementById("imageViewer").classList.contains("active")
  ) {
    updateViewer();
  }
}


/* =========================================================
   IMAGE VIEWER
========================================================= */

function openImageViewer() {

  document.getElementById("imageViewer").classList.add("active");

  updateViewer();

  document.body.style.overflow = "hidden";
}

function closeImageViewer() {

  document.getElementById("imageViewer").classList.remove("active");

  document.body.style.overflow = "";
}

function updateViewer() {

  document.getElementById("viewerImage").src =
    getCurrentImage();

  document.getElementById("viewerCounter").textContent =
    `${currentImageIndex + 1} / ${getCurrentColor().images.length}`;
}


/* =========================================================
   TOUCH SWIPE
========================================================= */

let touchStartX = 0;
let touchEndX = 0;

const viewerImage = document.getElementById("viewerImage");

viewerImage.addEventListener("touchstart", function(e) {
  touchStartX = e.changedTouches[0].screenX;
});

viewerImage.addEventListener("touchend", function(e) {

  touchEndX = e.changedTouches[0].screenX;

  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) < 40) return;

  if (distance < 0) {
    nextImage();
  } else {
    previousImage();
  }

});


/* =========================================================
   SIZE
========================================================= */

function selectSize(size) {

  selectedSize = size;

  updateSizeButtons();

  updateDetailWishlistButton();

  updateDetailCartButton();
}

function updateSizeButtons() {

  document.querySelectorAll("#sizeOptions button")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.size === selectedSize
      );

    });
}


/* =========================================================
   WISHLIST
========================================================= */

/* =========================================================
   WISHLIST + CART
========================================================= */

/* ---------------- WISHLIST HELPERS ---------------- */

function getWishlistItem(productId, colorName = null) {
  return wishlist.find(item =>
    item.productId === productId &&
    (!colorName || item.color === colorName)
  );
}

function isProductWishlisted(productId) {
  return wishlist.some(item =>
    item.productId === productId
  );
}


/* ---------------- WISHLIST ADD ---------------- */

function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  /* Already wishlisted → REMOVE */
  const existing = wishlist.find(item =>
    item.productId === productId
  );

  if (existing) {
    wishlist = wishlist.filter(item =>
      item.productId !== productId
    );

    saveWishlist();
    renderProducts();
    updateWishlistCount();
    renderWishlist();

    if (currentProduct && currentProduct.id === productId) {
      updateDetailWishlistButton();
    }

    return;
  }

  /* Not wishlisted → open product and select size */
  if (!currentProduct || currentProduct.id !== productId) {
    openProduct(productId, 0);

    setTimeout(() => {
      alert("Please select a size first.");
    }, 100);

    return;
  }

  if (!selectedSize) {
    alert("Please select a size first.");
    return;
  }

  const color = getCurrentColor();

  wishlist.push({
    productId: product.id,
    color: color.name,
    size: selectedSize
  });

  saveWishlist();
  renderProducts();
  updateWishlistCount();
  updateDetailWishlistButton();
  renderWishlist();
}


/* ---------------- DETAIL WISHLIST ---------------- */

function toggleCurrentWishlist() {

  if (!currentProduct) return;

  toggleWishlist(currentProduct.id);
}


/* ---------------- WISHLIST BUTTON ---------------- */

function updateDetailWishlistButton() {

  const button =
    document.getElementById("detailWishlistBtn");

  if (!button || !currentProduct) return;

  const color = getCurrentColor();

  const item =
    getWishlistItem(
      currentProduct.id,
      color.name
    );

  if (item) {

    button.textContent = "♥";

    button.classList.add("active");

    button.setAttribute(
      "aria-label",
      `Wishlisted • Size ${item.size}`
    );

    button.title =
      `Wishlist • Size ${item.size}`;

  } else {

    button.textContent = "♡";

    button.classList.remove("active");

    button.setAttribute(
      "aria-label",
      "Add to wishlist"
    );

    button.title =
      "Select size and add to wishlist";

  }
}


/* ---------------- WISHLIST COUNT ---------------- */

function updateWishlistCount() {

  const count =
    document.getElementById("wishlistCount");

  if (!count) return;

  count.textContent = wishlist.length;

  count.classList.toggle(
    "show",
    wishlist.length > 0
  );
}


/* ---------------- OPEN WISHLIST ---------------- */

function openWishlist() {

  const overlay =
    document.getElementById("wishlistOverlay");

  if (!overlay) return;

  overlay.classList.add("active");

  document.body.classList.add("no-scroll");

  renderWishlist();
}


/* ---------------- CLOSE WISHLIST ---------------- */

function closeWishlist() {

  const overlay =
    document.getElementById("wishlistOverlay");

  if (!overlay) return;

  overlay.classList.remove("active");

  document.body.classList.remove("no-scroll");
}


/* ---------------- REMOVE WISHLIST ---------------- */

function removeFromWishlist(productId, colorName, size) {

  wishlist =
    wishlist.filter(item =>
      !(
        item.productId === productId &&
        item.color === colorName &&
        item.size === size
      )
    );

  saveWishlist();

  renderProducts();
  updateWishlistCount();
  renderWishlist();

  if (
    currentProduct &&
    currentProduct.id === productId
  ) {
    updateDetailWishlistButton();
  }
}


/* ---------------- WISHLIST → CART ---------------- */

function wishlistAddToCart(productId, colorName, size) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const color =
    product.colors.find(c => c.name === colorName) ||
    product.colors[0];

  const existing = cart.find(item =>
    item.productId === productId &&
    item.color === color.name &&
    item.size === size
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      color: color.name,
      size: size,
      image: color.images[0],
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();
  renderCart();

  if (
    currentProduct &&
    currentProduct.id === productId &&
    selectedSize === size &&
    getCurrentColor().name === color.name
  ) {
    updateDetailCartButton();
  }

  renderWishlist();
}

/* ---------------- RENDER WISHLIST ---------------- */

function renderWishlist() {

  const container =
    document.getElementById("wishlistItems");

  if (!container) return;

  if (!wishlist.length) {

    container.innerHTML = `

      <div class="wishlist-empty">

        <div class="wishlist-empty-icon">
          ♡
        </div>

        <h3>Your wishlist is empty</h3>

        <p>
          Save your favourite styles here
          and shop them whenever you're ready.
        </p>

        <button
          class="primary-btn"
          onclick="closeWishlist(); scrollToShop();"
        >
          EXPLORE COLLECTION
        </button>

      </div>

    `;

    return;
  }

  container.innerHTML =
    wishlist.map(item => {

      const product =
        products.find(
          p => p.id === item.productId
        );

      if (!product) return "";

      const color =
        product.colors.find(
          c => c.name === item.color
        ) || product.colors[0];

      return `

        <div class="wishlist-card">

          <img
            src="${color.images[0]}"
            alt="${product.name}"
            onclick="
              openProduct(
                '${product.id}',
                ${product.colors.indexOf(color)}
              );
              closeWishlist();
            "
            onerror="handleImageError(this)"
          >

          <div class="wishlist-info">

            <h4>
              ${product.name}
            </h4>

            <p>
              ${money(product.price)}
            </p>

            <div class="wishlist-meta">

              <span>
                Color: ${color.name}
              </span>

              <span>
                Size: ${item.size}
              </span>

            </div>

            <div class="wishlist-actions">

              <button
                class="wishlist-view"
                onclick="
                  wishlistAddToCart(
                    '${product.id}',
                    '${color.name}',
                    '${item.size}'
                  )
                "
              >
                ADD TO CART
              </button>

              <button
                class="wishlist-remove"
                onclick="
                  removeFromWishlist(
                    '${product.id}',
                    '${color.name}',
                    '${item.size}'
                  )
                "
              >
                REMOVE
              </button>

            </div>

          </div>

        </div>

      `;

    }).join("");
}


/* ---------------- SAVE WISHLIST ---------------- */

function saveWishlist() {

  localStorage.setItem(
    "neFashionsWishlist",
    JSON.stringify(wishlist)
  );
}


/* =========================================================
   CART
========================================================= */


/* ---------------- ADD TO CART ---------------- */

function addCurrentToCart() {

  if (!currentProduct) return;

  if (!selectedSize) {

    alert("Please select a size.");

    return;
  }

  const color =
    getCurrentColor();

  const existing =
    cart.find(item =>
      item.productId === currentProduct.id &&
      item.color === color.name &&
      item.size === selectedSize
    );

  if (existing) {

    existing.quantity += 1;

  } else {

    cart.push({

      productId: currentProduct.id,

      name: currentProduct.name,

      price: currentProduct.price,

      color: color.name,

      size: selectedSize,

      image: color.images[0],

      quantity: 1

    });

  }

  saveCart();

  updateCartCount();

  renderCart();

  updateDetailCartButton();
}


/* ---------------- PRODUCT PAGE CART BUTTON ---------------- */

function updateDetailCartButton() {

  if (!currentProduct) return;

  const button =
    document.getElementById("detailAddToCartBtn") ||
    document.querySelector(
      'button[onclick*="addCurrentToCart"]'
    );

  if (!button) return;

  if (!selectedSize) {

    button.innerHTML = "ADD TO CART";
    button.classList.remove("added");

    return;
  }

  const color = getCurrentColor();

  const cartItem = cart.find(item =>
    item.productId === currentProduct.id &&
    item.color === color.name &&
    item.size === selectedSize
  );

  /* Product is already in cart */
  if (cartItem) {

    button.innerHTML = `
      <span class="cart-qty-minus"
            onclick="event.stopPropagation(); changeCurrentProductQuantity(-1)">
        −
      </span>

      <span class="cart-qty-number">
        ${cartItem.quantity}
      </span>

      <span class="cart-qty-plus"
            onclick="event.stopPropagation(); changeCurrentProductQuantity(1)">
        +
      </span>
    `;

    button.classList.add("added");

  } else {

    button.innerHTML = "ADD TO CART";
    button.classList.remove("added");

  }
}
function changeCurrentProductQuantity(change) {

  if (!currentProduct || !selectedSize) return;

  const color = getCurrentColor();

  const cartItem = cart.find(item =>
    item.productId === currentProduct.id &&
    item.color === color.name &&
    item.size === selectedSize
  );

  if (!cartItem) return;

  cartItem.quantity += change;

  if (cartItem.quantity <= 0) {
    cart = cart.filter(item => item !== cartItem);
  }

  saveCart();
  updateCartCount();
  renderCart();
  updateDetailCartButton();
}

/* ---------------- BUY NOW ---------------- */

function buyCurrentNow() {

  if (!currentProduct) return;

  if (!selectedSize) {

    alert("Please select a size.");

    return;
  }

  addCurrentToCart();

  closeProduct();

  setTimeout(() => {
    openCart();
  }, 150);
}


/* ---------------- OPEN CART ---------------- */

function openCart() {

  document.getElementById("cartOverlay")
    .classList.add("active");

  renderCart();
}


/* ---------------- CLOSE CART ---------------- */

function closeCart() {

  document.getElementById("cartOverlay")
    .classList.remove("active");
}


/* ---------------- RENDER CART ---------------- */

function renderCart() {

  const container =
    document.getElementById("cartItems");

  if (!container) return;

  if (!cart.length) {

    container.innerHTML = `

      <div class="empty-message">
        Your cart is empty.
      </div>

    `;

    document.getElementById("cartTotal").textContent =
      "₹0";

    return;
  }

  container.innerHTML =
    cart.map((item, index) => `

      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${item.name}"
          onerror="handleImageError(this)"
        >

        <div class="cart-item-info">

          <h3>
            ${item.name}
          </h3>

          <div class="cart-meta">

  <div>
    Color: ${item.color}
  </div>

  <div class="cart-size-row">

  <span class="cart-size-label">Size:</span>

  <div class="cart-size-options">
    ${["S", "M", "L", "XL", "XXL"].map(size => `
      <button
        type="button"
        class="cart-size-option ${item.size === size ? "active" : ""}"
        onclick="changeCartSize(${index}, '${size}')"
      >
        ${size}
      </button>
    `).join("")}
  </div>

</div>

</div>

          <div class="cart-item-price">
            ${money(item.price)}
          </div>

          <div class="quantity">

            <button
              onclick="changeQuantity(${index}, -1)"
            >
              −
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              onclick="changeQuantity(${index}, 1)"
            >
              +
            </button>

          </div>

          <button
            class="remove-item"
            onclick="removeCartItem(${index})"
          >
            REMOVE
          </button>

        </div>

      </div>

    `).join("");

  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

  document.getElementById("cartTotal").textContent =
    money(total);
}
function changeCartSize(index, newSize) {

  if (!cart[index]) return;

  const item = cart[index];

  const existing = cart.find((cartItem, cartIndex) =>
    cartIndex !== index &&
    cartItem.productId === item.productId &&
    cartItem.color === item.color &&
    cartItem.size === newSize
  );

  if (existing) {
    existing.quantity += item.quantity;
    cart.splice(index, 1);
  } else {
    item.size = newSize;
  }

  saveCart();
  renderCart();
  updateCartCount();
  updateDetailCartButton();
}

/* ---------------- CHANGE QUANTITY ---------------- */

function changeQuantity(index, change) {

  if (!cart[index]) return;

  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {

    cart.splice(index, 1);

  }

  saveCart();

  renderCart();

  updateCartCount();

  updateDetailCartButton();
}


/* ---------------- REMOVE CART ITEM ---------------- */

function removeCartItem(index) {

  if (!cart[index]) return;

  cart.splice(index, 1);

  saveCart();

  renderCart();

  updateCartCount();

  updateDetailCartButton();
}


/* =========================================================
   CHECKOUT
========================================================= */

let checkoutCustomer = null;


/* ---------------- OPEN CHECKOUT ---------------- */

function checkout() {

  if (!cart.length) {

    alert("Your cart is empty.");

    return;
  }

  const checkoutOverlay =
    document.getElementById("checkoutOverlay");

  if (!checkoutOverlay) return;

  /* Update total */

  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

  document.getElementById("checkoutTotal").textContent =
    money(total);

  /* Reset checkout view */

  document.getElementById("checkoutForm").style.display =
    "block";

  document.getElementById("checkoutOptions").style.display =
    "none";

  checkoutOverlay.classList.add("active");

  document.body.classList.add("no-scroll");

}


/* ---------------- CLOSE CHECKOUT ---------------- */

function closeCheckout() {

  const checkoutOverlay =
    document.getElementById("checkoutOverlay");

  if (!checkoutOverlay) return;

  checkoutOverlay.classList.remove("active");

  document.body.classList.remove("no-scroll");

}


/* ---------------- CUSTOMER DETAILS ---------------- */

function continueCheckout(event) {

  event.preventDefault();

  if (!cart.length) {

    alert("Your cart is empty.");

    closeCheckout();

    return;
  }

  const phone =
    document.getElementById("customerPhone").value.trim();

  const pincode =
    document.getElementById("customerPincode").value.trim();


  /* Validate phone */

  if (!/^[0-9]{10}$/.test(phone)) {

    alert("Please enter a valid 10-digit mobile number.");

    return;
  }


  /* Validate pincode */

  if (!/^[0-9]{6}$/.test(pincode)) {

    alert("Please enter a valid 6-digit pincode.");

    return;
  }


  /* Save customer details temporarily */

  checkoutCustomer = {

    name:
      document.getElementById("customerName")
        .value
        .trim(),

    phone:
      phone,

    email:
      document.getElementById("customerEmail")
        .value
        .trim(),

    address:
      document.getElementById("customerAddress")
        .value
        .trim(),

    city:
      document.getElementById("customerCity")
        .value
        .trim(),

    state:
      document.getElementById("customerState")
        .value
        .trim(),

    pincode:
      pincode

  };


  /* Show order options */

  document.getElementById("checkoutForm").style.display =
    "none";

  document.getElementById("checkoutOptions").style.display =
    "block";

}


/* ---------------- BACK TO DETAILS ---------------- */

function backToCustomerDetails() {

  document.getElementById("checkoutOptions").style.display =
    "none";

  document.getElementById("checkoutForm").style.display =
    "block";

}


/* ---------------- ORDER VIA WHATSAPP ---------------- */

function orderViaWhatsApp() {

  if (!checkoutCustomer) {

    alert("Please enter your customer details first.");

    return;
  }

  if (!cart.length) {

    alert("Your cart is empty.");

    return;
  }


  const whatsappNumber =
    "919392888728";


  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );


  let message =
    `Hi NE Fashions,%0A%0A` +

    `I would like to place an order.%0A%0A` +

    `*Customer Details*%0A` +

    `Name: ${encodeURIComponent(checkoutCustomer.name)}%0A` +

    `Phone: ${encodeURIComponent(checkoutCustomer.phone)}%0A` +

    `Email: ${encodeURIComponent(checkoutCustomer.email)}%0A` +

    `Address: ${encodeURIComponent(checkoutCustomer.address)}%0A` +

    `City: ${encodeURIComponent(checkoutCustomer.city)}%0A` +

    `State: ${encodeURIComponent(checkoutCustomer.state)}%0A` +

    `Pincode: ${encodeURIComponent(checkoutCustomer.pincode)}%0A%0A` +

    `*Order Details*%0A`;


  cart.forEach((item, index) => {

    const subtotal =
      item.price * item.quantity;

    message +=
      `${index + 1}. ${encodeURIComponent(item.name)}%0A` +

      `Color: ${encodeURIComponent(item.color)}%0A` +

      `Size: ${encodeURIComponent(item.size)}%0A` +

      `Qty: ${item.quantity}%0A` +

      `Price: ${encodeURIComponent(money(item.price))}%0A` +

      `Subtotal: ${encodeURIComponent(money(subtotal))}%0A%0A`;

  });


  message +=
    `*Order Total: ${encodeURIComponent(money(total))}*%0A%0A` +

    `Please confirm my order. Thank you!`;


  window.open(
    `https://wa.me/${whatsappNumber}?text=${message}`,
    "_blank"
  );

}


/* =========================================================
   UPI PAYMENT
========================================================= */

function payViaUPI() {

  if (!checkoutCustomer) {
    alert("Please enter your customer details first.");
    return;
  }

  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

  const checkoutOptions =
    document.getElementById("checkoutOptions");

  const upiOverlay =
    document.getElementById("upiOverlay");

  const upiTotal =
    document.getElementById("upiTotal");

  if (!upiOverlay || !upiTotal) {
    alert("UPI payment screen could not be opened.");
    return;
  }

  upiTotal.textContent = money(total);

  if (checkoutOptions) {
    checkoutOptions.style.display = "none";
  }

  upiOverlay.classList.add("active");

  document.body.classList.add("no-scroll");
}


/* ---------------- CLOSE UPI ---------------- */

function closeUPI() {

  const upiOverlay =
    document.getElementById("upiOverlay");

  if (!upiOverlay) return;

  upiOverlay.classList.remove("active");

  document.body.classList.remove("no-scroll");
}


/* ---------------- BACK TO CHECKOUT OPTIONS ---------------- */

function backToCheckoutOptions() {

  closeUPI();

  const checkoutOverlay =
    document.getElementById("checkoutOverlay");

  const checkoutOptions =
    document.getElementById("checkoutOptions");

  if (checkoutOverlay) {
    checkoutOverlay.classList.add("active");
  }

  if (checkoutOptions) {
    checkoutOptions.style.display = "block";
  }

  document.body.classList.add("no-scroll");
}


/* ---------------- COPY UPI ID ---------------- */

function copyUPIId() {

  const upiId =
    document.getElementById("upiId");

  if (!upiId) return;

  const text =
    upiId.textContent.trim();

  navigator.clipboard.writeText(text)
    .then(() => {
      alert("UPI ID copied.");
    })
    .catch(() => {
      alert("Unable to copy UPI ID.");
    });
}


/* ---------------- SUBMIT UPI ORDER ---------------- */

async function submitUPIOrder(event) {
  event.preventDefault();

  if (!checkoutCustomer) {
    alert("Customer details are missing. Please go back and enter your details.");
    return;
  }

  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  const screenshotInput = document.getElementById("paymentScreenshot");
  const paymentName = document.getElementById("paymentName").value.trim();
  const paymentPhone = document.getElementById("paymentPhone").value.trim();
  const paymentCompleted = document.getElementById("paymentCompleted").checked;

  // Validate payment details
  if (!screenshotInput.files || !screenshotInput.files.length) {
    alert("Please upload your payment screenshot.");
    return;
  }

  if (!paymentName) {
    alert("Please enter the name shown in your payment.");
    return;
  }

  if (!/^[0-9]{10}$/.test(paymentPhone)) {
    alert("Please enter a valid 10-digit payment phone number.");
    return;
  }

  if (!paymentCompleted) {
    alert("Please confirm that you have completed the payment.");
    return;
  }

  const screenshotFile = screenshotInput.files[0];

  // Allow only image files
  if (!screenshotFile.type.startsWith("image/")) {
    alert("Please upload a valid image file.");
    return;
  }

  // Limit screenshot size to 5 MB
  if (screenshotFile.size > 5 * 1024 * 1024) {
    alert("Payment screenshot must be less than 5 MB.");
    return;
  }

  const submitButton = document.querySelector(
    '#upiForm button[type="submit"]'
  );

  const originalButtonText = submitButton.textContent;

  try {
    submitButton.disabled = true;
    submitButton.textContent = "SUBMITTING...";

    // --------------------------------------------------
    // 1. CREATE / FIND CUSTOMER
    // --------------------------------------------------

    let customerId = null;

    const { data: existingCustomer, error: customerFindError } =
      await supabaseClient
        .from("customers")
        .select("id")
        .eq("phone", checkoutCustomer.phone)
        .maybeSingle();

    if (customerFindError) {
      throw customerFindError;
    }

    if (existingCustomer) {
      customerId = existingCustomer.id;

          } else {

      const { error: customerInsertError } =
        await supabaseClient
          .from("customers")
          .insert({
            name: checkoutCustomer.name,
            phone: checkoutCustomer.phone,
            email: checkoutCustomer.email
          });

      if (customerInsertError) {
        throw customerInsertError;
      }

      // Get the newly created customer's ID
      const { data: insertedCustomer, error: insertedCustomerError } =
        await supabaseClient
          .from("customers")
          .select("id")
          .eq("phone", checkoutCustomer.phone)
          .maybeSingle();

      if (insertedCustomerError) {
        throw insertedCustomerError;
      }

      if (!insertedCustomer) {
        throw new Error(
          "Customer was created, but customer ID could not be found."
        );
      }

      customerId = insertedCustomer.id;
    }
    
    // --------------------------------------------------
// 2. SAVE CUSTOMER ADDRESS
// --------------------------------------------------
console.log("ADDRESS DATA:", {
  customer_id: customerId,
  full_name: checkoutCustomer.name,
  phone: checkoutCustomer.phone,
  address_line: checkoutCustomer.address,
  city: checkoutCustomer.city,
  state: checkoutCustomer.state,
  pincode: checkoutCustomer.pincode
});


const { data: addressId, error: addressInsertError } =
  await supabaseClient.rpc("create_checkout_address", {
    p_customer_id: customerId,
    p_full_name: checkoutCustomer.name,
    p_phone: checkoutCustomer.phone,
    p_address_line: checkoutCustomer.address,
    p_city: checkoutCustomer.city,
    p_state: checkoutCustomer.state,
    p_pincode: checkoutCustomer.pincode
  });

if (addressInsertError) {
  throw new Error(
    "Address save failed: " + addressInsertError.message
  );
}

if (!addressId) {
  throw new Error("No address ID was returned.");
}+

    // --------------------------------------------------
    // 3. CALCULATE ORDER TOTAL
    // --------------------------------------------------

    const subtotal = cart.reduce(
      (sum, item) => sum + (Number(item.price) * Number(item.quantity)),
      0
    );

    const shippingFee = 0;
    const discount = 0;
    const totalAmount = subtotal + shippingFee - discount;


    // --------------------------------------------------
    // 4. GENERATE UNIQUE ORDER NUMBER
    // --------------------------------------------------

    const orderNumber =
      "NEF-" +
      Date.now().toString().slice(-8);


    // --------------------------------------------------
    // 5. UPLOAD PAYMENT SCREENSHOT
    // --------------------------------------------------

    const fileExtension =
      screenshotFile.name.split(".").pop().toLowerCase();

    const fileName =
      `${orderNumber}-${Date.now()}.${fileExtension}`;

    const filePath =
      `payments/${fileName}`;

    const { error: uploadError } =
      await supabaseClient
        .storage
        .from("payment-screenshots")
        .upload(filePath, screenshotFile, {
          cacheControl: "3600",
          upsert: false,
          contentType: screenshotFile.type
        });

    if (uploadError) {
      throw uploadError;
    }


    // --------------------------------------------------
    // 6. CREATE ORDER
    // --------------------------------------------------

    const { data: newOrder, error: orderError } =
      await supabaseClient
        .from("orders")
        .insert({
          order_number: orderNumber,
          customer_id: customerId,
          address_id: addressId,

          subtotal: subtotal,
          shipping_fee: shippingFee,
          discount: discount,
          total_amount: totalAmount,

          payment_status: "pending",
          order_status: "pending",

          payment_screenshot_url: filePath,
          payment_name: paymentName,
          payment_phone: paymentPhone,

          notes: "UPI payment submitted. Payment verification pending."
        })
        .select("id, order_number")
        .single();

    if (orderError) {
      throw orderError;
    }

```js
// SAVE ORDER ITEMS
const orderItems = [];

for (const item of cart) {
  // Match website product with database product
  const { data: product, error: productError } =
    await supabaseClient
      .from("products")
      .select("id, name, price")
      .eq("name", item.name)
      .eq("active", true)
      .maybeSingle();

  if (productError) {
    throw new Error("Product lookup failed: " + productError.message);
  }

  if (!product) {
    throw new Error(
      'Product "' + item.name +
      '" is not in the database. Add this product to Supabase first.'
    );
  }

  // Find selected color variant
  let variantId = null;

  if (item.color) {
    const { data: variant, error: variantError } =
      await supabaseClient
        .from("product_variants")
        .select("id")
        .eq("product_id", product.id)
        .ilike("color_name", item.color)
        .eq("active", true)
        .maybeSingle();

    if (variantError) {
      throw new Error("Color lookup failed: " + variantError.message);
    }

    if (!variant) {
      throw new Error(
        'Color "' + item.color +
        '" is not available for "' + product.name + '".'
      );
    }

    variantId = variant.id;
  }

  const quantity = Number(item.quantity);
  const unitPrice = Number(item.price);
  const totalPrice = unitPrice * quantity;

  if (!Number.isFinite(quantity) || quantity < 1) {
    throw new Error("Invalid quantity for " + product.name);
  }

  if (!Number.isFinite(unitPrice) || unitPrice < 0) {
    throw new Error("Invalid price for " + product.name);
  }

  orderItems.push({
    order_id: newOrder.id,
    product_id: product.id,
    variant_id: variantId,
    size: item.size || null,
    quantity: quantity,
    unit_price: unitPrice,
    total_price: totalPrice
  });
}

if (orderItems.length > 0) {
  const { error: orderItemsError } =
    await supabaseClient
      .from("order_items")
      .insert(orderItems);

  if (orderItemsError) {
    throw new Error("Order items save failed: " + orderItemsError.message);
  }
}
```

    // --------------------------------------------------
    // 7. SHOW SUCCESS SCREEN
    // --------------------------------------------------

    try {
  const { data: emailResult, error: emailError } =
    await supabaseClient.functions.invoke("send-order-email", {
      body: {
        orderNumber: newOrder.order_number,
        customerName: checkoutCustomer.name,
        customerEmail: checkoutCustomer.email,
        customerPhone: checkoutCustomer.phone,
        totalAmount: totalAmount,
        paymentStatus: "Payment verification pending"
      }
    });

  if (emailError) {
    console.error("Email notification error:", emailError);
  } else {
    console.log("Order email sent:", emailResult);
  }
} catch (emailError) {

  console.error("Email function error:", emailError);

}

showOrderSuccess(newOrder.order_number);

} catch (error) {

  console.error("UPI ORDER ERROR:", error);

  alert(
    "ORDER ERROR:\n\n" +
    (error?.message || error?.details || JSON.stringify(error))
  );

} finally {

    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
}


/* =========================================================
   SHARE
========================================================= */


async function shareProduct() {

  if (!currentProduct) return;

  const color = getCurrentColor();

  const shareData = {
    title: currentProduct.name,
    text:
      `${currentProduct.name} - ${color.name} | NE FASHIONS`,
    url: window.location.href
  };

  if (navigator.share) {

    try {
      await navigator.share(shareData);
    } catch (error) {
      // User closed share sheet.
    }

  } else {

    try {

      await navigator.clipboard.writeText(
        window.location.href
      );

      alert("Product link copied.");

    } catch (error) {

      alert("Copy the website link to share this product.");

    }

  }
}


/* =========================================================
   PRODUCT CLOSE
========================================================= */

function closeProduct() {

  document.getElementById("productDetail")
    .classList.remove("active");

  document.body.style.overflow = "";

  closeImageViewer();
}


/* =========================================================
   MENU
========================================================= */

function toggleMenu() {

  const menu = document.getElementById("mobileMenu");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}

function closeMenu() {

  document.getElementById("mobileMenu")
    .classList.remove("active");

  document.body.classList.remove("no-scroll");
}

/* =========================================================
   SEARCH / CATEGORY
========================================================= */

function focusSearch() {

  document.getElementById("searchInput")
    .scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  setTimeout(() => {
    document.getElementById("searchInput").focus();
  }, 400);
}

function scrollToShop() {

  document.getElementById("shop")
    .scrollIntoView({
      behavior: "smooth"
    });
}

/* =========================================================
   SHOP BY CATEGORY
========================================================= */

function filterCategory(category) {

  const shop = document.getElementById("shop");
  const productGrid = document.getElementById("productGrid");

  if (!shop || !productGrid) return;


  // Get only selected category products
  const filtered = products.filter(product =>
    product.category === category
  );

  productGrid.innerHTML = filtered.map(product => {

    const firstColor = product.colors[0];

    return `
      <article class="product-card">

        <div class="product-image-wrap"
             onclick="openProduct('${product.id}', 0)">

          <img
            id="card-image-${product.id}"
            src="${firstColor.images[0]}"
            alt="${product.name}"
            onerror="handleImageError(this)"
          >

        </div>

        <div class="product-info">

          <h3>${product.name}</h3>

          <div class="product-price">
            ${money(product.price)}
          </div>

          ${
            product.colors.length > 1
            ?
            `
            <div class="card-colors">

              ${product.colors.map((color, index) => `
                <button
                  class="card-color ${index === 0 ? "active" : ""}"
                  title="${color.name}"
                  onclick="event.stopPropagation(); changeCardColor('${product.id}', ${index})"
                >
                  <span
                    class="card-color-circle"
                    style="background-color: ${getColorValue(color.name)};"
                  ></span>
                </button>
              `).join("")}

              <span class="color-label">
                ${product.colors.length} Colors
              </span>

            </div>
            `
            : ""
          }

        </div>

      </article>
    `;

  }).join("");

  /* Open category neatly at Shop section */
  const headerHeight =
    document.querySelector(".header")?.offsetHeight || 0;

  const announcementHeight =
    document.querySelector(".announcement")?.offsetHeight || 0;

  const targetPosition =
    shop.getBoundingClientRect().top +
    window.pageYOffset -
    headerHeight -
    announcementHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: "auto"
  });

  shop.classList.add("category-view-active");

  /* Create Back button */
  let backButton = document.getElementById("categoryBackButton");

  if (!backButton) {

    backButton = document.createElement("button");

    backButton.id = "categoryBackButton";
    backButton.type = "button";
    backButton.textContent = "← BACK TO SHOP";

    backButton.onclick = restoreShopView;

    shop.insertBefore(backButton, productGrid);
  }

  backButton.style.display = "block";
}


/* =========================================================
   RESTORE ALL SHOP PRODUCTS
========================================================= */

function restoreShopView() {

  const shop = document.getElementById("shop");
  const productGrid = document.getElementById("productGrid");

  if (!shop || !productGrid) return;

  /* Restore ALL original Shop products */
  renderProducts();

  /* Remove category mode */
  shop.classList.remove("category-view-active");

  /* Hide Back button */
  const backButton =
    document.getElementById("categoryBackButton");

  if (backButton) {
    backButton.style.display = "none";
  }

  updateHeaderCounts();

  /* Return to Shop section */
  const headerHeight =
    document.querySelector(".header")?.offsetHeight || 0;

  const announcementHeight =
    document.querySelector(".announcement")?.offsetHeight || 0;

  const targetPosition =
    shop.getBoundingClientRect().top +
    window.pageYOffset -
    headerHeight -
    announcementHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: "auto"
  });
}


function scrollToContact() {

  document.getElementById("contact")
    .scrollIntoView({
      behavior: "smooth"
    });
}


/* =========================================================
   SIZE GUIDE
========================================================= */

function openSizeGuide() {

  document.getElementById("sizeGuide")
    .classList.add("active");
}

function closeSizeGuide() {

  document.getElementById("sizeGuide")
    .classList.remove("active");
}


/* =========================================================
   POLICIES
========================================================= */

function openPolicy(type) {

  const content =
    document.getElementById("policyContent");

  if (type === "return") {

    content.innerHTML = `
      <h2>Return & Exchange</h2>

      <h3>Easy Returns</h3>
      <p>
        We want you to love your NE FASHIONS purchase.
        Eligible products can be returned or exchanged
        within the specified return period.
      </p>

      <h3>Condition</h3>
      <p>
        Products must be unused, unworn, unwashed and
        returned with the original tags and packaging.
      </p>

      <h3>Exchange</h3>
      <p>
        Size exchanges may be available depending on stock.
      </p>

      <h3>Important</h3>
      <p>
        This is a sample policy. Replace this section with
        your final business return policy before launch.
      </p>
    `;

  } else {

    content.innerHTML = `
      <h2>Shipping Policy</h2>

      <h3>Processing</h3>
      <p>
        Orders are generally processed within the stated
        processing period after payment confirmation.
      </p>

      <h3>Delivery</h3>
      <p>
        Delivery timelines depend on the destination and
        courier service.
      </p>

      <h3>Tracking</h3>
      <p>
        Tracking details can be shared once the order is
        dispatched.
      </p>

      <h3>Important</h3>
      <p>
        This is a sample policy. Replace this section with
        your final NE FASHIONS shipping policy.
      </p>
    `;
  }

  document.getElementById("policyModal")
    .classList.add("active");
}

function closePolicy() {

  document.getElementById("policyModal")
    .classList.remove("active");
}


/* =========================================================
   IMAGE ERROR
========================================================= */

function handleImageError(image) {

  image.onerror = null;

  image.style.opacity = ".25";
}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener("keydown", function(event) {

if (event.key === "Escape") {
  closeMenu();
  closeProduct();
  closeCart();
  closeWishlist();
  closeCheckout();
  closeUPI();
  closeOrderSuccess();
  closeSizeGuide();
  closePolicy();
  closeImageViewer();
}


  if (
    document.getElementById("imageViewer")
      .classList.contains("active")
  ) {

    if (event.key === "ArrowRight") {
      nextImage();
    }

    if (event.key === "ArrowLeft") {
      previousImage();
    }

  }

});

/* =====================================================
   ORDER SUCCESS
===================================================== */

function showOrderSuccess(orderNumber) {

  if (!checkoutCustomer) {
    alert("Customer details are missing.");
    return;
  }

  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  const orderSuccessOverlay =
    document.getElementById("orderSuccessOverlay");

  if (!orderSuccessOverlay) {
    alert("Order success screen could not be opened.");
    return;
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.quantity),
    0
  );

  document.getElementById("successOrderNumber").textContent =
    orderNumber || "NEF-0001";

  document.getElementById("successCustomerName").textContent =
    checkoutCustomer.name;

  document.getElementById("successCustomerPhone").textContent =
    checkoutCustomer.phone;

  document.getElementById("successOrderTotal").textContent =
    money(total);

  document.getElementById("successPaymentMethod").textContent =
    "UPI";

  document.getElementById("successPaymentStatus").textContent =
    "Payment Verification Pending";

  closeUPI();
  closeCheckout();

  orderSuccessOverlay.classList.add("active");

  document.body.classList.add("no-scroll");
}


function closeOrderSuccess() {

  const orderSuccessOverlay =
    document.getElementById("orderSuccessOverlay");

  if (!orderSuccessOverlay) return;

  orderSuccessOverlay.classList.remove("active");

  document.body.classList.remove("no-scroll");
}


function continueShoppingAfterOrder() {

  closeOrderSuccess();

  cart = [];

  saveCart();

  updateCartCount();

  scrollToShop();
}


function contactForOrder() {

  const phoneNumber =
    "919392888728";

  const message =
    "Hi NE Fashions, I have just placed an order and would like to contact you regarding my order.";

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(
    whatsappURL,
    "_blank"
  );
}
/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  renderProducts();

  updateCartCount();
  updateWishlistCount();

});