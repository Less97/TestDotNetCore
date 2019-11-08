const OPERATION_UPDATE = "OPERATION_UPDATE";
const OPERATION_CALCULATE = "OPERATION_CALCULATE";

const initialState = {
    initialAmount: 0,
    interest: 0,
    years: 0,
    frequency: 'monthly',
    add: 0,
    endAmount: 0,
    percentageWithdrawal:4,
    yearlyAmounts: [],
    taxRate:33,
    calculated:false,
};

export const actionCreators = {
    compound: () => ({ type: OPERATION_CALCULATE }),
    updateForm: (initialamount, interest, frequency, years, add, percentageWithdrawal,taxRate) => ({ type: OPERATION_UPDATE, initialamount, interest, frequency, years, add, percentageWithdrawal,taxRate })
    
};

export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case OPERATION_CALCULATE:
            return calculateTable(state);

        case OPERATION_UPDATE:
            console.log("UPDATE");
            console.dir(state);
            return { ...state, initialAmount: action.initialamount, interest: action.interest, frequency: action.frequency, years: action.years, add: action.add, percentageWithdrawal: action.percentageWithdrawal, taxRate: action.taxRate, yearlyAmounts: [action.initialamount] }

        default:
            return state;
    }
};

function calculateTable(state) {
    var interest = parseFloat(state.interest / 100);
    var amount = parseInt(state.initialAmount, 10);
    var adding = state.frequency === 'monthly' ? state.add * 12 : state.add;
    var percentageWithdrawal = parseInt(state.percentageWithdrawal, 10) / 100;
    var taxRate = parseInt(state.taxRate, 10) / 100;
    var amountArray = [{ amount: amount.toFixed(2), percentageWithdrawAnnual: (amount * percentageWithdrawal * taxRate).toFixed(2), percentageWithdrawMonthly: (amount * percentageWithdrawal * 0.083333 * taxRate).toFixed(2) }];
    
    for (var i = 0; i < state.years; i++) {
        amount = amount * (1 + interest) + adding;
        amountArray.push({ amount: amount.toFixed(2), percentageWithdrawAnnual: (amount * percentageWithdrawal * taxRate).toFixed(2), percentageWithdrawMonthly: (amount * percentageWithdrawal * 0.083333 * taxRate).toFixed(2) });
    }
    return { ...state, endAmount: amount.toFixed(2), yearlyAmounts: amountArray,calculated:true };

}

