import React from 'react';

const RecipeDetails = ({ recipe }) => {
    return (
        <div className="card">
            <div className="row">
                <aside className="col-sm-5">
                    <article className="card-body p-4">
                        <div>
                            <div>
                                <img className="img-fluid" src={recipe.image} alt="pic" />
                            </div>
                        </div>
                        <br />
                        <dl className="param param-feature">
                            <dt>Health Score #</dt>
                            <dd>{recipe.healthScore}</dd>
                        </dl>
                        <dl className="param param-feature">
                            <dt>Weight Watcher Smart Points</dt>
                            <dd>{recipe.weightWatcherSmartPoints}</dd>
                        </dl>
                        <dl className="param param-feature">
                            <dt>Price Per Serving</dt>
                            <dd>{recipe.pricePerServing}</dd>
                        </dl>
                        <dl className="param param-feature">
                            <dt>Vegetarian</dt>
                            <dd>{recipe.vegetarian ? 'Yes' : 'No'}</dd>
                        </dl>
                    </article>
                </aside>
                <aside className="col-sm-7">
                    <article className="card-body p-5">
                        <h3 className="title mb-3">{recipe.title}</h3>

                        <p className="price-detail-wrap">
                            <span className="price h3 text-warning">
                                <span className="num">{`Spoonacular Score #${recipe.spoonacularScore}`}</span>
                            </span>
                        </p>
                        <dl className="item-property">
                            <dt>Description</dt>
                            <dd>
                                <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                            </dd>
                        </dl>
                        <dl className="param param-feature">
                            <dt>More Deatils</dt>
                            <dd><a href={recipe.sourceUrl} target="_blank"> Click Here</a></dd>
                        </dl>
                    </article>
                </aside>
            </div>
        </div>
    );
}

export default RecipeDetails;