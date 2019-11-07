const OPERATION_COMPOUND = 'SUM'
const OPERATION_UPDATE = 'UPDATE'

const initialState = {
    initialAmount: 0,
    interest:0,
    years: 0,
    frequency:'monthly',
    add:0,
    endAmount: 0
};

export const actionCreators = {
    compound: () => ({ type: OPERATION_COMPOUND }),
    updateForm: (initialamount, interest, frequency, years, add)  => ({ type: OPERATION_UPDATE, initialamount, interest, frequency, years, add })
};

export const reducer = (state, action) => {
  state = state || initialState;

    switch (action.type) {
        case OPERATION_COMPOUND:
            return { ...state, endAmount: calculateCompoundInterest(state.initialAmount, state.years, state.frequency, state.interest, state.add) };
        case OPERATION_UPDATE:
            console.log("UPDATE");
            console.dir(state);
            return { ...state, initialAmount: action.initialamount, interest: action.interest, frequency: action.frequency, years: action.years, add: action.add }
        default: 
            return state;
    }

};

function calculateCompoundInterest(initialAmount, years, frequency, interest, add) {
    var n = frequency === 'yearly' ? 1 : 12;
    initialAmount = parseInt(initialAmount, 10);
    years = parseInt(years, 10);
    add = parseInt(add,10);
    interest = (parseInt(interest, 10)) / 100;
    var interestOnAmount = initialAmount * Math.pow((1 + interest), years);
    var interestOnContributions = (add * Math.pow(1 + interest / n, n * years) - 1) / (interest / n);
    var total = interestOnAmount + interestOnContributions;
    return total.toFixed(2);
}
