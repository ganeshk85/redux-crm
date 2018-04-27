import React from 'react';
import AddCustomer from './AddCustomer'

function CustomerList({ customers = [] }) {
  return (
    
    <div>
      {
        customers.map((customer, key) => {
          return <div className="customer" key={key}>{customer.name}</div>;
        })
      }
      <AddCustomer />
    </div>
  );
}

export default CustomerList;