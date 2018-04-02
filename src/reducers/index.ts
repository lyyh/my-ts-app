import { EnthusiasmAction } from '../actions/Input';
import { INCREMENT_VALUE, DECREMENT_VALUE } from '../actions/Input';
import { StoreState } from '../stores';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case INCREMENT_VALUE:
            return {...state, value: state.value + 1};
        case DECREMENT_VALUE:
            return {...state, value: state.value - 1};
        default:
            return {...state}
    }
}
