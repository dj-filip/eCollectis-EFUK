import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

export const submitNewContract = async (inputs) => {
  try {
    console.log("SERVICE: ", inputs);
    const res = await baseURL.post("/contract/contract/", inputs, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const readContractInfo = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contract/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const submitEditedContractInfo = async (id, inputs) => {
  try {
    const res = await baseURL.patch(`/contract/contract/${id}/`, inputs, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const readContractClerks = async (id) => {
  // try {
  const res = await baseURL.get(`/contract/contract-clerk/contract/${id}/`);
  return res;
  // } catch (error) {
  //   return error;
  // }
};

export const submitContractClerks = async (inputs) => {
  try {
    const res = await baseURL.post(`/contract/contract-clerk/`, inputs, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const updateContractClerks = async (id, inputs) => {
  try {
    const res = await baseURL.put(`/contract/contract-clerk/${id}/`, inputs, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getOrdersByContractId = async (id, inputs) => {
  try {
    const res = await baseURL.get(`/contract/contract-order/contract/${id}`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const createContractOrder = async (inputs) => {
  try {
    const res = await baseURL.post(`/contract/contract-order/`, inputs, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getOrderTable = async (id) => {
  try {
    const res = await baseURL.get(`/contract/order-table/contract-order/${id}`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const createOrderTable = async (data) => {
  try {
    const res = await baseURL.post(`/contract/order-table/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const patchContractOrder = async (id, data) => {
  console.log("patchContractOrder: ", id, data);

  try {
    const res = await baseURL.patch(`/contract/contract-order/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getRowsForTableById = async (id) => {
  try {
    const res = await baseURL.get(`/contract/order-row/order-table/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getRowByRowId = async (id) => {
  try {
    const res = await baseURL.get(`/contract/order-row/${id}`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const postOrderRow = async (inputs) => {
  console.log("postOrderRow: ", inputs);
  try {
    const res = await baseURL.post(`/contract/order-row/`, inputs, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const patchOrderRow = async (id, inputs) => {
  try {
    const res = await baseURL.patch(`/contract/order-row/${id}/`, inputs, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContractOrder = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contract-order/${id}/`, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const patchOrderTable = async (id, inputs) => {
  try {
    const res = await baseURL.patch(`/contract/order-table/${id}/`, inputs, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContractTable = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contract-table/contract/${id}`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const createContractTable = async (data) => {
  try {
    const res = await baseURL.post(`/contract/contract-table/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getRowsForContractTableById = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contract-table-row/contract-table/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContractTableRow = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contract-table-row/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const postContractTableRow = async (inputs) => {
  console.log("inputs: ", inputs);
  try {
    const res = await baseURL.post(`/contract/contract-table-row/`, inputs, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const postContractor = async (inputs) => {
  console.log("inputs: ", inputs);
  try {
    const res = await baseURL.post(`/contract/contractor/`, inputs, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const patchContractTableRow = async (id, inputs) => {
  try {
    const res = await baseURL.patch(`/contract/contract-table-row/${id}/`, inputs, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const patchContractTable = async (id, data) => {
  console.log(data);
  try {
    const res = await baseURL.patch(`/contract/contract-table/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContractorContacts = async () => {
  try {
    const res = await baseURL.get(`/contract/contractor-contact/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContractor = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contractor/${id}`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContractorContact = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contractor-contact/${id}`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContractors = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contractor`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const patchContractor = async (id, data) => {
  try {
    const res = await baseURL.patch(`/contract/contractor/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const postContractorContact = async (data) => {
  try {
    const res = await baseURL.post(`/contract/contractor-contact/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const patchContractorContact = async (id, data) => {
  try {
    const res = await baseURL.patch(`/contract/contractor-contact/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const patchContractData = async (id, data) => {
  try {
    const res = await baseURL.patch(`/contract/contract/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContract = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contract/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContractFull = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contract/${id}/full/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContractFromContractOrderByContractIdFull = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contract/${id}/from-contract-order/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};


export const getTotalReceived = async (id) => {
  try {
    const res = await baseURL.get(`/contract/total-received/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getContractTableRowByContractIdAndName = async (id, name) => {
  try {
    const res = await baseURL.get(`/contract/contract-table-row/contract-id/${id}/name/${name}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};


export const getContractIdFromContractOrder = async (id) => {
  try {
    const res = await baseURL.get(`/contract/contract-id-from-contract-order/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getWorkflowByContractId = async (id) => {
  try {
    const res = await baseURL.get(`/contract/workflow/contract/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const patchWorkflow = async (id, data) => {
  try {
    const res = await baseURL.patch(`/contract/workflow/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const postWorkflow = async (data) => {
  try {
    const res = await baseURL.post(`/contract/workflow/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const getTablesMetaData = async () => {
  try {
    const res = await baseURL.get(`/contract/tables-meta-data/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};


export const getWorkflowPositionByContractId = async (id) => {
  try {
    const res = await baseURL.get(`/contract/workflow-position/contract/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const patchWorkflowPosition = async (id, data) => {
  try {
    const res = await baseURL.patch(`/contract/workflow-position/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const postWorkflowPosition = async (data) => {
  try {
    const res = await baseURL.post(`/contract/workflow-position/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};
