import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { StyledPaper } from "components/styled/StyledPaper";

const Item = styled(Box)(({ variant }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#000A194D",
  ...(variant === "top-table" && {
    height: "112px",
    paddingLeft: "40px",
  }),
  ...(variant === "bottom-table" && {
    height: "100%",
    padding: "25px 40px"
  })
}))



const ProcGrid = ({ table, organizacija, tableData }) => {
  return (
    <StyledPaper sx={{
      backgroundColor: "transparent"
    }}>
    {table === "top" && (
      <Grid container spacing={7}>
        <Grid item xs={4}>
          <Item variant="top-table"><Typography variant="h3">Организациона јединица</Typography></Item>
        </Grid>
        <Grid item xs={5.5}>
          <Item variant="top-table"><Typography variant="h4">{organizacija}</Typography></Item>
        </Grid>
        <Grid item xs={1.25}>
          <Item variant="top-table"><Typography variant="h3">Шифра процеса</Typography></Item>
        </Grid>
        <Grid item xs={1.25}>
          <Item variant="top-table"><Typography variant="h4">{tableData.sifra}</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item variant="top-table"><Typography variant="h3">Шифра организационе јединице</Typography></Item>
        </Grid>
        <Grid item xs={5.5}>
          <Item variant="top-table"><Typography variant="h4"></Typography></Item>
        </Grid>
        <Grid item xs={1.25}>
          <Item variant="top-table"><Typography variant="h3">Верзија</Typography></Item>
        </Grid>
        <Grid item xs={1.25}>
          <Item variant="top-table">{tableData.verzija}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item variant="top-table"><Typography variant="h3">Руководилац организационе јединице</Typography></Item>
        </Grid>
        <Grid item xs={8}>
          <Item variant="top-table"><Typography variant="h4">{tableData.rukovodilac}</Typography></Item>
        </Grid>
        <Grid item xs={4}>
          <Item variant="top-table"><Typography variant="h3">Носилац пословног процеса</Typography></Item>
        </Grid>
        <Grid item xs={8}>
          <Item variant="top-table"><Typography variant="h4">{tableData.nosilac}</Typography></Item>
        </Grid>
      </Grid>
    )}
    {table === "bottom" && (
      <Grid container spacing={7}> 
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h3"></Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h3">Припрема</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h3">Контролише</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h3">Одобрава</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h3">Име и презиме</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h4">{tableData.izradio?.ptps_ime} {tableData.izradio?.ptps_prezime}</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h4">{tableData.kontrolisao?.ptps_ime} {tableData.kontrolisao?.ptps_prezime}</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h4">{tableData.odobrio?.ptps_ime} {tableData.odobrio?.ptps_prezime}</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h3">Поптис</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h4">{tableData.izradio?.ptps_ime} {tableData.izradio?.ptps_prezime}</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h4">{tableData.kontrolisao?.ptps_ime} {tableData.kontrolisao?.ptps_prezime}</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h4">{tableData.odobrio?.ptps_ime} {tableData.odobrio?.ptps_prezime}</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h3">Датум</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h4">{tableData.izradio?.ptps_datum}</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h4">{tableData.kontrolisao?.ptps_datum}</Typography></Item>
        </Grid>
        <Grid item xs={3}>
          <Item variant="bottom-table"><Typography variant="h4">{tableData.odobrio?.ptps_datum}</Typography></Item>
        </Grid>
      </Grid>
    )}
    </StyledPaper>
  )
}

export default ProcGrid;