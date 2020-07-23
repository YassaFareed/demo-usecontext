//it is a pure function (it doesn't change,update the external api ,external variable ) on running it creates new object and return it instead of making another 
const numberReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.val
      case 'DECREMENT':
        return state - action.val
    }
}
export default numberReducer;