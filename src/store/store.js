import { legacy_createStore as createStore} from 'redux'

const appReducer = (initalState = 0, action) => {
    switch (action.type) {
        case 'cart':
            return action.payload
        default:
            return initalState
    }
}


const store = createStore(appReducer);

export default store;