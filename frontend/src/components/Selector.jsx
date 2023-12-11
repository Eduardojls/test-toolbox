import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';

function Selector({ setSearchTerm }) {
  const options = ['Select', 'test2.csv', 'test3.csv', 'test9.csv'];

  return (
    <div style={{ width: '200px', marginBottom: '12px' }}>
      <Form.Select
        aria-label="Default select example"
        size="sm"
        onChange={(e) => setSearchTerm(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </Form.Select>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (searchTerm) => dispatch({ type: 'SET_SEARCH_TERM', payload: searchTerm }),
});

export default connect(null, mapDispatchToProps)(Selector);
