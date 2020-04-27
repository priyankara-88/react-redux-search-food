import React from 'react';
import Recipe from './Recipe'

const RecipiesList = ({ recipies }) => (
    <div>
        {recipies.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
    </div>
);

export default RecipiesList;