// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg",
    price: "$59.99"
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "https://images-cdn.ubuy.co.in/653dca4638b3b6351c03b03e-smart-watch-for-android-and-iphone.jpg",
    price: "$79.99"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYU-0hdaS0hno9N6orRfYCYiUsKuaEIWPIs9Lz6NCgde4XiHZ6I1jHyAr4-IfTAsnX1c&usqp=CAU",
    price: "$29.99"
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    image: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/04/rgb-lit-gaming-mechanical-keyboard.jpg",
    price: "$89.99"
  },
  {
    id: 5,
    name: "4K Monitor",
    image: "https://i.pcmag.com/imagery/roundups/01Y9bqNdRmGOzHcetHQG2FW-36.fit_lim.size_1050x.webp",
    price: "$299.99"
  },
  {
    id: 6,
    name: "Portable SSD",
    image: "https://applepremiumstore.com.ng/wp-content/uploads/2021/07/81kx0AOQ-AL._AC_SL1500_.jpg",
    price: "$119.99"
  }
];

// Function to create and append product cards
function displayProducts(productList, container) {
  container.innerHTML = ''; // Clear existing content
  productList.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <a href="#" class="btn">Add to Cart</a>
        `;
    container.appendChild(productCard);
  });
}

// Load content when the DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  const productListContainer = document.getElementById("productList");
  const featuredProductListContainer = document.getElementById("featuredProductList");
  const contactForm = document.getElementById("contactForm");

  // Load all products on the products page
  if (productListContainer) {
    displayProducts(products, productListContainer);
  }

  // Load featured products (first 3) on the home page
  if (featuredProductListContainer) {
    const featuredProducts = products.slice(0, 3);
    displayProducts(featuredProducts, featuredProductListContainer);
  }

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you shortly.");
      contactForm.reset();
    });
  }
});
