import { CART_STAGE } from "../action.types";

export default function cartStageReducer(state = null, action) {
    switch (action.type) {
        case CART_STAGE:
            return action.payload
        default: return state
    }
}