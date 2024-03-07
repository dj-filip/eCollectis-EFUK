import { useState, useEffect, useRef } from "react";

import { getOblasti, postOblast, patchOblast, deleteOblast } from 'services/fuk-oblast.services.js'
import { getProcesiForOblast, deleteProces } from 'services/fuk-proces.services.js'
import { getProcedure, deleteProcedura } from 'services/fuk-procedura.services.js'
import { getAktivnosti } from "services/fuk-aktivnost.services";

import Image from "mui-image";
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText,
  DialogTitle, 
  TextField,
} from '@mui/material';

// assets
import AddIcon from 'assets/assets/icons/add-icon.svg';
import ViewIcon from 'assets/assets/icons/view-icon.svg';
import EditIcon from 'assets/assets/icons/edit-icon.svg';
import TrashIcon from 'assets/assets/icons/trash-icon.svg';
import CloseIcon from 'assets/assets/icons/close-icon.svg';
import { useNavigate } from "react-router-dom";

const Accordion = () => {

  // FROM MAIN START
  // oblast
  const [isOblastSelected, setIsOblastSelected] = useState(false)
  const [selectedOblastId, setSelectedOblastId] = useState(null)
  const [oblastIndex, setOblastIndex] = useState(null)
  const [openDodavanjeOblasti, setOpenDodavanjeOblasti] = useState(false);
  const [openObradaOblasti, setOpenObradaOblasti] = useState(false);
  const [oblastValue, setOblastValue] = useState("");
  const [openBrisanjeOblasti, setOpenBrisanjeOblasti] = useState(false);
  const [oblastItemIndex, setOblastItemIndex] = useState(null);


  const ERROR_1 = 0;
  const ERROR_OUT_OF_RANGE = 1;

  const errorMessages = ["Молимо вас да прво одаберете ставку из одговарајуће категорије у падајућој листи пре него што покренете ову операцију", "Молимо вас да прво одаберете ставку из одговарајуће категорије у падајућој листи пре него што покренете ову операцију", "Молимо вас да прво одаберете ставку из одговарајуће категорије у падајућој листи пре него што покренете ову операцију"]

  // dodavanje oblasti
  const handleOpenDodavanjeOblasti = (e) => {
    e.stopPropagation();
    setOpenDodavanjeOblasti(true);
  };
  const handleCloseDodavanjeOblasti = () => {
    setOpenDodavanjeOblasti(false);
  };
  const handleConfirmDodavanjeOblasti = async () => {
    setOpenDodavanjeOblasti(false);

    const data = { selectedOblastName }
    const result = await postOblast(data)

    window.location.reload(false);
  };

  // obrada oblasti
  const handleOpenObradaOblasti = (oblastValue) => {
      setOblastValue(oblastValue);
      setOpenObradaOblasti(true);
  };
  const handleCloseObradaOblasti = () => {
    setOpenObradaOblasti(false);
  };
  const handleConfirmObradaOblasti = async () => {
      setOpenObradaOblasti(false);

      const data = { oblastId: selectedOblastId + 1, selectedOblastName }
      const result = await patchOblast(selectedOblastId, data)

  };

  // brisanje oblasti
  const handleOpenBrisanjeOblasti = (index) => {
    if (isOblastSelected) {
      setOblastItemIndex(index);
      setOpenBrisanjeOblasti(true);
    } else {
      
    }
  };
  const handleCloseBrisanjeOblasti = () => {
    setOpenBrisanjeOblasti(false);
  };
  const handleConfirmBrisanjeOblasti = async () => {
    setOpenBrisanjeOblasti(false);

    const result = await deleteOblast(oblastItemIndex);

    window.location.reload(false);
  };


  // proces
  const [isProcesSelected, setIsProcesSelected] = useState(false)
  const [selectedProcesId, setSelectedProcesId] = useState(null)
  const [imeProcesa, setImeProcesa] = useState("")
  const [openBrisanjeProcesa, setOpenBrisanjeProcesa] = useState(false);
  const [procesItemIndex, setProcesItemIndex] = useState(null)

  // brisanje procesa
  const handleOpenBrisanjeProcesa = (index) => {
    if (isProcesSelected) {
      setProcesItemIndex(index)
      setOpenBrisanjeProcesa(true);
    } else {
      setOpenErrorDialog('proces')
    }
  };
  const handleCloseBrisanjeProcesa = () => {
    setOpenBrisanjeProcesa(false);
  };
  const handleConfirmBrisanjeProcesa = async () => {
    const resdeleteProces = await deleteProces(procesItemIndex);
    setOpenBrisanjeProcesa(false);

    window.location.reload(false);
  };


  // procedura
  const [isProceduraSelected, setIsProceduraSelected] = useState(false)
  const [proceduraId, setProceduraId] = useState(null)
  const [imeProcedure, setImeProcedure] = useState("")
  const [proceduraIndex, setProceduraIndex] = useState(null)
  const [openBrisanjeProcedure, setOpenBrisanjeProcedure] = useState(false);
  const [proceduraItemIndex, setProceduraItemIndex] = useState(null)


  const handleOpenBrisanjeProcedure = (index) => {
    setProceduraItemIndex(index);
    setOpenBrisanjeProcedure(true);
  };
  const handleCloseBrisanjeProcedure = () => {
    setOpenBrisanjeProcedure(false);
  };

  const handleConfirmBrisanjeProcedure = async () => {
    const resdeleteProcedura = await deleteProcedura(proceduraItemIndex);
    setOpenBrisanjeProcedure(false);

    window.location.reload(false);
  };


  // handle error dialog
  const [openErrorDialog, setOpenErrorDialog] = useState(false);

  const handleCloseErrorDialog = () => {
    setOpenErrorDialog(false);
  };


  // update functions from main page 
  const updateProcedura = (proceduraId, proceduraIndex, imeProcedure, isProceduraSelected) => {
    setProceduraId(proceduraId)
    setProceduraIndex(proceduraIndex)
    setImeProcedure(imeProcedure)
    setIsProceduraSelected(isProceduraSelected)
  } 

  // FROM MAIN END

  const navigation = useNavigate();

  const oblastiBtnRef = useRef();
  const procesiBtnRef = useRef();
  const procedureBtnRef = useRef();
  const aktivnostiBtnRef = useRef();

  const [selectedOblastRawId, setSelectedOblastRawId] = useState(0);
  const [selectedProcesRawId, setSelectedProcesRawId] = useState(0);
  const [selectedProceduraIndex, setSelectedProceduraIndex] = useState(0);

  const [selectedOblastName, setSelectedOblastName] = useState("Изаберите област");
  const [selectedProces, setSelectedProces] = useState("Изаберите процес");
  const [selectedProcedura, setSelectedProcedura] = useState("Изаберите процедуру");

  const [oblastiList, setOblastiList] = useState([]);
  const [procesiList, setProcesiList] = useState([]);
  const [procedureList, setProcedureList] = useState([]);
  const [aktivnostiList, setAktivnostiList] = useState([]);


  const [expanded, setExpanded] = useState("oblasti");

  const initProcesIndex = 0;
  const initProceduraIndex = 0;

  // mockup data (@TODO: will be removed once backend is made)
  const tabs = 3

  const mockupProcesi = [[' '],]
  const mockupProcedure = [[' '],]

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    var tempOblasti = []
    var tempProcesi = []
    var tempProcedure = []
    var tempAktivnosti = []

    
    // OBLASTI
    const oblastiResult = await getOblasti();
    const oblasti = oblastiResult.data.fuk_oblasti;
    console.log("OBLASTI: " + JSON.stringify(oblasti));
    for (var i = 0; i < oblasti.length; i++) {
      const currentOblast = oblasti[i].obl_naziv;
      const currentOblastId = oblasti[i].obl_id;
      tempOblasti.push({
        key: i,
        id: currentOblastId,
        selected: false,
        name: currentOblast,
      })
    }

    console.log("TEMP OBLASTI: " + JSON.stringify(tempOblasti));



    // PROCESI
    const procesiResult = await getProcesiForOblast(oblasti[selectedOblastRawId].obl_id);
    const procesi = procesiResult.data.fuk_procesi;
    for (var i = 0; i < procesi.length; i++) {
      const currentProces = procesi[i].prcs_naziv
      const currentProcesSifra = procesi[i].prcs_sifra
      const currentProcesId = procesi[i].prcs_id;
      tempProcesi.push({
        key: i,
        id: currentProcesId,
        selected: false,
        name: currentProcesSifra + " - " + currentProces,
      })
    }

    //sort procesi list on first load
    function sortProces(a, b) {
      const procesA = a.name.replace(/[^0-9]/g, "");
      const procesB = b.name.replace(/[^0-9]/g, "");

      return (procesA - procesB);
    }

    tempProcesi.sort(sortProces);
    setProcesiList(tempProcesi);


    // PROCEDURE
    let procedure = [];
    if (procesi.length > 0) {
      const procedureResult = await getProcedure(procesi[selectedProcesRawId].prcs_id);
      procedure = procedureResult.data.fuk_procedure;
      for (var i = 0; i < procedure.length; i++) {
        const currentProcedura = procedure[i].proc_naziv
        const currentProceduraId = procedure[i].proc_id;
        tempProcedure.push({
          key: i,
          id: currentProceduraId,
          selected: false,
          name: currentProcedura,
        })
      }
    }


    // AKTIVNOSTI
    if (procesi.length > 0 && procedure.length > 0) {
      const aktivnostiResult = await getAktivnosti(procesi[selectedProcesRawId].prcs_id, procedure[selectedProceduraIndex].proc_id);
      const aktivnosti = aktivnostiResult.data.fuk_aktivnosti
      for (var i = 0; i < aktivnosti.length; i++) {
        const currentAktivnost = aktivnosti[i].akt_redosled + ". " + aktivnosti[i].akt_naziv
        if (!tempAktivnosti.includes(currentAktivnost)) {
          tempAktivnosti.push(currentAktivnost);
        }
      }
    }

    setOblastiList(tempOblasti)
    setProcesiList(tempProcesi)
    setProcedureList(tempProcedure)
    setAktivnostiList(tempAktivnosti)
  }



  // SELECT OBLAST   
  const handleOblastItemClick = async (event, index, name) => {
    const procesiResultRes = await getProcesiForOblast(oblastiList[index].id);
    const procesiResult = procesiResultRes.data.fuk_procesi
    var tempProcesi = [];

    for (var i = 0; i < procesiResult.length; i++) {
      const current = procesiResult[i]
      const currentProces = current.prcs_naziv
      const currentProcesSifra = current.prcs_sifra
      const currentProcesId = current.prcs_id;
      tempProcesi.push({
        key: i,
        id: currentProcesId,
        selected: false,
        name: currentProcesSifra + " - " + currentProces,
      })
    }
    setSelectedOblastRawId(index);
    setSelectedOblastName(oblastiList[index].name);
    setSelectedOblastId(oblastiList[index].id);
    setIsOblastSelected(true);

    //sort procesi list
    function sortProces(a, b) {
      const procesA = a.name.replace(/[^0-9]/g, "");
      const procesB = b.name.replace(/[^0-9]/g, "");

      return (procesA - procesB);
    }

    tempProcesi.sort(sortProces);
    setProcesiList(tempProcesi);

    setExpanded("procesi");

    // nullify current selected proces and procedura values on oblast change
    setSelectedProces("");
    setSelectedProcesRawId(-1);
    setSelectedProcedura("");
    setSelectedProceduraIndex(-1);
    updateProcedura(procedureList[0].id, 0, procedureList[0].name, false)


    // close oblasti list tab
    oblastiBtnRef.current.classList.remove('active');
    oblastiBtnRef.current.nextElementSibling.style.maxHeight = 0;

    // open procesi list tab
    procesiBtnRef.current.classList.add('active');
    procesiBtnRef.current.nextElementSibling.style.maxHeight = procesiBtnRef.current.nextElementSibling.scrollHeight + 'px';
  }

  console.log("SELECTED OBLAST RAW ID: " + selectedOblastRawId);
  console.log("SELECTED OBLAST ID: " + selectedOblastId);

  
