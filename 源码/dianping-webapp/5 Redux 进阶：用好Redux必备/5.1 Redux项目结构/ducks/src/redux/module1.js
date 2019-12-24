// Actions
const LOAD   = 'widget/LOAD';
const CREATE = 'widget/CREATE';
const UPDATE = 'widget/UPDATE';
const REMOVE = 'widget/REMOVE';

const initialState = {
  widget: null,
  isLoading: false,
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: 
      //...
    case CREATE:
      //...
    case UPDATE:
      //...
    case REMOVE:
      //...
    default: return state;
  }
}

// Action Creators
export const actions = {
  loadWidget: function loadWidget() {
    return { type: LOAD };
  },
  createWidget: function createWidget(widget) {
    return { type: CREATE, widget };
  },
  updateWidget: function updateWidget(widget) {
    return { type: UPDATE, widget };
  },
  removeWidget: function removeWidget(widget) {
    return { type: REMOVE, widget };
  }
}
