import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Table from "react-bootstrap/Table";
import Selector from "./Selector";

function TableComponent({ searchTerm, responseInfo, getData, setSearchTerm, setResponseInfo }) {
  useEffect(() => {
    getData(searchTerm).then((response) => {
      setResponseInfo(response);
    });
  }, [searchTerm]);

  return (
    <>
      <Selector setSearchTerm={setSearchTerm} />
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

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  responseInfo: state.responseInfo,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (searchTerm) => dispatch({ type: 'SET_SEARCH_TERM', payload: searchTerm }),
  setResponseInfo: (responseInfo) => dispatch({ type: 'SET_RESPONSE_INFO', payload: responseInfo }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
