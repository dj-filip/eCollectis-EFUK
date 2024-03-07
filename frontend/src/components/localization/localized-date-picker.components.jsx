import React from 'react'
import srLatnLocale from 'date-fns/locale/sr-Latn';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


const LocalizedDatePicker = () => {
    const [locale, setLocale] = React.useState('rs');
    const [value, setValue] = React.useState(new Date());

    const selectLocale = (newLocale) => {
        setLocale(newLocale);
    };  

    const localeMap = {
        // rs: rsLocale,
    };
      
    const maskMap = {
        rs: '__.__.____',
    };
    

    return (
        <>Work in progress</>
    //   <LocalizationProvider
    //     dateAdapter={AdapterDateFns}
    //     adapterLocale={localeMap[locale]}
    //   >
    //     <div>
    //       <ToggleButtonGroup value={locale} exclusive sx={{ mb: 2, display: 'block' }}>
    //         {Object.keys(localeMap).map((localeItem) => (
    //           <ToggleButton
    //             key={localeItem}
    //             value={localeItem}
    //             onClick={() => selectLocale(localeItem)}
    //           >
    //             {localeItem}
    //           </ToggleButton>
    //         ))}
    //       </ToggleButtonGroup>
    //       <DatePicker
    //         mask={maskMap[locale]}
    //         value={value}
    //         onChange={(newValue) => setValue(newValue)}
    //         renderInput={(params) => <TextField {...params} />}
    //       />
    //     </div>
    //   </LocalizationProvider>
    );
}

export default LocalizedDatePicker