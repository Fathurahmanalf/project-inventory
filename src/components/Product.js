import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column mx-5 ">
                <table className="table is-bordered is-fullwidth is-hoverable">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Version</th>
                            <th>User</th>
                            <th>Product</th>
                            <th>Stock</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.version}</td>
                                <td>{product.user}</td>
                                <td>{product.product}</td>
                                <td>{product.stock}</td>
                                <td>{product.amount}</td>
                                <td>
                                    <button className="button is-danger is-small">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Product;
