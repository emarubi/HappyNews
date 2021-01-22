export const initialState = {
    email: '',
    password: '',
};

const authReducer = (state = initialState, action ) => {
    switch (action.type) {
  
      default:
        return { ...state };
    }
  };
  
  export default authReducer;