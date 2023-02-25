import React, { useState, useEffect } from 'react';
import './ProductList.css';
import { useNavigate } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=10&skip=${(currentPage - 1) * 10}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setTotalPages(Math.ceil(data.total / 10));
            })
            .catch((error) => console.error(error));
    }, [currentPage]);

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        localStorage.clear();
        navigate('/login');
    }

    const addCartID = (item) => {
        setCart([...cart, item]);
    }

    const handleCollectionClick = () => {
        navigate('/collect');
    }

    const handlePageClick = (page) => {
        setCurrentPage(page);
    }

    const renderPagination = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={currentPage === i ? 'active-page' : ''}
                    onClick={() => handlePageClick(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    }

    return (
        <div className="product-list">

            <button className='login-button' onClick={handleLoginClick}>Login</button>
            <br /><br />
            <button className='login-button' onClick={handleLogoutClick}>Logout</button>
            <br /><br />
            <button className='login-button' onClick={handleCollectionClick}>Collection</button>

            {products.map((product) => (
                <div className="product" key={product.id}>
                    <img className="product-image" src={product.images[0]} alt={product.name} />
                    <div className="product-details">
                        <h2 className="product-name">{product.title}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">price :- {product.price}$</p>
                        <p className="product-price">Rating :- {product.rating}</p>
                        <button style={{ color: "white" }} onClick={() => addCartID(product.id)}>Add To Card</button>
                    </div>
                </div>
            ))}
            <div className="pagination">
                {renderPagination()}
            </div>
        </div>
    );
}

export default ProductList;
