import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { DialogActions } from "@mui/material";


function ProductItem(props) {
    console.log(props?.src);
    return (
        <>
            <li className='product__item'>
                <a className='product__item__link' href={`https://shop.cannabisx.eonlineshop.net/product/${props.path}`} target='_blank'>
                    <figure className='product__item__pic-wrap' data-category={props.label}>
                        <img
                            className='product__item__img'
                            alt='Travel'
                            src={props?.src}
                        />
                    </figure>
                    <div className='product__item__info'>
                        <h5 className='product__item__text'>{props.text}</h5>
                    </div>

                    
                        <DialogActions className="product_dialog">
                            <Button>
                                Buy Now
                            </Button>
                        </DialogActions>
                    
                </a>

            </li>
        </>
    );
}

export default ProductItem;