export const stateReducer = (appState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...appState,
        q: action.payload,
      };

    default:
      return appState;
  }
};
