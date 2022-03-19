import React from 'react';
import './Menubar.css'
const Menubar = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 p-2 text-primary fw-bold "><h1>FAKESHOPBD</h1></div>
                    <div className="col-md-10 menu-container d-flex justify-content-end fw-bold">
                        <li className='items me-4 p-2'>Home</li>
                        <li className='items me-4 p-2'>Contact</li>
                        <li className='items me-4 p-2'>Cart</li>
                        <li className='items me-4 p-2'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;