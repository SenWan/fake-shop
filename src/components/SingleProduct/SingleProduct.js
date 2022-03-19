import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const {setCartCount} = props;
    const {title, image} = props.product
    return (
        <div className='col-md-4'>
            <div className="shadow-lg card p-3 rounded">
                <img className='w-50 m-auto' src={image} alt="" />
                <h1>{title}</h1>
               <div className='d-flex justify-content-center gap-2'>
                <button onClick={setCartCount} type="button" class="btn  btn-primary btn-sm">Add to Cart</button>
                <button type="button" class="btn btn-secondary btn-sm">Delete</button>
                <button type="button" class="btn btn-secondary btn-sm">Details</button>
               </div>
            </div>
        </div>
    );
};

export default SingleProduct;