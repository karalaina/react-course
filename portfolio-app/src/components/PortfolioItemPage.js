import React from 'react';

const PortfolioItemPage = (props) => {
    return (
        <div>
            This is a portfolio item page for id {props.match.params.id}!
        </div>
    )
}

export default PortfolioItemPage;