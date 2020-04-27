import React from 'react';
import { Link } from 'react-router-dom';

class Recipe extends React.Component {
    render() {
        const recipe = this.props;
        return (
            <div className='text-center'>

                <Link to={`/Recipies/${recipe.id}`}>
                    <img src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt='pic' width='400' height='350' />
                </Link>
                <h5 className='text-center my-3'>{recipe.title}</h5>
                <br />
            </div>
        );
    }
}

export default Recipe;