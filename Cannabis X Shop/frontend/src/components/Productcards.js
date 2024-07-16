import React from "react";
import ProductItem from './ProductItem';
import './Productcards.css';
import _ from 'lodash'

function Productcards({productData}) {
    return (
        <div className= 'product'>
            <h1>PRODUCTS</h1>
            <div className='product__container'>
                <div className='product__wrapper'>
                    <ul className='product__items'>
                        {_.map(productData?.rows,(eachProduct)=>(
                            <ProductItem
                            src={eachProduct?.images?.[0]?.url}
                            text={eachProduct?.name}
                            text1={eachProduct?.inventory}
                            label='Cannabis X'
                            path={`/${eachProduct?.id}`}
                            />

                        ))}



                        
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Productcards;