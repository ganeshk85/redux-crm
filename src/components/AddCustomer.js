import React from 'react';

function AddCustomer() {

  return (
    <div>
      <h2>New Customer</h2>
      <label>Name:</label>
      <input type="text" name="name" value="" />
      <label>Phone:</label>
      <input type="text" name="phone" value="" />
      <button name="addCustomerbtn" >Add Customer</button>
    </div>
  );
}

export default AddCustomer;