import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Row from './row.components';


const CollapseTable = ({ data, handleEditActivityCall, handleDeleteActivityCall }) => {
  const createData = (akt_redosled, akt_dijagid, akt_rokdat, akt_naziv, akt_opis, akt_pratecidok, akt_odglice) => {
      return {
        akt_redosled,
        akt_dijagid,
        akt_rokdat, 
        akt_naziv,
        detaljnije: [
          {
            akt_opis,
            akt_pratecidok,
            akt_odglice,
          },
        ],
      };
    }
    
  let rows = []
  for (let i = 0; i < data.length; i++) {
    let item = data[i]
    rows.push(createData(item.akt_redosled, item.akt_dijagid, item.akt_rokdat,  item.akt_naziv, item.akt_opis, item.akt_pratecidok, item.akt_odglice));
  }

  return (
    <TableContainer>
      <Table className="collaps-table" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell width="13%" align="left">Детаљније</TableCell>
            <TableCell width="15%" align="left">Корак</TableCell>
            <TableCell width="25%" align="left">Симбол</TableCell>
            <TableCell width="25%" align="left">Рок извршења</TableCell>
            <TableCell width="25%" align="left">Активност</TableCell>
            <TableCell width="13%" align="left">Детаљније</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {rows.map((row, index) => (
            <Row key={row.akt_redosled} row={row} rowNum={index} handleEditActivityCall={handleEditActivityCall} handleDeleteActivityCall={handleDeleteActivityCall}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapseTable