import React, { useContext, useState } from 'react';
import Child from './Child';
import { COUNTER_CONTEXT } from '../App';

const Parent = () => {
    const {count} = useContext(COUNTER_CONTEXT)
    return (
        <div>
            <div>
                <div>
                    <h1>Parent</h1>
                    <h1>{count}</h1>
                </div>
            </div>
            <Child count={count} ></Child>
        </div>
    );
};

export default Parent;