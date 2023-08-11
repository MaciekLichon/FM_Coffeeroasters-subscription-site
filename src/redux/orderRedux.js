//selectors
export const getOrder = state => state.order;

// actions
const createActionName = actionName => `app/order/${actionName}`;
const UPDATE_ORDER = createActionName('UPDATE_ORDER');

// action creators
export const updateOrder = payload => ({ type: UPDATE_ORDER, payload })

// subreducer

const orderReducer = (statePart = {}, action) => {
    switch(action.type) {
        case UPDATE_ORDER:
            return {...statePart, [action.payload.category]: action.payload.value}
        default:
            return statePart;
    }
}

export default orderReducer;
