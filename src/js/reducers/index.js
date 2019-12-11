import * as actionTypes from '../actions';

const initialState = {
    isDataThere: false,
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case actionTypes.FIRE_SAMPLE_ACTION:
            newState.isDataThere = !action.isDataThere;
            break;
        default:
            // do nothing
    }

    return newState;
};

export default reducer;
