export const initialState = {
    user: null
}

export function reducer(state, action) {
    switch (action.type) {
        case "LOGIN_USER":
            //guardamos en localstorage
            globalThis.localStorage.setItem("USER", JSON.stringify(action.payload))
            return { ...state, user: action.payload }
        //action payload es la información que necesita la acción
        default:
            return state;
    }
}