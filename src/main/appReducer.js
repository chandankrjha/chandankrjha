import * as actions from "./appActions";

export default function app(state={ loading: false }, action) {
  switch (action.type) {
    case actions.APP_START:
      return { ...state, params: action.params, loading: true };
    case actions.APP_START_SUCCESS:
      return { ...state, loading: false };
    case actions.APP_START_FAILED:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

