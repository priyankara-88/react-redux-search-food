import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRecipe } from '../redux/recipeAction';
import RecipeDetails from './RecipeDetails';

const RecipePage = ({ match, recipe, loadRecipe }) => {

    useEffect(() => { loadRecipe(match.params.id) }, []);

    return (
        <div>
            <RecipeDetails recipe={recipe} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        recipe: state.recipe
    }
}

const maspDispatchToProps = {
    loadRecipe
};

export default connect(
    mapStateToProps,
    maspDispatchToProps)(RecipePage); 