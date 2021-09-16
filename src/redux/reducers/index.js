import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import cartStageReducer from "./cartStageReducer";
import cartSideBarReducer from "./cartSideBarReducer";
import currencyReducer from "./currencyReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    cart_stage: cartStageReducer,
    toggle_cart_sidebar: cartSideBarReducer,
    currency: currencyReducer
})

export default rootReducer