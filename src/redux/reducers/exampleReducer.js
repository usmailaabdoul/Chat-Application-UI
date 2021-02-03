const INITIAL_STATE = {
  example: 'Chop Box',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PERFOM_EXAMPLE_ACTION_TYPE':
      const {examples1, examples2} = action.payload;

      return {...state, examples1, examples2};

    default:
      return state;
  }
};
