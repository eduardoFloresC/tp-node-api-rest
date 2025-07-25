import * as model from "../models/products.model.js";

export const getAllProducts = () => {
    return model.getAllProducts();
};

// export const getProductById = (id) => products.find(p => p.id === id) || null;
export const getProductById = (id) => {
    return model.getProductById(id);
}

export const postProduct = ({ name, price }) => {
    let nextId = 1;
    if (products.length > 0) {
        const lastProduct = products[products.length - 1];
        nextId = lastProduct.id + 1;
    }
    const newProduct = { id: nextId, name, price };
    products.push(newProduct);
    return newProduct;
};