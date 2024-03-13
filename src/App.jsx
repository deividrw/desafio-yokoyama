import React, { useState, useEffect } from "react";
import "./App.css";
import api from "./services/api";

function App() {
  const [marcas, setMarcas] = useState([]);
  const [anos, setAnos] = useState([]);
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    api
      .get("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((response) => setMarcas(response.data))
      .catch((err) => {
        console.error("Não foi possível obter as marcas: " + err);
      });
  }, []);

  useEffect(() => {
    api
      .get(
        "https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/"
      )
      .then((response) => setAnos(response.data))
      .catch((err) => {
        console.error("Não foi possível obter os Modelos: " + err);
      });
  }, []);

  // useEffect(() => {
  //   api
  //     .get("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos")
  //     .then((response) => setModelos(response.data))
  //     .catch((err) => {
  //       console.error("Não foi possível obter o modelo: " + err);
  //     });
  // }, []);

  return (
    <div id="container">
      <h1 className="title">Tabela Fipe</h1>
      <div className="containerVeiculos">
        <form action="">
          <select name="select" className="selector">
            <option>Marca</option>
            {marcas.map((marca) => (
              <option key={marca.codigo} value={marca.nome}>
                {marca.nome}
              </option>
            ))}
          </select>

          <select name="select" className="selector">
            <option>Modelo</option>
            {modelos.map((modelo) => (
              <option key={modelo.codigo} value={modelo.nome}>
                {modelo.nome}
              </option>
            ))}
          </select>

          <select name="select" className="selector">
            <option>Ano</option>
            {anos.map((ano) => (
              <option key={ano.codigo} value={ano.nome}>
                {ano.nome}
              </option>
            ))}
          </select>

        </form>
      </div>
    </div>
  );
}

export default App;
