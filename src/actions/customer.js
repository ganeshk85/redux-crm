import * as actionTypes from '../constants/actionTypes';

export function setCustomers(customers) {
  return {
    type: actionTypes.CUSTOMERS_SET,
    customers
  };
};