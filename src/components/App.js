import React from 'react';

function App({ children }) {
  return (
    <div>
    <div id="header">CRM</div>
    {children}
    </div>
    );
}

export default App;