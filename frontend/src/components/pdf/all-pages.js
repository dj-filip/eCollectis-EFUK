
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Image from 'mui-image';



// assets
import DropDownIcon from 'assets/assets/icons/dropdown-arrow.svg';

const AllPages = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNum(1);
  }

  // const pdf = {props}


  const formContainer = {
    width: "100%",
    margin: "auto",
    display: "inline-block",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const pdf = props.pdf

  return (
    <Box sx={{...formContainer}}>
      <Document
      file={pdf}
      onLoadSuccess={onDocumentLoadSuccess}
      className="pdf-document-pages-wrap"
      >
        <Page size="A4" renderTextLayer={false} renderAnnotationLayer={false} pageNumber={pageNum} />
        <Page className="main-pdf-page"size="A4" scale={1.5} renderTextLayer={false} renderAnnotationLayer={false} pageNumber={pageNum + 1} />
        <Page size="A4" renderTextLayer={false} renderAnnotationLayer={false} pageNumber={pageNum + 2} />
        {/* {Array.from(new Array(numPages), (el, index) => (
          <Page size="A4" renderTextLayer={false} key={`page_${index + 1}`} pageNumber={index + 1} />
        ))} */}
      </Document>
      <Stack direction="row" sx={{
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
          padding: "10px 0",
          borderBottom: "1px solid #0A1423",
          borderTop: "1px solid #0A1423",
          backgroundColor: "transparent !important",
          }}>
          <Button variant="contained"
            onClick={() => {
              if (pageNum > 0) {
                setPageNum(pageNum - 1);
              }
            }}
          sx={{
            padding: "0",
            backgroundColor: "transparent !important",
            color: "#FFF",
            boxShadow: "none",
            '&:hover': {
              backgroundColor: "transparent !important",  
            }
          }}>
            <Image src={DropDownIcon} width={"32px"} height={"32px"} 
              sx={{
                transform: "rotate(90deg)",
              }}>
            </Image>
          </Button>
          <Typography sx={{
            fontSize: "12px",
            fontWeight: "500",
            whiteSpace: "nowrap",
          }}>Страна {pageNum + 1} од {numPages}</Typography>
          <Button variant="contained"
            onClick={() => {
              if (pageNum + 1 < numPages) {
                setPageNum(pageNum + 1);
              }
            }}
            sx={{
              padding: "0",
              backgroundColor: "transparent !important",
              color: "#FFF",
              boxShadow: "none",
              '&:hover': {
                backgroundColor: "transparent !important",  
              }
            }}>
              <Image src={DropDownIcon}
                  sx={{
                    width: "40px",
                    height: "40px",
                    transform: "rotate(270deg)",
                    '@media (max-width: 1920px)': {
                      width: "32px !important",
                      height: "32px !important",
                  },
                }}>
              </Image>
            </Button>
        </Stack>
    </Box>
  );
}

export default AllPages