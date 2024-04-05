import { useEffect, useState } from 'react';

import { getAktivnosti } from 'services/fuk-aktivnost.services';
import CollapseTable from 'components/collapse-table/collapse-table.components';


const ViewActivity = ({ procesId, proceduraId }) => {


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


  return (
    <CollapseTable data={aktivnosti} />
  )
}

export default ViewActivity