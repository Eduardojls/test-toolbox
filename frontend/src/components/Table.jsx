import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Table from "react-bootstrap/Table";
import Selector from "./Selector";

function TableComponent({ searchTerm, responseInfo, getData, setSearchTerm, setResponseInfo }) {

  // This effect gets fired everytime the selector has changed an option
  // So that, we can set that value to the state and fetch the api 
  useEffect(() => {
    getData(searchTerm).then((response) => {
      setResponseInfo(response);
    });
  }, [searchTerm]);

  return (
    <>
      {/* Selector component */}
      <Selector setSearchTerm={setSearchTerm} />

      {/* Bootstrap Table */}
      <Table striped bordered hover size="l" className="table-sm">
        <thead>
          <tr>
            <th>File name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {/* If responseInfo validations are corrects, we iterate each table row */}
          {responseInfo.status === 200 &&
            responseInfo.data.length > 0 &&
            responseInfo.data.map((row) => {
              return row.lines?.map((line, index) => (
                <tr key={index}>
                  <td>{row.file}</td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              ));
            })}
        </tbody>
      </Table>
    </>
  );
}

// This function keeps my table state updated 
const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  responseInfo: state.responseInfo,
});

// This function fires an action event, that may cause a change state
const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (searchTerm) => dispatch({ type: 'SET_SEARCH_TERM', payload: searchTerm }),
  setResponseInfo: (responseInfo) => dispatch({ type: 'SET_RESPONSE_INFO', payload: responseInfo }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
