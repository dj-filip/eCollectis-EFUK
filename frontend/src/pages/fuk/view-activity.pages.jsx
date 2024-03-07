import { useEffect, useState } from 'react';

import { getAktivnosti } from 'services/fuk-aktivnost.services';
import { Grid, Typography } from '@mui/material';
import Item from 'components/grid/item/item.components';
import CollapseTable from 'components/collapse-table/collapse-table.components';


const ViewActivity = (props) => {
  const {
    procesId,
    proceduraId
  } = props;


  const [aktivnosti, setAktivnosti] = useState([])

  // get all data
  useEffect(() => {
    (async () => {
      const res = await getAktivnosti(procesId, proceduraId);
      const aktivnostiData = res.data.fuk_aktivnosti
      var tempAktivnosti = []
      var tempRedosled = []
      for (var i = 0; i < aktivnostiData.length; i++) {
        if (!tempRedosled.includes(aktivnostiData[i].akt_redosled)) {
          tempRedosled.push(aktivnostiData[i].akt_redosled)
          tempAktivnosti.push(aktivnostiData[i])
        }
      }
      setAktivnosti(tempAktivnosti);
    })();
  }, []);

  const headline = {
    fontWeight: 'bold', 
    fontSize: 'h8.fontSize', 
    textAlign: 'center'
  };

  return (
    <Grid container sx={{
      backgroundColor: 'transparent !important',
    }}>
      <Grid item xs={12}>
        <Item sx={{
            '& td, th': {
              color: "#FFF !important",
            }
          }}>
            <Typography className="opacity-txt-box" sx={{
              marginBottom: '20px',
              paddingTop: '50px',
              paddingBottom: '50px',
              backgroundColor: '#000A194D',
              fontSize: '18px',
              fontWeight: '500',
              textTransform: 'uppercase',
              color: '#3AD1E8 !important',
              '@media (max-width: 1920px)': {
                fontSize: "16px", 
              }
            }}>Активности</Typography>
          <CollapseTable data={aktivnosti} />
        </Item>
      </Grid>
    </Grid>
  )
}

export default ViewActivity