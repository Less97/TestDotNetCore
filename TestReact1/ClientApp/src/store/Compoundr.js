const OPERATION_COMPOUND = 'SUM'
const OPERATION_UPDATE = 'UPDATE'

const initialState = {
    initialAmount: 0,
    interest:0,
    years: 0,
    frequency:'monthly',
    monthlyAdd:0,
    endAmount: 0
};

export const actionCreators = {
    compound: () => ({ type: OPERATION_COMPOUND }),
    updateForm: (initialamount, interest, frequency, years)  => ({ type: OPERATION_UPDATE, initialamount, interest, frequency, years })
};

export const reducer = (state, action) => {
  state = state || initialState;

    switch (action.type) {
        case OPERATION_COMPOUND:
            return { ...state, endAmount: calculateCompoundInterest(state.initialAmount, state.years, state.frequency, state.interest) };
        case OPERATION_UPDATE:
            return { ...state, initialAmount: action.initialamount, interest: action.interest, frequency: action.frequency, years: action.years }
        default: 
            return state;
    }

};

function calculateCompoundInterest(initialAmount, years,frequency, interest) {
    initialAmount = parseInt(initialAmount, 10); years = parseInt(years, 10); interest = (parseInt(interest, 10)) / 100;
    var endAmount = (initialAmount * Math.pow((1 + (interest / years)), years)).toFixed(2);
    return endAmount;
}
