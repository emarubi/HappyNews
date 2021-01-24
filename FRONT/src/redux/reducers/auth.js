export const initialState = {
    email: 'toto',
    password: 'vanilla',
};

const authReducer = (state = initialState, action ) => {
    switch (action.type) {
  
      default:
        return { ...state };
    }
  };
  
  export default authReducer;