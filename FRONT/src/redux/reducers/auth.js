export const initialState = {
    email: 'asmatar',
    password: 'vanilla',
};

const authReducer = (state = initialState, action ) => {
    switch (action.type) {
  
      default:
        return { ...state };
    }
  };
  
  export default authReducer;