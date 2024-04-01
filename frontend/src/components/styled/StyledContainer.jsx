import { styled, Container } from "@mui/material";


export const StyledContainer = styled(Container)(() => ({
  width: "100%",      
  maxWidth: "1760px",
  marginRight: "200px",
  marginLeft: "400px",
  paddingTop: "50px",
  '@media (max-width: 1920px)': {
    maxWidth: "1400px",
  }
}))