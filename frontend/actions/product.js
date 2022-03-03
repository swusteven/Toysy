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
export const fetchAllProducts = () => dispatch => {
 return ApiUtilProduct.fetchProducts()
    .then((products) => dispatch(receiveAllProducts(products)))
};

export const fetchSingleProduct = (productId) => dispatch => {
 return ApiUtilProduct.fetchProduct(productId)
    .then(productId => dispatch(receiveSingleProduct(productId)))
};

