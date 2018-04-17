import * as React from 'react';
import './Input.css';

export interface P {
    readonly value: number
    onIncrement?: () => void
    onDecrement?: () => void
}

// helper
const inputValueHelper = (value: number): string => {
    return `the result is ${value}`
}

const MaInput = ({ value, onIncrement, onDecrement }: P) => {
    const iptValue = inputValueHelper(value)
    return (
        <div>
            <input type="text" value={iptValue}/>
            <div>
                <button onClick={onIncrement}>increment + </button>
                <button onClick={onDecrement}>decrement - </button>
            </div>
        </div>
    );
}

export default MaInput;

// test
