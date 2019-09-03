import { UPDATE_SELECT } from './actionTypes'

const initialState = {
    type: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SELECT:
            return {
                ...state,
                type: action.payload
            }
        default:
            return state
    }
}