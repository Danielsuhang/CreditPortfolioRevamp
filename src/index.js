import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import Navbar from './components/Navbar/Navbar';
import CreditCalculator from './components/CreditCalculator/CreditCalculator';
import CreditCard from './components/CreditCard/CreditCard';

function StartPage (props) {
    return (
        <>
            <Navbar />
            <br />
            <CreditCalculator />
            <CreditCard title="test" />
        </>
    )
}

const currentPage = <StartPage name="Daniel"/>

ReactDOM.render(
    currentPage,
    document.getElementById('root')
);