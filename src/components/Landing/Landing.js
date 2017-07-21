import React from "react";
import { connect } from "react-redux";
import FeaturedProduct from './FeaturedProduct/FeaturedProduct'
import {Link} from 'react-router-dom'
import "./Landing.css";

import { addToCart } from "../../ducks/product";

export function Landing( { addToCart, featuredProducts } ) {
	let products = featuredProducts.map(product=>{
		return(
			<FeaturedProduct
  			addToCart={ () => addToCart( product.id ) }
			  description={ product.description }
			  key={ product.id }
			  logo={ product.logo }
			  name={ product.name }
			  onSale={ product.onSale }
			  price={ product.price }
			/>
		)
	})
	return (
		<main className="landing">
			<h1>Featured Products</h1>
			<div className="landing__products-wrapper">
				{products}
			</div>

			<Link to='/shop' className='Landing_full-shop-link'><h1 className="landing__full-shop-link">Take me to the full shop!</h1></Link>
		</main>
	);
}

function mapStateToProps( { products } ) {
	return { featuredProducts: products.filter( product => product.featured || product.onSale ) };
}

export default connect( mapStateToProps, { addToCart } )( Landing );
