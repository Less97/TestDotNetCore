const OPERATION_COMPOUND = 'SUM'
const OPERATION_UPDATE = 'UPDATE'
const initialState = {
    initialAmount: 0,
    years: 0,
    compounded: 0
};

export const actionCreators = {
    compound: () => ({ type: OPERATION_COMPOUND }),
    updateForm: (a, b) =>  ({ type: OPERATION_UPDATE, a, b })
    
};

export const reducer = (state, action) => {
  state = state || initialState;

    switch (action.type) {
        case OPERATION_COMPOUND:
           
          
            return { ...state, compoundrd: 100 };
        case OPERATION_UPDATE:
            console.log('UPDATE a:' + action.a + ' b:' + action.b);
            return { ...state, a: action.a, b: action.b }

        default: 
            return state;
    }

};
