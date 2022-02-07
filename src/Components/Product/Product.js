import React from 'react';
import Rating from 'react-rating';
import './Product.css'
const Product = (props) => {
    // console.log(props.product)
    const {name, img, stock,category,star,price,seller }= props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='name'>
                <h3>{name} </h3>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                    <Rating className='rating-container'
                    initialRating={star}
                    readonly
                    emptySymbol="far fa-star "
                    fullSymbol="fas fa-star"
                    /> <br />
                <button onClick={()=> props.handleAddToCart(props.product)}>Add To Cart</button>

            </div>
        </div>
    );
};

export default Product;