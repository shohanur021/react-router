import React from 'react';

const NotFound = () => {
    const errorStyle = {
        textAlign: 'center',
        color:'red'
    }

    return (
        <div style={errorStyle}>
            <h1>Page not Found</h1>
            <h3>Error 404</h3>
        </div>
    );
};

export default NotFound;