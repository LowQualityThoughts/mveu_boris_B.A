import React from 'react';
import './Header.css';
import UseBox from './UseBox';

function Header({setPage, setModalBox}) {
    return (
        <div className="Header">
            <ul>
                <li onClick={() => setPage('Basket')}>Trash</li>
                <li onClick={() => setPage('Main')}>Main</li>
            </ul>
            <UseBox setModalBox={setModalBox} />
        </div>
    )
}

export default Header;