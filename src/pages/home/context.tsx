export const homeActions = {
  toggleExpand: "toggleExpand",
};

export interface HomeState {
  exanded?: boolean;
}

export const homeInitialState: HomeState = { exanded: false };

export const homeReducer = (
  state: HomeState,
  action: { type: string; payload?: any }
): HomeState => {
  switch (action.type) {
    case homeActions.toggleExpand:
      return { ...state, exanded: !state.exanded };

    default:
      return { ...state };
  }
};
