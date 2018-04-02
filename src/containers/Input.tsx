import MaInput from '../components/Input/Input';
import * as actions from '../actions/Input';
import { StoreState } from '../stores';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = ({ value }: StoreState) => {
    return {
        value: value
    }
}

export const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
    return {
        onIncrement: () => dispatch(actions.incrementValueFun()),
        onDecrement: () => dispatch(actions.decrementValueFun())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MaInput)
