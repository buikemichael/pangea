import { ADD_TO_CART } from "../action.types"
import { REMOVE_ITEM_FROM_CART } from "../action.types"
import { INCREASE_ITEM_QUANTITY } from "../action.types"
import { DECREASE_ITEM_QUANTITY } from "../action.types"

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            let copyState = [...state]
            //check if item exists in cart already
            var item = copyState.find(item => item.id === action.payload.id)
            if (item) {
                return state.map(
                    (element) =>
                    (
                        element.id === item.id ? { ...element, quantity: element.quantity + 1 } : element
                    )
                )
            } else {
                let new_payload = Object.assign({}, action.payload)
                new_payload.quantity = 1
                return [...state, new_payload]
            }
        case REMOVE_ITEM_FROM_CART:
            return state.filter(item => item.id !== action.payload)
        case INCREASE_ITEM_QUANTITY:
            return state.map(item => (
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            ))
        case DECREASE_ITEM_QUANTITY:
            return state.map(item => (
                item.id === action.payload ? { ...item, quantity: item.quantity === 1 ? item.quantity : item.quantity - 1 } : item
            ))
        default: return state
    }
}