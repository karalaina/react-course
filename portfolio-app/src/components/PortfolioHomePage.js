import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioHomePage = () => (
    <div>
        <p>This is the portfolio home page!</p>
        <p>Check out the stuff I've done</p>
        <ul>
            <li><NavLink to="/portfolio/23">Item 23</NavLink></li>
            <li><NavLink to="/portfolio/67">Item 67</NavLink></li>
            <li><NavLink to="/portfolio/104">Item 104</NavLink></li>
        </ul>
    </div>
)

export default PortfolioHomePage;