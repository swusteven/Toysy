import * as ApiUtilProduct from "../utils/product"

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_SINGLE_PRODUCT = "RECEIVE_SINGLE_PRODUCT";


const receiveAllProducts = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

const receiveSingleProduct = (product) => ({
  type: RECEIVE_SINGLE_PRODUCT,
  product
});

//thunk action creators
export const fetchAllProducts = () => dispatch => (
  ApiUtilProduct.fetchProducts()
    .then(products => dispatch(receiveAllProducts()))
);

export const fetchSingleProduct = (productId) => dispatch => (
  ApiUtilProduct.fetchProduct(productId)
    .then(product => dispatch(receiveSingleProduct(productId)))
);

