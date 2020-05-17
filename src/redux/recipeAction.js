import * as actionTypes from './recipeActionTypes'
import axios from 'axios';

const API_KEY = '20cd5a595b7d4511a5fa82ffbc57fdcc';

export const recipiesLoaded = recipies => (
    {
        type: actionTypes.LOADED_SEARCHED_RECIPIES,
        recipies
    });

export const recipeLoaded = (recipe) => (
    {
        type: actionTypes.LOADED_SELECTED_RECIPE,
        recipe
    });

export const loadingDataFailed = (error) => (
    {
        type: actionTypes.LOADING_DATA_FAILURE,
        error
    });

export const locationChanged = () => (
    {
        type: actionTypes.LOCATION_CHANGED
    });

export const loadRecipies = (searchRecipe) => {
    return function (dispatch) {
        if (searchRecipe === '') {
            dispatch(locationChanged())
        }
        else {
            axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${searchRecipe}`)
                .then(response => {
                    const recipies = response.data.results
                    dispatch(recipiesLoaded(recipies))
                })
                .catch(error => {
                    dispatch(loadingDataFailed(error.message));
                })
        }
    }
}

export const loadRecipe = (id) => {
    return function (dispatch) {
        dispatch(locationChanged())
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
            .then(response => {
                const recipe = response.data
                dispatch(recipeLoaded(recipe))
            })
            .catch(error => {
                dispatch(loadingDataFailed(error.message))
            })
    }
}