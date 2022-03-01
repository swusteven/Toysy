import { connect } from "react-redux";
import MainPageGallery from "./main_page_gallery";
import { fetchAllProducts } from "../../actions/product"

const mSTP = state => ({
  products: state.product
});

const mDTP = dispatch => ({
  fetchAllProducts: ()=> dispatch(fetchAllProducts())
})

export default connect(mSTP, mDTP)(MainPageGallery)
