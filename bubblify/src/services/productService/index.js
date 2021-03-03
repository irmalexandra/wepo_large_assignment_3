
const service = "http://localhost:3500/api"

const getProducts = async () => {
    return await (fetch(service+'/bubbles').then(res => res.json()).then(data =>{return data}));
};

const getBundles = async () =>{
    let allBundles = await(fetch(service+'/bundles').then(res => res.json()).then(data =>{return data}));
    for (const index in allBundles){
        allBundles[index].items = await getBundleItems(allBundles[index].items)
    }
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
    return await(fetch(service+'/bubbles/' + id).then(res => res.json()).then(data =>{return data}));
}

const getBundleById = async id => {
    let bundle;
    bundle = await (fetch(service + '/bundles/' + id).then(res => res.json()).then(data => {
        return data
    }));
    return bundle
}

const addToCart = id => {
    let cart = [];
    if((localStorage.getItem("cart"))){
        cart = JSON.parse(localStorage.getItem("cart"))
        if(cart.includes(id)){
            return
        }
    }
    cart.push(id)
    localStorage.setItem("cart", JSON.stringify(cart))
}

const addBundleToCart = async bundleId => {
    let bundleItemsIds = (await getBundleById(bundleId)).items
    for (const index in bundleItemsIds){
        addToCart(bundleItemsIds[index])
    }
}

const getCartItems = async () => {
    let return_list = []
    let cart = localStorage.getItem("cart")
    if(cart){
        cart = JSON.parse(cart)
    }
    else{
        return return_list
    }
    for(const index in cart){
        return_list.push(await getProductById(cart[index]))
    }
    return return_list
}

const clearCart = () =>
    localStorage.setItem("cart", "");


export {
    getProducts,
    getProductById,
    getBundles,
    addToCart,
    addBundleToCart,
    getCartItems,
    clearCart,
};