// Sample product data
const products = [
  {
    name: "Wireless Headphones",
    image: "https://via.placeholder.com/200x150?text=Headphones",
    price: "$59.99"
  },
  {
    name: "Smart Watch",
    image: "https://via.placeholder.com/200x150?text=Watch",
    price: "$79.99"
  },
  {
    name: "Gaming Mouse",
    image: "https://via.placeholder.com/200x150?text=Mouse",
    price: "$29.99"
  }
];

// Load products dynamically
window.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");
  if (productList) {
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      `;
      productList.appendChild(productCard);
    });
  }

  // Contact form validation placeholder
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you for contacting Amerce!");
      contactForm.reset();
    });
  }
});
