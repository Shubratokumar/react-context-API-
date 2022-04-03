import React, { useContext } from 'react';
import { CountContext } from '../Home/Home';

const ChildComponent = () => {
    const value = useContext(CountContext)
    
    return (
        <div>
            <h3>This is child component: {value}</h3>
        </div>
    );
};

export default ChildComponent;