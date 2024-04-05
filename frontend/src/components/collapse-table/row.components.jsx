import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { useState, Fragment } from 'react';

// assets
import IconBtn from 'components/buttons/icon-btn/IconBtn';
import { Stack } from '@mui/material';


const Row = (props) => {
    const { row, rowNum, handleEditActivityCall, handleDeleteActivityCall } = props;
    const [open, setOpen] = useState(false);

    const getImageBasedOnId = (id) => {
      if (parseInt(id) === 1) {
        if (rowNum <= 0) {
          return ['oval-symbol', 'ПОЧЕТАК'];
        } else {
          return ['oval-symbol', 'КРАЈ'];
        }
      } else if (parseInt(id) === 2) {
        return ['box-symbol', ''];
      } else if (parseInt(id) === 3) {
        return ['triangle-symbol', 'КОНТРОЛА'];
      // } else if (parseInt(id) === 4) {
      //   return 'triangle-symbol';
      } else 
      {
        return "";
      }
    } 

    
      
    return (
      <Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconBtn type={open? "drop-up" : "drop-down"} onClick={() => setOpen(!open)} sx={{
              padding: "4px !important",
              '& .MuiSvgIcon-root': {
                fontSize: "25px"
              },
            }} />
          </TableCell>
          <TableCell component="th" scope="row" align="left">
            {row.akt_redosled}
          </TableCell>
          <TableCell align="left" className="collaps-table__image-wrap">
            <Box className={getImageBasedOnId(row.akt_dijagid)[0]}>
              <Box>
              <Typography>
                {getImageBasedOnId(row.akt_dijagid)[1]}
              </Typography>
              </Box>
            </Box>
          </TableCell>
          <TableCell align="left">{row.akt_rokdat}</TableCell>
          <TableCell align="left">{row.akt_naziv}</TableCell>
          <TableCell>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <IconBtn type="edit" value={row.akt_redosled} onClick={ e => handleEditActivityCall(e.target.value)} />
              <IconBtn type="delete" value={row.akt_redosled} onClick={ e => handleDeleteActivityCall(e.target.value)} />
            </Stack>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 20, paddingRight: 20, borderBottom: open ? "1px solid transparent" : "none"  }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 0 }}>
                <Table className="inside-table" size="small" aria-label="purchases" style={{ marginBottom: 20 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Опис</TableCell>
                      <TableCell>Пратећи документи</TableCell>
                      <TableCell align="right">Одговорно лице</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.detaljnije.map((detaljnijeRow) => (
                      <TableRow key={detaljnijeRow.akt_opis}>
                        <TableCell component="th" scope="row">{detaljnijeRow.akt_opis}</TableCell>
                        <TableCell>{detaljnijeRow.akt_pratecidok}</TableCell>
                        <TableCell align="right">{detaljnijeRow.akt_odglice}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>
    );
  }

export default Row