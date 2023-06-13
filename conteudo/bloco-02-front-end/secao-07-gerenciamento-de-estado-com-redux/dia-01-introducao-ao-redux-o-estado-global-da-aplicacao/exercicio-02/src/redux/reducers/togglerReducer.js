const INITIAL_STATE = {
  status: 'Offline',
  theme: 'Dark',
};

const togglerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'Dark' ? 'Light' : 'Dark',
      };

    case 'TOGGLE_STATUS':
      return {
        ...state,
        status: state.status === 'Offline' ? 'Online' : 'Offline',
      };

    default:
      return state;
  }
};

export default togglerReducer;
