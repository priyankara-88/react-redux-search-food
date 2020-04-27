import React from 'react';
import Recipe from './Recipe'

const RecipiesList = ({ recipies }) => (
    <div className="container">
        <div className="row imagetiles">
            {recipies.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
        </div>
    </div>
);

export default RecipiesList;