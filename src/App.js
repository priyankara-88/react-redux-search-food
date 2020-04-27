import React from 'react';
import './App.css';
import RecipiesPage from './components/RecipiesPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import RecipePage from './components/RecipePage';

function App() {
    return (
        <Router>
            <div className='container'>
                <Navigation />
                <br />
                <Switch>
                    <Route path='/' component={HomePage} exact />
                    <Route path='/RecipiesPage' component={RecipiesPage} exact />
                    <Route path='/Recipies/:id' component={RecipePage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
