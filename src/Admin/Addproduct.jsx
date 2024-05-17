import React, { useState, useContext } from 'react';
import './Addproduct.css';
import { MyContext } from '../components/MyContext';

function AddProduct() {
  const { products, setProducts } = useContext(MyContext);

  const [newProduct, setNewProduct] = useState({

    title: '',
    type: '',
    price: '',
    image: '',
    qty:'',
    offer:'',
    description:'',
    state:'',
    id:'',

  });

  const handleChange = (e) => {

    const value = e.target.name === 'qty' ? parseInt(e.target.value) : e.target.value;

    setNewProduct({
      ...newProduct,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if ( !newProduct.title || !newProduct.type || !newProduct.price || !newProduct.image ||!newProduct.qty || !newProduct.offer || !newProduct.description || !newProduct.state ){
      alert('Please fill in all the fields');
      return;
    }

    const newProductId = Date.now();

    // Create the new product object
    const newProductData = {

      id: newProductId,
      title: newProduct.title,
      type: newProduct.type,
      price: newProduct.price,
      image: newProduct.image,
      qty: newProduct.qty,
      offer : newProduct.offer,
      description: newProduct.description,
      state: newProduct.state,

    };

    // Add the new product to the products list
    setProducts([...products, newProductData]);

    // Clear the form fields
    setNewProduct({
      title: '',
      type: '',
      price: '',
      image: '',
      qty:'',
      offer:'',
      state:'',
      description: '',
      
      // id: '',

    });

    alert('Product added successfully');
  };

  return (
    <div className="add-product-container">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" placeholder='Product name' value={newProduct.title} onChange={handleChange} required />
        </label>

        <label>
          Type:
          <input type="text" name="type" placeholder="Men's Shoes/Women's Shoes/Nike/Adidas/Puma " value={newProduct.type} onChange={handleChange} required />
        </label>

        <label>
          Price:
          <input type="number" name="price" placeholder='In rupees' value={newProduct.price} onChange={handleChange} required />
        </label>

        <label>
          Image URL:
          <input type="text" name="image" placeholder='paste an product img link' value={newProduct.image} onChange={handleChange} required />
        </label>

        <label>
          Qty:
          <input type="number" name="qty" placeholder='In numbers' value={newProduct.qty || 1} onChange={handleChange} required />
        </label>

        <label>
          Offer:
          <input type="number" name="offer" placeholder='amount of % to be discounted' value={newProduct.offer} onChange={handleChange} required />
        </label>

        <label>
          Description:
          <input type="text" name="description" placeholder='Describe about this product' value={newProduct.description} onChange={handleChange} required />
        </label>

        <label>
          State:
          <input type="text" name="state" placeholder='Trending/Highdemand/Bestseller/Premium' value={newProduct.state} onChange={handleChange} required />
        </label>

        <button type="submit">Add Product</button>

      </form>
    </div>
  );
}

export default AddProduct;

