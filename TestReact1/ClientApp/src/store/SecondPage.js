const OPERATION_SUM = 'SUM'
const OPERATION_UPDATE = 'UPDATE'
const initialState = {
    a: 0,
    b: 0,
    s: 0
};

export const actionCreators = {
    sum: () => ({ type: OPERATION_SUM }),
    updateForm: (a, b) =>  ({ type: OPERATION_UPDATE, a, b })
    
};

export const reducer = (state, action) => {
  state = state || initialState;

    switch (action.type) {
        case OPERATION_SUM:
            var sum = parseInt(state.a) + parseInt(state.b);
            console.log('sum:'+sum)
            return { ...state, s: sum };
        case OPERATION_UPDATE:
            console.log('UPDATE a:' + action.a + ' b:' + action.b);
            return { ...state, a: action.a, b: action.b }

        default: 
            return state;
    }

};
