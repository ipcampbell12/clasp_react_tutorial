import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <Fragment>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </Fragment>
    );
}

export default Nav;