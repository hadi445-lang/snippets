// Simulated API response with product data
const apiResponse = [
    { id: 1, name: 'Laptop', price: 1000, quantity: 20, category: 'Electronics' },
    { id: 2, name: 'Shirt', price: 20, quantity: 0, category: 'Clothing' },
    { id: 3, name: 'Smartphone', price: 600, quantity: 15, category: 'Electronics' },
    { id: 4, name: 'Headphones', price: 150, quantity: 5, category: 'Electronics' },
    { id: 5, name: 'Shoes', price: undefined, quantity: 10, category: 'Footwear' } // Missing price
];

// Function to process the product data
function processProductData(data) {
    // Step 1: Filter out products that are out of stock
    const inStockProducts = data.filter(product => product.quantity > 0);

    // Step 2: Apply a 10% discount to the price of each in-stock product
    const discountedProducts = inStockProducts.map(product => ({
        ...product, // Copy the product properties
        price: product.price ? product.price * 0.9 : 0 // Apply discount, handle missing price
    }));

    // Step 3: Return the transformed data
    return discountedProducts;
}

// Step 4: Process the product data and handle any errors
try {
    const processedData = processProductData(apiResponse);

    // Step 5: Output the result
    processedData.forEach(({ name, price, quantity, category }) => {
        console.log(`Product: ${name}, Price: $${price.toFixed(2)}, Quantity: ${quantity}, Category: ${category}`);
    });
} catch (error) {
    console.error('An error occurred during data processing:', error);l
}