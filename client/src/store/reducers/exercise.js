import * as ActionTypes from '../actionTypes';

const initialState = {exercise: [], status: 'inited'};

export const exercise = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_EXERCISE_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    case ActionTypes.CREATE_EXERCISE_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.UPDATE_EXERCISE_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.payload.error,
      };
    case ActionTypes.UPDATE_EXERCISE_SUCCESS:
      return {
        ...state,
      };

    default:
      return state;
  }
};
