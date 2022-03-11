import { connect } from "react-redux";
import SearchResults from "./search_results";
import { fetchAllProducts } from "../../actions/product"; 

const mSTP = state => {
  return{
    products: state.products,
    searchValue: state.search.value
  }
}

const mDTP = dispatch =>{
  return {
    fetchAllProducts: ()=> dispatch(fetchAllProducts())
  }
}

export default connect(mSTP, mDTP)(SearchResults)