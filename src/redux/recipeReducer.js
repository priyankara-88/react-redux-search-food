import * as actionTypes from './recipeActionTypes';

const initialState = {
    recipies: [],
    recipe: {},
    error: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOADED_SEARCHED_RECIPIES:
            return Object.assign({}, state, {
                recipies: action.recipies
            });

        case actionTypes.LOADED_SELECTED_RECIPE:
            return Object.assign({}, state, {
                recipe: action.recipe
            });

        case actionTypes.LOADING_DATA_FAILURE:
            return Object.assign({}, state, {
                error: action.error
            });

        case actionTypes.LOCATION_CHANGED:
            return Object.assign({}, initialState, {});

        default: return state;
    }
}