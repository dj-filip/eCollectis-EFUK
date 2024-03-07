import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, Fragment } from 'react';
import Image from 'mui-image';

// assets
import DropDownIcon from 'assets/assets/icons/dropdown-arrow.svg';
import DropUpIcon from 'assets/assets/icons/dropup-arrow.svg';
import EditIcon from 'assets/assets/icons/edit-icon.svg';
import TrashIcon from 'assets/assets/icons/trash-icon.svg';


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

    
    const dropdownIconStyle = {
      width: "100%",
      height: "100%",
      '@media (max-width: 1920px)': {
        width: "32px !important",
        height: "32px !important", 
      }
    }
      
    return (
      <Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton className='drop-btn'
              aria-label="expand row"
              size="small"
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent !important',
                }
              }}
              onClick={() => setOpen(!open)}
            >
              {open ? <Image src={DropUpIcon} sx={dropdownIconStyle}/> : <Image src={DropDownIcon} sx={dropdownIconStyle}/>}
            </IconButton>
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
            <IconButton className='drop-btn no-pointer-events'
              aria-label="expand row"
              size="small"
              value={row.akt_redosled}
              sx={{
                marginRight: "10px",                
                padding: "0",
                '@media (max-width: 1920px)': {
                  width: "32px !important",
                  height: "32px !important", 
                }
              }}
              onClick={ e => handleEditActivityCall(e.target.value)}
            >
              <Image src={EditIcon} />
            </IconButton>
            <IconButton className='drop-btn no-pointer-events'
              aria-label="expand row"
              size="small"
              value={row.akt_redosled}
              sx={{
                padding: "0",
                '@media (max-width: 1920px)': {
                  width: "32px !important",
                  height: "32px !important", 
                }
              }}
              onClick={ e => handleDeleteActivityCall(e.target.value)}
            >
              <Image src={TrashIcon} />
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 20, paddingRight: 20 }} colSpan={6}>
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