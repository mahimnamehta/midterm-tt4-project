import './list-products.scss';

// Dummy Product Data
const products = [
    { image: "assets/images/product1.jpg", title: "Product 1", desc: "A short description of product 1.", price: "$10.99" },
    { image: "assets/images/product2.jpg", title: "Product 2", desc: "A short description of product 2.", price: "$12.99" },
    { image: "assets/images/product3.jpg", title: "Product 3", desc: "A short description of product 3.", price: "$8.99" },
    { image: "assets/images/product4.jpg", title: "Product 4", desc: "A short description of product 4.", price: "$15.99" },
    { image: "assets/images/product5.jpg", title: "Product 5", desc: "A short description of product 5.", price: "$9.49" },
    { image: "assets/images/product6.jpg", title: "Product 6", desc: "A short description of product 6.", price: "$14.29" },
    { image: "assets/images/product7.jpg", title: "Product 7", desc: "A short description of product 7.", price: "$19.99" },
    { image: "assets/images/product8.jpg", title: "Product 8", desc: "A short description of product 8.", price: "$7.99" },
    { image: "assets/images/product9.jpg", title: "Product 9", desc: "A short description of product 9.", price: "$22.49" },
    { image: "assets/images/product10.jpg", title: "Product 10", desc: "A short description of product 10.", price: "$17.99" },
    { image: "assets/images/product11.jpg", title: "Product 11", desc: "A short description of product 11.", price: "$11.49" },
    { image: "assets/images/product12.jpg", title: "Product 12", desc: "A short description of product 12.", price: "$6.99" }
];

// Function to generate product cards
function generateProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.desc}</p>
                        <h6 class="text-primary">${product.price}</h6>
                        <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Run function after page loads
document.addEventListener("DOMContentLoaded", generateProducts);
