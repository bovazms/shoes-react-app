import React, { useContext } from 'react';
import './Adminproducts.css';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../components/MyContext';



function Adminproducts() {
  const { products, setProducts } = useContext(MyContext);
  const navigate = useNavigate()

  const handleDeleteProduct = (productId) => {
    const deleteProducts = products.filter((product) => product.id !== productId);
    setProducts(deleteProducts);
    console.log(`Deleting product with ID: ${productId}`);

  };



  return (
    <div style={{ display: 'flex', flexDirection: 'row' }} className="admin-products-container">
      <Sidebar />
      <div className="admin-products-table-container">
        <h2>Admin Products</h2>
        <table className="admin-products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>ID</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Offer</th>
              <th>State</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} className="admin-product-image" />
                </td>
                <td>{product.title}</td>
                <td>{product.id}</td>
                <td>{product.type}</td>
                <td>{product.qty}</td>
                <td>{product.price}</td>
                <td>{product.offer}%</td>
                <td>{product.state}</td>
                <td>{product.description}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                  <button className="update-button" onClick={()=>navigate(`/Updateproduct/${product.id}`)}>Update</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminproducts;