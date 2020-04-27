import React from 'react';
import { connect } from 'react-redux';
import * as  recipeActions from '../redux/recipeAction';
import { bindActionCreators } from 'redux';
import RecipiesList from './RecipiesList';
import { debounce } from 'lodash';

class RecipiesPage extends React.Component {
    state = { searchText: '' };

    onStopTypingSearch = debounce(() => {
        this.props.actions.loadRecipies(this.state.searchText);
    }, 300);

    onTypeSearch = (event) => {
        this.setState({ searchText: event.target.value }, () => {
            this.onStopTypingSearch();
        });
    };

    render() {
        return (
            <div>
                <div className='text-center'>
                    <h2 className='text-primary'>Search Recipies</h2>
                    <div>
                        <input className='form-control'
                            type='text'
                            value={this.state.searchText}
                            onChange={this.onTypeSearch}
                            placeholder='Recipe name'
                        ></input>
                    </div>
                </div>
                <br />

                <RecipiesList recipies={this.props.recipies} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipies: state.recipies
    }
}

const maspDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(recipeActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    maspDispatchToProps,
)(RecipiesPage); 