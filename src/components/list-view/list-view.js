import React from 'react';
import get from 'lodash/get';

const ListView = ({ rowsIdArray, renderRow, rowsById }) => {
  const renderRowById = (rowId) => (
    <li key={ rowId }>
      { renderRow(get(rowsById, rowId)) }
    </li>
  );
  
  return (
    <ul> { rowsIdArray.map((row) => renderRowById(row)) } </ul>
  );
};

export default ListView
