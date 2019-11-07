const OPERATION_UPDATE = 'OPERATION_UPDATE';
const OPERATION_CALCULATE = 'OPERATION_CALCULATE';


const initialState = {
    initialAmount: 0,
    endAmount: 0,
    years: 0,
    CAGR:0
};

export const actionCreators = {
    updateForm: (initialAmount, endAmount, years) => ({ type: OPERATION_UPDATE, initialAmount, endAmount, years }),
    calculate: () => ({ type: OPERATION_CALCULATE })
    
};

export const reducer = (state, action) => {
  state = state || initialState;

    if (action.type === OPERATION_UPDATE) {
    return { ...state, count: state.count + 1 };
  }

    if (action.type === OPERATION_CALCULATE) {
    return { ...state, CAGR: 1000 };
  }

  return state;
};
