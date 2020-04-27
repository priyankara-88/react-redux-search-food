import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navbar navbar-expand-sm bg-primary navbar-dark'>
            <Link to='/' className='navbar-nav'>
                <li className="nav-item active">
                    <nav className="nav-link">Home</nav>
                </li>
            </Link>

            <Link to='/RecipiesPage' className='navbar-nav'>
                <li className="nav-item active">
                    <nav className="nav-link">Search Recipes</nav>
                </li>
            </Link>
        </div>
    );
};

export default Navigation;