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
        console.dir(action);
        return { ...state, initialAmount: action.initialAmount, endAmount: action.endAmount, years: action.years };
  }

    if (action.type === OPERATION_CALCULATE) {
        return { ...state, CAGR: calculateCAGR(state.initialAmount, state.endAmount,state.years) };
  }

  return state;
};


function calculateCAGR(startAmount, endAmount, years) {
    var cagr = (Math.pow((endAmount / startAmount), 1 / years) - 1) * 100;
    return cagr.toFixed(2);


}
