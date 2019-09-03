import { UPDATE_MULTISELECT } from './actionTypes'

const initialState = {
    tags: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_MULTISELECT:
            return {
                ...state,
                tags: action.payload
            }
        default:
            return state
    }
}