import React, { useState, useEffect } from "react";

const CSRFToken = () => {
  const [csrftoken, setcsrftoken] = useState("");
  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res =
        await fetch(`/api/v_1_0/user/csrf_cookie`);

        // if (res.data.error) {
        //   throw Error(res.data.error);
        // }
      } catch (error) {
        console.log("CSRF Token error: ", error);
      }
    };

    fetchData();
    setcsrftoken(getCookie("csrftoken"));
  }, []);

  // console.log(csrftoken);

  return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};

export default CSRFToken;
