export default function(initState = {}, actionHandlers = {}) {
  return (state = initState, action = {}) => {
    const handler = actionHandlers[action.type];
    return handler ? handler(state, action) : state;
  };
}
