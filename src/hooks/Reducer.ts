type Props = {
  state: JSX.Element;
  action: JSX.Element;
};
function Reducer(state: any, action: any) {
  const { _ACTIONS } = state;

  switch (action.type) {
    case _ACTIONS.SET_LIST_API:
      return {
        ...state,
        filterPokemon: action.filterPokemon,
      };

    default:
      return state;
  }
}

export default Reducer;
