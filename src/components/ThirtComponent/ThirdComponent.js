import React, { useContext } from 'react';
import { CountContext } from '../Home/Home';

const ThirdComponent = () => {
    const value = useContext(CountContext)
    return (
        <div>
            <h3>This is third component: {value}</h3>
        </div>
    );
};

export default ThirdComponent;