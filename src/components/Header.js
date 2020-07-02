import React from 'react';

const style = {
    columns: {
        padding: 25
    }
};

function Header() {
    return (
        <div className="columns is-centered" style={style.columns}>
            <div className="column is-half">
                <h1 className="has-text-centered title is-3">Employee Directory</h1>
            </div>
        </div>
    );
};

export default Header;