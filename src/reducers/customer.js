import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CUSTOMERS_SET:
      return setCustomers(state, action);
  }
  return state;
}

function setCustomers(state, action) {
  const { customers } = action;
  return [ ...state, ...customers ];
}