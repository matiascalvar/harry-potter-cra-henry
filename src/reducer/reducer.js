// estado inicial

// fn reducer

let initialState = {
    characters: []
}

export default function reducer(state = initialState, action) { // {type: "GET_CHARS", payload:[{},{},{}]}
    switch (action.type) {
        case "GET_CHARS":
            return {
                ...state,
                characters: action.payload
            }

        case "ADD_CHAR":
            return {
                ...state,
                characters: [...state.characters, action.payload]
            }

        default:
            return { ...state }
    }
}