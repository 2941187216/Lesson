import React from 'react';
import logo from './logo.svg';
import './App.css';
import Edit from './components/root/Edit';
import EditableTable from './components/root/EditableTable';

function App() {
  return (
    <div className="App">
      < EditableTable />
      {/* <Edit /> */}
    </div>
  );
}

export default App;
