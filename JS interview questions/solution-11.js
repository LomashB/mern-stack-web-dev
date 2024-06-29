// The Array Filterer:
// You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, criterion) {
    return products.filter(product => {
        for (let key in criterion) {
            if (criterion.hasOwnProperty(key)) {
                if (product[key] !== criterion[key]) {
                    return false;
                }
            }
        }
        return true;
    });
}

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699 },
    { id: 3, name: 'Tablet', category: 'Electronics', price: 399 },
    { id: 4, name: 'Shirt', category: 'Apparel', price: 29 },
    { id: 5, name: 'Jeans', category: 'Apparel', price: 49 }
];

const filteredByCategory = filterProducts(products, { category: 'Electronics' });
console.log(filteredByCategory);

const filteredByPrice = filterProducts(products, { price: 49 });
console.log(filteredByPrice);

const filteredByName = filterProducts(products, { name: 'Laptop' });
console.log(filteredByName);
