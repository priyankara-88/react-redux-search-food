import React from 'react';
import { connect } from 'react-redux';
import * as  recipeActions from '../redux/recipeAction';
import { bindActionCreators } from 'redux';
import RecipiesList from './RecipiesList';
import { debounce } from 'lodash';
import Error from './ErrorPage';

class RecipiesPage extends React.Component {
    state = { searchText: '' };

    componentDidMount() {
        this.props.actions.loadRecipies('');
    }

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
                {
                    this.props.error ? <Error error={this.props.error} />
                        : < RecipiesList recipies={this.props.recipies} />
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipies: state.recipies,
        error: state.error
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