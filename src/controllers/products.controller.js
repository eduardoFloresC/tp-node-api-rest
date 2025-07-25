import * as model from '../models/products.model.js'

export const getAllProducts = async(req, res) => {
    res.json(await model.getAllProducts());
}

export const getProductById = async(req, res) => {
    const id = req.params.id;
    const product = await model.getProductById(id);

    if (!product) {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
};


export const postProduct = async(req, res) => {
    const { name, price, categories } = req.body;

    const newProduct = await model.createProduct({ name, price, categories });
    res.status(201).json(newProduct);
};

export const putProduct = async(req, res) => {

    const { id } = req.params;
    const updatedProductData = req.body;

    const updatedProduct = await model.UpdateProduct(id, updatedProductData);

    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
};

export const deleteProduct = async(req, res) => {
    const productId = req.params.id;

    const product = await model.deleteProduct(productId);

    if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
    }

    return res.status(200).json({
        message: 'Producto eliminado con éxito',
        productoEliminado: product
    });
};