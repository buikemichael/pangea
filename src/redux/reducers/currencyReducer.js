import { SET_CURRENCY } from "../action.types"

export default function currencyReducer(state = "USD", action) {
    switch (action.type) {
        case SET_CURRENCY:
            return action.payload
        default: return state
    }
}