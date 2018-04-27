import React from 'react';
import { connect } from 'react-redux';
import CustomerList from '../components/CustomerList';

function mapStateToProps(state) {
  const customers = state.customer;
  return {
    customers
  }
}

export default connect(mapStateToProps)(CustomerList);