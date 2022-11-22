import {ADD_PRODUCT_TO_CART,DELETE_PRODUCT_TO_CART} from './constants'
export const addProductToCart = payload =>({
    type:ADD_PRODUCT_TO_CART,
    payload
})
export const deleteProductToCart = payload =>({
    type:DELETE_PRODUCT_TO_CART,
    payload
})
