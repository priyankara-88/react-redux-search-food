import React from 'react';

const HomePage = () => {
    return (
        <div className='container text-center'>
            <h2 className='text-primary'>Welcome to Recipes Complex!</h2>
            <p className='text-secondary'>Here you could find over 360,000 recipes in this larger recipe database</p>
            <br />
            <img src='https://spoonacular.com/recipeImages/801710-556x370.jpg' alt='pic' className="img-fluid" />
        </div>
    );
};

export default HomePage;