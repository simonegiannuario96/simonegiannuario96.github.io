import React from 'react';
import { MemoryRouter, NavLink } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import './StyledComponent.scss';

const inlineStyles: React.CSSProperties = {
    color: '#e0e0e0',
    backgroundColor: '#2a2a2a',
    padding: '15px',
    borderRadius: '8px',
    fontFamily: "'Inter', sans-serif",
    margin: '20px 0',
    border: '1px solid #444',
};

const StyledComponent = () => {
    return (
        <div className="app-container">
            <h1>Different ways to style React components</h1>

            {/* 1. Inline Styles */}
            <div style={inlineStyles}>
                This component is styled with an inline style object.
            </div>

            {/* 2. CSS ClassName */}
            <p className="css-stylesheet-class">
                This paragraph is styled using a CSS stylesheet and className.
            </p>

            {/* 3. Styling a library component (react-icons) */}
            <IconContext.Provider value={{ color: '#8888ff', size: '1.5em', className: 'beer-icon' }}>
                <div>
                    Lets go for a <FaBeer />? This icon is styled via IconContext.
                </div>
            </IconContext.Provider>

            {/* 4. Styling based on application state (react-router) */}
            <nav className="main-nav">
                <NavLink
                    to="/home"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                    About
                </NavLink>
            </nav>
        </div>
    );
};

const App = () => (
    <MemoryRouter initialEntries={['/home']}>
        <StyledComponent />
    </MemoryRouter>
);

export default App;