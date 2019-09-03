import { UPDATE_SELECT } from './actionTypes'

const initialState = {
    tags: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SELECT:
            return {
                ...state,
                tags: action.payload
            }
        default:
            return state
    }
}