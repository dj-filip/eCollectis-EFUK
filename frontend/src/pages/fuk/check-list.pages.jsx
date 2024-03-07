import { React, useState } from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MUIDataTable from "mui-datatables";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

const CheckList = () => {
  const navigate = useNavigate();

  const [contractors, setContractors] = useState([]);
  const contractorColumns = [
    {
      label: "Шифра",
      name: "sifra",
    },
    {
      label: "Активност",
      name: "aktivnost",
    },
    {
      label: "Опис активности",
      name: "opis-aktivnosti",
    },
    {
      label: "Задужена особа",
      name: "zaduzena-osoba",
    },
    {
      label: "Рок",
      name: "rok",
    },
    {
      label: "Потврда о документацији",
      name: "potvrda-o-dokumentaciji",
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
      name: "Датум",
      direction: "desc",
    },
    textLabels: {
      body: {
        noMatch: "Нема резултата",
        toolTip: "Сортирај",
        columnHeaderTooltip: (column) => `Сортирај по ${column.label.toLowerCase()}`,
      },
      pagination: {
        next: "Следећа страна",
        previous: "Претходна страна",
        rowsPerPage: "Резултати по страни:",
        displayRows: "од",
      },
      toolbar: {
        search: "Претрага",
        downloadCsv: "Преузми ЦСВ",
        print: "Штампај",
        viewColumns: "Одабери колоне",
        filterTable: "Филтрирај",
      },
      filter: {
        all: "Сви",
        title: "ФИЛТЕРИ",
        reset: "РЕСЕТ",
      },
      viewColumns: {
        title: "Прикажи колоне",
        titleAria: "Прикажи/Уклони колоне",
      },
    },
  };

  return (
    <Box sx={{ ...formContainer }}>
    {/* <Box>
      <Button variant="contained" sx={{ ...buttonMargin }}>
        Dodaj Novu
      </Button>
    </Box> */}
    <Paper sx={{ ...formContainer }}>
      <MUIDataTable title="Чек листа" data={contractors} columns={contractorColumns} options={options} />
    </Paper>
    <Box>
      <Button variant="contained" 
        sx={{ ...buttonMargin}}
        onClick={() => {
          navigate("/fuk/glavna")
        }}>
        Главна страна
      </Button>
    </Box>
    </Box>
  )
}

export default CheckList