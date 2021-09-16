import { ADD_TO_CART } from "./action.types"
import { CART_STAGE } from "./action.types"
import { OPEN_CART_SIDEBAR } from "./action.types"
import { TOGGLE_CART_SIDEBAR } from "./action.types";
import { REMOVE_ITEM_FROM_CART } from "./action.types"
import { INCREASE_ITEM_QUANTITY } from "./action.types"
import { DECREASE_ITEM_QUANTITY } from "./action.types"
import { SET_CURRENCY } from "./action.types"

export const addToCart = payload => (
    {
        type: ADD_TO_CART,
        payload
    }
)
export const cartStage = payload => (
    {
        type: CART_STAGE,
        payload
    }
)
export const openCartSidebar = payload => (
    {
        type: OPEN_CART_SIDEBAR,
        payload
    }
)

export const toggleCartSideBar = payload => (
    {
        type: TOGGLE_CART_SIDEBAR,
        payload
    }
)

export const removeItemFromCart = payload => (
    {
        type: REMOVE_ITEM_FROM_CART,
        payload
    }
)

export const increaseItemQuantity = payload => (
    {
        type: INCREASE_ITEM_QUANTITY,
        payload
    }
)
export const decreaseItemQuantity = payload => (
    {
        type: DECREASE_ITEM_QUANTITY,
        payload
    }
)
export const setCurrency = payload => (
    {
        type: SET_CURRENCY,
        payload
    }
)
