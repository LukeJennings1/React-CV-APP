import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header';
import GeneralInfo from './Generalinfo';
import Experience from './Experience';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='SiteContainer'>
    <Header />
    <GeneralInfo/>
    </div>
       
);

