import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadRecipe } from '../redux/recipeAction';
import RecipeDetails from './RecipeDetails';
import Error from './ErrorPage';

const RecipePage = ({ match, error, recipe, loadRecipe }) => {

    useEffect(() => { loadRecipe(match.params.id) }, []);

    return (
        <div>
            {
                error ? <Error error={error} />
                    : <RecipeDetails recipe={recipe} />
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        recipe: state.recipe,
        error: state.error
    }
}

const maspDispatchToProps = {
    loadRecipe
};

export default connect(
    mapStateToProps,
    maspDispatchToProps)(RecipePage); 