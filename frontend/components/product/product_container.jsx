import { connect } from "react-redux";
import MainPageIndex from "./main_page_index";
import { fetchAllProducts, fetchSingleProduct } from "../../actions/product"

const mSTP = state => ({
  products: Object.values(state.products)
});

const mDTP = dispatch => ({
  fetchAllProducts: ()=> dispatch(fetchAllProducts()),
  fetchSingleProduct: (productId)=> dispatch(fetchSingleProduct(productId))
})

export default connect(mSTP, mDTP)(MainPageIndex)


