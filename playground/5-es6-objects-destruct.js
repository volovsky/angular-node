

// Object destructuring
const product = {
    label: "bla",
    price: 3,
    stock: 30,
    rating: 4.5,
    salePrice: undefined
}

const{label:productLabel, stock, rating = 5} = product

console.log(productLabel, stock, rating)

const transaction = (type, {label, stock}) => {
        console.log(type, label, stock)
}

transaction('order', product) 
   