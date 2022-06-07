import React from "react";
import "../../styles/contacto.css"
export const Contacto = () => {
  const urlApi =
    "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us46.gitpod.io/api/messages";

  const createTask = (url, task) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const crear = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      let newlist = [...lista, { label: e.target.value, done: true }];
      setlista(newlist);
      createTask(urlApi, newlist);
      e.target.value = "";
    }
  };

  return (
    <div>
      <div className="container-fluid bg-dark text-warning justify-content-center  contacto_container border  rounded  border-light">
        <div className=" m-3 p-3 ">
          <label for="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" className="form-control background_input  border-0" id="exampleFormControlInput1" />
        </div>
        <div className=" m-3 p-3">
          <label for="exampleFormControlTextarea1" className="form-label text-warning ">Menssege</label>
          <textarea className="form-control background_input border-0 text-warning" id="exampleFormControlTextarea1" rows="10" onClick={crear} />
          <div className="float-end p-2">
            <button type="button" class="btn btn-dark text-warning" onClick={crear}>enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
