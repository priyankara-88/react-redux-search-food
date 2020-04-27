import * as actionTypes from './recipeActionTypes';

const initialState = {
    recipies: [],
    recipe: {}
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

        default: return state;
    }
}