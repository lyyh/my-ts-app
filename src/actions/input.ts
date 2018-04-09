import * as Input from '../types/input'

export interface IncrementValue {
    type: Input.INCREMENT_VALUE
}

export interface DecrementValue {
    type: Input.DECREMENT_VALUE
}

export type EnthusiasmAction = IncrementValue | DecrementValue

export function incrementValueFun(): IncrementValue {
    return {
        type: Input.INCREMENT_VALUE
    }
}

export function decrementValueFun(): DecrementValue {
    return {
        type: Input.DECREMENT_VALUE
    }
}
