import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setloading] = useState(false);
    let componentMounted = true;


    useEffect(() => {
        const getProducts = async () => {

            setloading(true);
            const response = await fetch('https://fakestoreapi.com/products?limit=10');

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setloading(false);
                console.log(filter);

            }

            return () => {
                componentMounted = false;


            }

        }

        getProducts();
    }, []);

    const Loading = () => {

        return (
            <>
                <h4 className="text-center">Loading...</h4>
            </>

        );

    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }


    const ShowProducts = () => {
        return (


            <div className="row">


                {filter.map((product) => {

                    return (

                        <>
                            <div className="col-sm-10 col-md-6 col-lg-4 col-xl-3 mb-4 mycard" key={product.id}>
                                <div className="card h-100 text-center p-4 " key={product.id} >
                                    <img src={product.image} className="card-img-top " alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 25)}</h5>
                                        <p className="card-text lead">{product.category}</p>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <NavLink to={'/Products/' + product.id} className="btn btn-outline-dark">Buy now</NavLink>
                                    </div>
                                </div>
                            </div>


                        </>

                    )})}
            </div>
        )
    }
    return (
        <div>
            <div className="row mysidebar">
                <div className="col-2 mt-4  ">
                    <div className="buttons d-flex btn-group-vertical mt-5 ms-1 me-0 ">
                        <button className="btn btn-outline-dark btn-lg mb-2 fw-bold mt-5 border-1 rounded-pill text-center" onClick={() => setFilter(data)}>All </button>
                        <button className="btn btn-outline-dark btn-lg mb-2 fw-bold  border-1 rounded-pill text-center ps-0 " onClick={() => filterProduct("men's clothing")} >Men's Clothing</button>
                        {/* <button className="btn btn-outline-dark btn-lg mb-2 fw-bold border-1 rounded-pill" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button> */} {/*uygun ürün eklendiğinde kullanıma açıktır */}
                        <button className="btn btn-outline-dark btn-lg mb-2 fw-bold border-1 rounded-pill ps-0 text-center" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                        <button className="btn btn-outline-dark btn-lg  mb-2 fw-bold border-1 rounded-pill ps-0 text-center" onClick={() => filterProduct("electronics")}>Electronics</button>
                    </div>
                </div>

                <div className="col-9">
                    <div className="container my-5 ">
                        <div className="rows">
                            <div className="col-12 mb-5">
                                <h1 className="display-6 fw-bolder text-center ">
                                    Latest  Products
                                </h1>
                                <hr />
                            </div>

                        </div>
                        <div className="row justify-content-center">
                            {loading ? <Loading /> : <ShowProducts />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
