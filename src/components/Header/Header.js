import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className=" header-container mb-5">
            <h1>Digital Doctor's Club For COVID-19</h1>
            <p>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.</p>
            <h3 className="total-cost">Total Cost : $1000 Million</h3>
        </div>
    );
};

export default Header;