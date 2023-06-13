import { colorCreator } from '../../helpers/color';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const colorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };

    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };

    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, colorCreator()],
        index: state.colors.length,
      };

    default:
      return state;
  }
};

export default colorReducer;
