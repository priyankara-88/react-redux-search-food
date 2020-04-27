import React from 'react';

const Error = ({ error }) => {
    return (
        <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Error!</h4>
            <p>An Unexpected Error Occurred</p>
            <hr />
            <p className="mb-0">Error Message : {error}</p>
        </div>
    )
};

export default Error;