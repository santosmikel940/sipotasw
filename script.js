// Data produk (dapat berasal dari API atau backend)
const productDetails = [
    {
        id: 1,
        name: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique velit quis maximus consequat.",
        price: 49.99,
        image: "product1.webp"
    },
    {
        id: 2,
        name: "Product 2",
        description: "Suspendisse potenti. Vivamus pellentesque, libero eget posuere vehicula, justo libero egestas odio, a convallis felis sem non risus.",
        price: 29.99,
        image: "product2.webp"
    },
    {
        id: 3,
        name: "Product 3",
        description: "Duis non ipsum vitae nisi commodo tempus. Donec egestas sapien in consectetur feugiat.",
        price: 39.99,
        image: "product3.webp"
    },
    {
        id: 4,
        name: "Product 4",
        description: "Etiam interdum enim sit amet ligula pharetra, sit amet consectetur libero lacinia. Sed eu ullamcorper urna.",
        price: 19.99,
        image: "product4.webp"
    }
];

// Function to display product details
function displayProductDetails(productId) {
    const product = productDetails.find(item => item.id === productId);

    if (product) {
        const productDetailsElement = document.getElementById('product-details');
        productDetailsElement.innerHTML = `
            <div class="product-details">
                <div class="product-info">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p class="price">$${product.price}</p>
                    <a href="#" class="btn-buy">Buy Now</a>
                </div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
            </div>
        `;
    }
}

// Generate product items on page load
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');

    productDetails.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <a href="#" class="btn-details" onclick="displayProductDetails(${product.id})">Details</a>
        `;
        productGrid.appendChild(productItem);
    });
});
