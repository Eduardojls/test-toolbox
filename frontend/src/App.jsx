import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import TableComponent from './components/Table';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const getData = async(searchTerm) => {
    const fileName = (!searchTerm || searchTerm == 'Select') ? null : searchTerm;
    return await axios({
      url: fileName !== null ? `http://localhost:8081/files/data?fileName=${fileName}` : `http://localhost:8081/files/data`,
      method: 'GET'
    });
  }
  
  return (
    <>
      <Alert key="danger" variant="danger">
        React Test App
      </Alert>
      <div style={{ padding: '0 100px' }}>
        <TableComponent 
          getData={getData}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
      </div>
    </>
  );
}

export default App;
