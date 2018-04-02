import * as React from 'react';
import './Input.scss';

export interface P {
    readonly value: number
    onIncrement?: () => void
    onDecrement?: () => void
}

const MaInput = ({ value, onIncrement, onDecrement }: P) => {
    return (
        <div>
            <input type="text" value={value}/>
            <div>
                <button onClick={onIncrement}>increment + </button>
                <button onClick={onDecrement}>decrement - </button>
            </div>
        </div>
    );
}

export default MaInput;
