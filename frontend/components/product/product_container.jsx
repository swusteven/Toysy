import { connect } from "react-redux";
import MainPageGallery from "./main_page_gallery";
import { fetchAllProducts, fetchSingleProduct } from "../../actions/product"

const mSTP = state => ({
  products: Object.values(state.products)
});

const mDTP = dispatch => ({
  fetchAllProducts: ()=> dispatch(fetchAllProducts()),
  fetchSingleProduct: (productId)=> dispatch(fetchSingleProduct(productId))
})

export default connect(mSTP, mDTP)(MainPageGallery)


