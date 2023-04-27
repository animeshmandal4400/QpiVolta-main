const initialState = {
  components: [],
};

const recentViewedReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case "ADD_COMPONENT":
      const newComponents = [
        ...state.components.filter((c) => c.id !== action.payload.id),
        action.payload,
      ];
      return { ...state, components: newComponents.slice(-5) };
    default:
      return state;
  }
};

export default recentViewedReducer;
