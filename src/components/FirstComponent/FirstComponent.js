import React, { useContext } from 'react';
import ChildComponent from '../ChildComponent/ChildComponent';
import { CountContext } from '../Home/Home';

const FirstComponent = () => {
    const {name} = useContext(CountContext)

    return (
        <div>
            <h3>This is first component : {name}</h3>
            <ChildComponent></ChildComponent>
        </div>
    );
};

export default FirstComponent;