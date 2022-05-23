
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {


        const getProduct = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products/' + id);
            setProduct(await response.json());
            setLoading(false);

        }
        getProduct();
    }
    );

    const ShowProduct = () => {

        return (
            <div className="row mb-5">

                <div className="col-md-6">
                    <img src={product.image} alt={product.title} className="img-fluid w-75 h-75 " />
                </div>

                <div className="col-md-6 mb-5">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star ms-1"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">
                        {product.description}
                    </p>
                    <button className="btn btn-outline-dark px-4 py-2 ">Add to Cart</button>
                    <NavLink to="/" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
                </div>

            </div>
        )

    }

    return (
        <div>

            <div className="container py-5">

                <ShowProduct />
            </div>

        </div>
    );

}


export default Product;
