import axios from 'axios';

const getProducts = async () => {
    let products = (await axios.get("http://localhost:3500/api/bubbles")).data;
    return products
};

const getBundles = async () =>{
    let allBundles = (await axios.get("http://localhost:3500/api/bundles")).data;
    for (const index in allBundles){
         allBundles[index].items = await getBundleItems(allBundles[index].items)
    }
    console.log("all bundles ----------> ", allBundles)
    return allBundles;
}

const getBundleItems = async (itemsList) =>{
    let products = await getProducts()
    let bundle = {
        products: [],
        totalPrice: 0
    }
    let filteredList = []

    for(const index in itemsList){
        let product = products.find(p => p.id == itemsList[index])
        bundle.products.push(product);
        bundle.totalPrice += product.price;
    }
    return bundle;
}

const getProductById = async id => {
    let productList = await getProducts();
    let product = productList.find(p => p.id == id)
    return product;
}

const addToCart = id => {
    let cart = [];
    if((localStorage.getItem("cart"))){
        cart = JSON.parse(localStorage.getItem("cart"))
    }
    cart.push(id)
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log("what")
    console.log(localStorage.getItem("cart"))
}

export {
    getProducts,
    getProductById,
    getBundles,
    addToCart
};