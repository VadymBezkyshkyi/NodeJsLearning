// Object property shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
};

console.log(user);

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
};

// const label = product.label;
// const stock = product.stock;

const {label: productLabel, stock, rating = 5} = product;
console.log(productLabel);
console.log(stock);
console.log(rating); // undefined

// We can rename variable with - {property: newName}
// Default value property = value

const transaction = (order, {label, stock}) => {
    // const {label, stock} = myProduct
    console.log(type, label, stock);
};

transaction('order', product);
