
const service = "http://localhost:3500/api"

const getProducts = async () => {

    // let products = (await axios.get("http://localhost:3500/api/bubbles")).data;
    return await (fetch(service+'/bubbles').then(res => res.json()).then(data =>{return data}));
};

const getBundles = async () =>{
    // let allBundles = (await axios.get("http://localhost:3500/api/bundles")).data;
    let allBundles = await(fetch(service+'/bundles').then(res => res.json()).then(data =>{return data}));
    for (const index in allBundles){
        console.log(allBundles[index])
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
    for(const index in itemsList){
        let product = products.find(p => p.id == itemsList[index])
        bundle.products.push(product);
        bundle.totalPrice += product.price;
    }
    return bundle;
}

const getProductById = async id => {
    let productList = await getProducts();
    return productList.find(p => p.id == id);
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