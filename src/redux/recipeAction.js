import * as actionTypes from './recipeActionTypes'
import axios from 'axios';

const API_KEY = 'ce96ea823e4240c5b9b9626680e7e299';

export const recipiesLoaded = recipies => (
    {
        type: actionTypes.LOADED_SEARCHED_RECIPIES,
        recipies
    });

export const recipeLoaded = recipe => (
    {
        type: actionTypes.LOADED_SELECTED_RECIPE,
        recipe
    });


export const loadRecipies = (searchRecipe) => {
    return function (dispatch) {
        axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${searchRecipe}`)
            .then(response => {
                const recipies = response.data.results
                dispatch(recipiesLoaded(recipies))
            })
            .catch(error => {
                throw (error);
            })
    }
}

export const loadRecipe = (id) => {
    return function (dispatch) {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
            .then(response => {
                const recipe = response.data
                dispatch(recipeLoaded(recipe))
            })            
            .catch(error => {
                throw (error);
            })
    }
}