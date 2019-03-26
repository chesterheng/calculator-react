import { NUMBER, OPERATOR, EVALUATE, DOT, CLEAR } from '../actions/type';

const INITIAL_STATE = {
  currentVal: '0',
  prevVal: '0',
  formula: '',
  currentSign: 'pos',
  lastClicked: ''
}

const reducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case NUMBER: {
      return {
        ...state,
        currentVal: state.currentVal === state.prevVal ? action.payload : state.currentVal + action.payload,
        formula: state.formula + action.payload
      }
    }
    case OPERATOR: {
      return {
        ...state,
        prevVal: state.currentVal,
        formula: state.formula + action.payload
      }
    }
    case EVALUATE: {
      const result = eval(state.formula).toString()
      return {
        ...state,
        currentVal: result,
        prevVal: result,
        formula: result
      }
    }

    case DOT: {
      if(!state.currentVal.includes('.')){
        return {
          ...state,
          currentVal: state.currentVal + '.',
          formula: state.formula + '.'
        }
      }
      else break;
    }

    case CLEAR: return INITIAL_STATE;

    default: return state;
  }
}

export default reducer;