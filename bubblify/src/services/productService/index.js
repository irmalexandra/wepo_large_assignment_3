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
    return allBundles;
}

const getBundleItems = async (itemsList) =>{
    let products = await getProducts()
    let filteredList = []

    for(const index in itemsList){
        filteredList.push(products.find(p => p.id == itemsList[index]));
    }
    return filteredList;
}

const getProductById = async id => {
    let productList = await getProducts();
    let product = productList.find(p => p.id == id)
    return product;
}

export {
    getProducts,
    getProductById,
    getBundles
};