// SELECT PROCES
  const handleProcesItemClick = async (event, index, name) => {
    const procedureResultRes = await getProcedure(procesiList[index].id);
    const procedureResult = procedureResultRes.data.fuk_procedure

    var tempProcedure = []

    for (var i = 0; i < procedureResult.length; i++) {
      const current = procedureResult[i]
      const currentProcedura = current.proc_naziv
      const currentProceduraId = current.proc_id;
      tempProcedure.push({
        key: i,
        id: currentProceduraId,
        selected: false,
        name: currentProcedura,
      })
    }
    setSelectedProcesRawId(index);
    setSelectedProces(procesiList[index].name);
    setSelectedProcesId(procesiList[index].id);
    setIsProcesSelected(true);
    setProcedureList(tempProcedure)
    setExpanded("procedure");

    console.log(procesiList);
    console.log(index);
    console.log(procesiList[index].name);


    // nullify current selected procedura values on proces change
    setSelectedProcedura("");
    setSelectedProceduraIndex(-1);
    updateProcedura(procedureList[0].id, 0, procedureList[0].name, false)

    // close procesi list tab
    procesiBtnRef.current.classList.remove('active');
    procesiBtnRef.current.nextElementSibling.style.maxHeight = 0;

    // open procedure list tab
    procedureBtnRef.current.classList.add('active');
    procedureBtnRef.current.nextElementSibling.style.maxHeight = procedureBtnRef.current.nextElementSibling.scrollHeight + 'px';
  };


  // SELECT PROCEDURE
  const handleProceduraItemClick = async (event, index, name) => {
    // aktivnosti
    const aktivnostiResult = await getAktivnosti(procesiList[selectedProcesRawId].id, procedureList[index].id);
    const aktivnosti = aktivnostiResult.data.fuk_aktivnosti

    var tempAktivnosti = []

    for (var i = 0; i < aktivnosti.length; i++) {
      const currentAktivnost = aktivnosti[i].akt_redosled + ". " + aktivnosti[i].akt_naziv
      if (!tempAktivnosti.includes(currentAktivnost)) {
        tempAktivnosti.push(currentAktivnost);
      }
    }

    setSelectedProceduraIndex(index);
    setSelectedProcedura(procedureList[index].name)
    setProceduraId(procedureList[index].id)
    updateProcedura(procedureList[index].id, index, procedureList[index].name, true)
    setAktivnostiList(tempAktivnosti)
    setExpanded("aktivnosti");

    // close oblasti list tab
    procedureBtnRef.current.classList.remove('active');
    procedureBtnRef.current.nextElementSibling.style.maxHeight = 0;

    // open procesi list tab
    aktivnostiBtnRef.current.classList.add('active');
    aktivnostiBtnRef.current.nextElementSibling.style.maxHeight = aktivnostiBtnRef.current.nextElementSibling.scrollHeight + 'px';
  };



  // accordion 
  const onExpand = (e) => {

    const accordionItemHeader = e.target;


    accordionItemHeader.classList.toggle('active');

    const accordionItemBodyWrap = accordionItemHeader.nextElementSibling;


    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBodyWrap.style.maxHeight = accordionItemBodyWrap.scrollHeight + 'px';
    } else {
      accordionItemBodyWrap.style.maxHeight = 0;
    }
  }



  return (
    <>
      <div className="wdth-100">
        <div className="accordion__item">
          <div className="accordion__item-header flex just-space-between align-center" onClick={(event) => onExpand(event)} ref={oblastiBtnRef}>
            <div className="accordion__item-header-heading-wrap">
              <h4 className="txt-blue">области</h4>
              <h3 className="">{selectedOblastName}</h3>
            </div>
            <button className="wide-btn btn-blue" onClick={handleOpenDodavanjeOblasti}>Додавање области<img src={AddIcon} alt="" /></button>
          </div>
          <div className="accordion__item-body-wrap">
            <div className="accordion__item-body">
              {
                oblastiList?.map((item) => {
                  return (
                    <div className="accordion__item-body__item flex just-space-between align-center" onClick={(event) => handleOblastItemClick(event, item.key, item.name)}>
                      <h3>{item.name}</h3>
                      <div className="accordion__item-body__item-icons-wrap flex">
                        <button onClick={(e) => {
                          e.stopPropagation();
                          handleOpenObradaOblasti(item.name);
                        }}><img src={EditIcon} alt="edit-icon" /></button><button onClick={(e) => {
                          e.stopPropagation();
                          handleOpenBrisanjeOblasti(item.id);
                        }}><img src={TrashIcon} alt="trash-icon" /></button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="accordion__item">
          <div className="accordion__item-header flex just-space-between align-center" onClick={(event) => onExpand(event)} ref={procesiBtnRef}>
            <div className="accordion__item-header-heading-wrap">
              <h4 className="txt-blue">процеси</h4>
              <h3 className="">{selectedProces}</h3>
            </div>
            <button className="wide-btn btn-blue" onClick={(e) => {
              e.stopPropagation();
              if (isOblastSelected) {
                navigation("/fuk/dodavanje-procesa", { state: { selectedOblastId, selectedOblastName } })
              } else {
                setOpenErrorDialog(true)
              }
            }}>Додавање процеса<img src={AddIcon} alt="" /></button>
          </div>
          <div className="accordion__item-body-wrap">
            <div className="accordion__item-body">
              {
                procesiList?.map((item, index) => {
                  return (
                    <div className="accordion__item-body__item flex just-space-between align-center" onClick={(event) => handleProcesItemClick(event, index, item.name)}>
                      <h3>{item.name}</h3>
                      <div className="accordion__item-body__item-icons-wrap flex">
                        <button onClick={(e) => {
                          e.stopPropagation();
                          if (isOblastSelected) {
                            const selectedProcesId = item.id;
                            navigation("/fuk/pregled-procesa/",
                              { state: { oblastId: selectedOblastId, imeOblasti: selectedOblastName, procesId: selectedProcesId } })
                          } else {
                            setOpenErrorDialog(true)
                          }
                        }}><img src={ViewIcon} alt="view-icon" /></button>
                        <button onClick={(e) => {
                          e.stopPropagation();
                          if (isOblastSelected) {
                            navigation(`/fuk/obrada-procesa/${item.id}`, { state: { selectedOblastId, selectedOblastName } })
                          } else {
                            setOpenErrorDialog(true)
                          }
                        }}><img src={EditIcon} alt="edit-icon" /></button>
                        <button onClick={(e) => {
                          e.stopPropagation();
                          handleOpenBrisanjeProcesa(item.id)
                        }}>
                          <img src={TrashIcon} alt="trash-icon" /></button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="accordion__item">
          <div className="accordion__item-header flex just-space-between align-center" onClick={(event) => onExpand(event)} ref={procedureBtnRef}>
            <div className="accordion__item-header-heading-wrap">
              <h4 className="txt-blue">процедуре</h4>
              <h3 className="">{selectedProcedura}</h3>
            </div>
            <button className="wide-btn btn-blue" onClick={(e) => {
              e.stopPropagation();
              if (isOblastSelected && isProcesSelected) {
                navigation("/fuk/dodavanje-procedure", { state: { selectedOblastId, selectedOblastName, selectedProcesId, imeProcesa, proceduraId } })
              } else {
                setOpenErrorDialog(true)
              }
            }}>Додавање процедуре<img src={AddIcon} alt="" /></button>
          </div>
          <div className="accordion__item-body-wrap">
            <div className="accordion__item-body">
              {
                procedureList?.map((item) => {
                  return (
                    <div className="accordion__item-body__item flex just-space-between align-center" onClick={(event) => handleProceduraItemClick(event, item.key, item.name)}>
                      <h3>{item.name}</h3>
                      <div className="accordion__item-body__item-icons-wrap flex">
                        <button onClick={(e) => {
                          e.stopPropagation();
                          if (isOblastSelected && isProcesSelected) {
                            const proceduraId = item.id;
                            navigation("/fuk/pregled-procedure/",
                              { state: { selectedOblastId, selectedOblastName, selectedProcesId, imeProcesa, proceduraId } })
                          } else {
                            setOpenErrorDialog(true)
                          }
                        }}><img src={ViewIcon} alt="view-icon" /></button>
                        <button onClick={(e) => {
                          e.stopPropagation();
                          if (isProceduraSelected) {
                            const proceduraId = item.id;
                            navigation(`/fuk/obrada-procedure/${proceduraId}`, { state: { selectedOblastId, selectedOblastName, selectedProcesId, imeProcesa, proceduraId } })
                          } else {
                            setOpenErrorDialog(true)
                          }
                        }}><img src={EditIcon} alt="edit-icon" /></button>
                        <button onClick={(e) => {
                          e.stopPropagation();
                          handleOpenBrisanjeProcedure(item.id)
                        }}><img src={TrashIcon} alt="trash-icon" />
                        </button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="accordion__item">
          <div className="accordion__item-header flex just-space-between align-center" onClick={(event) => onExpand(event)} ref={aktivnostiBtnRef}>
            <div className="accordion__item-header-heading-wrap">
              <h4 className="txt-blue">активности</h4>
              <h3 className="">Изаберите активност</h3>
            </div>
          </div>
          <div className="accordion__item-body-wrap">
            <div className="accordion__item-body">
              {
                aktivnostiList?.map((item) => {
                  return (
                    <div className="accordion__item-body__item flex just-space-between align-center">
                      <h3>{item}</h3>
                      <div className="accordion__item-body__item-icons-wrap flex">
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      {/* add oblast */}
      <Dialog className="dialog-popup" open={openDodavanjeOblasti} onClose={handleCloseDodavanjeOblasti} sx={{
        backgroundColor: "#0A142359",
      }}>
        <Box sx={{
        paddingBottom: "40px",
        backgroundColor: "#0A1423",
      }}>
          <Grid container sx={{
            justifyContent: "space-between",
            borderBottom: "1px solid #3AD1E833",
          }}>
            <DialogTitle sx={{
              padding: "15px 0 15px 35px",
            }}>
              Додавање области
            </DialogTitle>
            <Button onClick={handleCloseDodavanjeOblasti} sx={{
              padding: "0",
              marginRight: "35px",
              '&:hover': {
                backgroundColor: "transparent !important",
              }
            }}>
              <Image 
                width="18px"
                height="18px"
                src={CloseIcon} 
                alt="Close"
              />
              </Button>
          </Grid>
          <DialogContent sx={{
            padding: "70px 35px",
          }}>
            <TextField className="dialog-popup-form" sx={{
              color: "#fff",
            }}
              autoFocus
              autoComplete="off"
              margin="dense"
              id="selectedOblastName"
              label="Назив области"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setSelectedOblastName(e.target.value)
              }}
            />
          </DialogContent>
          <DialogActions sx={{
            justifyContent: "center",
            paddingX: "35px",
          }}>
            <Button onClick={handleCloseDodavanjeOblasti} sx={{
              width: "230px",
              border: "1px solid #3AD1E84D",
              borderRadius: "5px",
              color: "#fff",
            }}>Откажи</Button>
            <Button onClick={handleConfirmDodavanjeOblasti} sx={{
              width: "230px",
              backgroundColor: "#3AD1E8",
              borderRadius: "5px",
              color: "#0A1423",
            }}>Потврди</Button>
          </DialogActions>
        </Box>
      </Dialog>
      {/* error popup */}
      <Dialog className="dialog-popup" 
        open={openErrorDialog} 
        onClose={handleCloseErrorDialog} 
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          backgroundColor: "#0A142359",
        }}>
        <Box sx={{
        paddingBottom: "40px",
        backgroundColor: "#0A1423",
      }}>
          <Grid container sx={{
            justifyContent: "space-between",
            borderBottom: "1px solid #3AD1E833",
          }}>
            <DialogTitle id="alert-dialog-title" sx={{
              padding: "15px 0 15px 35px",
            }}>
              Операција није подржана!
            </DialogTitle>
            <Button onClick={handleCloseErrorDialog} sx={{
              padding: "0",
              marginRight: "35px",
              '&:hover': {
                backgroundColor: "transparent !important",
              }
            }}>
              <Image 
                width="18px"
                height="18px"
                src={CloseIcon} 
                alt="Close"
              />
              </Button>
          </Grid>
          <DialogContent sx={{
            padding: "70px 35px",
          }}>
            <DialogContentText id="alert-dialog-description" sx={{
              color: "#fff",
            }}>
              {errorMessages[ERROR_1]}
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{
            justifyContent: "center",
            paddingX: "35px",
          }}>
            <Button onClick={handleCloseErrorDialog} sx={{
              width: "230px",
              backgroundColor: "#3AD1E8",
              borderRadius: "5px",
              color: "#0A1423",
            }}>У реду</Button>
          </DialogActions>
        </Box>
      </Dialog>
      {/* edit oblast popup */}
      <Dialog className="dialog-popup" open={openObradaOblasti} onClose={handleCloseObradaOblasti} sx={{
        backgroundColor: "#0A142359",
      }}>
        <Box sx={{
        paddingBottom: "40px",
        backgroundColor: "#0A1423",
      }}>
          <Grid container sx={{
            justifyContent: "space-between",
            borderBottom: "1px solid #3AD1E833",
          }}>
            <DialogTitle sx={{
              padding: "15px 0 15px 35px",
            }}>
              Обрада области
            </DialogTitle>
            <Button onClick={handleCloseObradaOblasti} sx={{
              padding: "0",
              marginRight: "35px",
              '&:hover': {
                backgroundColor: "transparent !important",
              }
            }}>
              <Image 
                width="18px"
                height="18px"
                src={CloseIcon} 
                alt="Close"
              />
              </Button>
          </Grid>
          <DialogContent sx={{
            padding: "70px 35px",
          }}>
            <TextField className="dialog-popup-form" sx={{
              color: "#fff",
            }}
              autoFocus
              autoComplete="off"
              margin="dense"
              id="selectedOblastName"
              label="Назив области"
              type="text"
              fullWidth
              variant="standard"
              value={oblastValue}
              onChange={(e) => {
                setSelectedOblastName(e.target.value)
              }}
            />
          </DialogContent>
          <DialogActions sx={{
            justifyContent: "center",
            paddingX: "35px",
          }}>
            <Button onClick={handleCloseObradaOblasti} sx={{
              width: "230px",
              border: "1px solid #3AD1E84D",
              borderRadius: "5px",
              color: "#fff",
            }}>Откажи</Button>
            <Button onClick={handleConfirmObradaOblasti} sx={{
              width: "230px",
              backgroundColor: "#3AD1E8",
              borderRadius: "5px",
              color: "#0A1423",
            }}>Потврди</Button>
          </DialogActions>
        </Box>
      </Dialog>
      {/* remove oblast popup */}
      <Dialog
        open={openBrisanjeOblasti}
        onClose={handleCloseBrisanjeOblasti}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="edit-risk-irregularity-popup"
      >
        <DialogTitle id="alert-dialog-title">
          {"Брисање области"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>Следећа операција ће да обрише одабрану област!</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{
            justifyContent: "center",
            padding: "35px",
          }}>
          <Button onClick={handleCloseBrisanjeOblasti} sx={{
              width: "230px",
              border: "1px solid #3AD1E84D",
              borderRadius: "5px",
              color: "#fff",
            }}>Откажи</Button>
          <Button onClick={() => {
              handleConfirmBrisanjeOblasti()}
            } 
            autoFocus
            sx={{
              width: "230px",
              backgroundColor: "#3AD1E8",
              borderRadius: "5px",
              color: "#0A1423",
            }}>
            Потврди
          </Button>
        </DialogActions>
      </Dialog>
      {/* remove proces popup */}
      <Dialog
        open={openBrisanjeProcesa}
        onClose={handleCloseBrisanjeProcesa}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="edit-risk-irregularity-popup"
      >
        <DialogTitle id="alert-dialog-title">
          {"Брисање процеса"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>Следећа операција ће да обрише одабрани процес!</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{
            justifyContent: "center",
            padding: "35px",
          }}>
          <Button onClick={handleCloseBrisanjeProcesa} sx={{
              width: "230px",
              border: "1px solid #3AD1E84D",
              borderRadius: "5px",
              color: "#fff",
            }}>Откажи</Button>
          <Button onClick={() => {
              handleConfirmBrisanjeProcesa()}
            } 
            autoFocus
            sx={{
              width: "230px",
              backgroundColor: "#3AD1E8",
              borderRadius: "5px",
              color: "#0A1423",
            }}>
            Потврди
          </Button>
        </DialogActions>
      </Dialog>
      {/* remove procedure popup */}
      <Dialog
        open={openBrisanjeProcedure}
        onClose={handleCloseBrisanjeProcedure}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="edit-risk-irregularity-popup"
      >
        <DialogTitle id="alert-dialog-title">
          {"Брисање процедуре"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>Следећа операција ће да обрише одабрану процедуру!</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{
            justifyContent: "center",
            padding: "35px",
          }}>
          <Button onClick={handleCloseBrisanjeProcedure} sx={{
              width: "230px",
              border: "1px solid #3AD1E84D",
              borderRadius: "5px",
              color: "#fff",
            }}>Откажи</Button>
          <Button onClick={() => {
              handleConfirmBrisanjeProcedure()}
            } 
            autoFocus 
            sx={{
              width: "230px",
              backgroundColor: "#3AD1E8",
              borderRadius: "5px",
              color: "#0A1423",
            }}>
            Потврди
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Accordion