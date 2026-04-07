import React from 'react';

const ProductForm = ({ handleAddProducts }) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const newProduct = {
            name,
            price,
            quantity
        }

        handleAddProducts(newProduct);

    }
    return (
        <div>
            <h2>Add Products</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Product Name' /> <br />
                <input type="text" name='price' placeholder='Product Price' /> <br />
                <input type="text" name='quantity' placeholder='Product Quantity' /> <br />
                <input type="submit" value="Add" />
            </form>

        </div>
    );
};

export default ProductForm;