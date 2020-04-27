import React from 'react';
import { Link } from 'react-router-dom';

class Recipe extends React.Component {
    render() {
        const recipe = this.props;
        return (
            <div className="col-lg-4 col-sm-6">
                <Link to={`/Recipies/${recipe.id}`}>
                    <img src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt='pic' width='300' height='240' />
                </Link>
                <h5>{recipe.title}</h5>
                <br />
            </div>
        );
    }
}

export default Recipe;