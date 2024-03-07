import { React, useState }  from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const ViewRemovedProcesses = () => {
  const navigate = useNavigate();
  const [contractors, setContractors] = useState([]);

  const contractorColumns = [
    {
      label: "Oblast",
      name: "oblast",
    },
    {
      label: "Proces",
      name: "proces",
    },
    {
      label: "Broj procedura",
      name: "procedure",
    },
  ]

  const formContainer = {
    width: "100%",
    maxWidth: "90%",
    margin: "auto",
    // padding: 4,
    display: "inline-block",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonMargin = {
    marginBottom: 3,
  };

  const options = {
    selectableRows: "none",
    elevation: 0,
    rowsPerPage: 10,
    rowsPerPageOptions: [10,],
    sortOrder: {
      name: "Datum",
      direction: "desc",
    },
    textLabels: {
      body: {
        noMatch: "Nema rezultata",
        toolTip: "Sortiraj",
        columnHeaderTooltip: (column) => `Sortiraj po ${column.label.toLowerCase()}`,
      },
      pagination: {
        next: "Sledeća strana",
        previous: "Prethodna strana",
        rowsPerPage: "Rezultati po strani:",
        displayRows: "od",
      },
      toolbar: {
        search: "Pretraga",
        downloadCsv: "Preuzmi CSV",
        print: "Štampaj",
        viewColumns: "Odaberi kolone",
        filterTable: "Filtriraj",
      },
      filter: {
        all: "Svi",
        title: "FILTERI",
        reset: "RESET",
      },
      viewColumns: {
        title: "Prikaži kolone",
        titleAria: "Prikaži/ukloni kolone",
      },
    },
  };

  return (
    <Box sx={{ ...formContainer }}>
    <Box>
      <Button variant="contained" sx={{ ...buttonMargin }}>
        Dodaj Novu
      </Button>
    </Box>
    <Paper sx={{ ...formContainer }}>
      <MUIDataTable title="Pregled uklonjenih procesa" data={contractors} columns={contractorColumns} options={options} />
    </Paper>
    <Box>
      <Button variant="contained" 
        sx={{ ...buttonMargin}}
        onClick={() => {
          navigate("/fuk/glavna")
        }}>
        Natrag
      </Button>
    </Box>
    </Box>
  )
}

export default ViewRemovedProcesses