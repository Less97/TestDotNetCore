const OPERATION_UPDATE = "OPERATION_UPDATE";
const OPERATION_CALCULATE = "OPERATION_CALCULATE";

const initialState = {
    initialAmount: 0,
    interest: 0,
    years: 0,
    frequency: 'monthly',
    add: 0,
    endAmount: 0,
    percentage_withdrawal:4,
    yearlyAmounts: [],
};

export const actionCreators = {
    compound: () => ({ type: OPERATION_CALCULATE }),
    updateForm: (initialamount, interest, frequency, years, add,percentage_withdrawal) => ({ type: OPERATION_UPDATE, initialamount, interest, frequency, years, add,percentage_withdrawal })
};


export const reducer = (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case OPERATION_CALCULATE:
            return { ...state, endAmount: 0 };
        case OPERATION_UPDATE:
            console.log("UPDATE");
            console.dir(state);
            return { ...state, initialAmount: action.initialamount, interest: action.interest, frequency: action.frequency, years: action.years, add: action.add, percentage_withdrawal: action.percentage_withdrawal }
        default:
            return state;
    }

};