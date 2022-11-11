import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  filterByTamañoPequeño,
  filterByTamañoMediano,
  filterByTamañoGrande,
  filterBySexo,
  traerMascotas,
  orderByNameAsc,
  orderByNameDes,
  orderByEdad,
} from "../../../redux/actions";

export default function FiltrosMascotas({ setPage, setFilterSelected }) {
  const dispatch = useDispatch();

  function handleFilterBySexo(e) {
    e.preventDefault();
    dispatch(filterBySexo(e.target.value));
    setPage(1);
    setFilterSelected(e.target.value);
  }

  function handleFilterByTamaño(e) {
    if (e.target.value === "peque") {
      e.preventDefault();
      dispatch(filterByTamañoPequeño(e.target.value));
      setPage(1);
    } else if (e.target.value === "media") {
      e.preventDefault();
      dispatch(filterByTamañoMediano(e.target.value));
      setPage(1);
    } else if (e.target.value === "grande") {
      e.preventDefault();
      dispatch(filterByTamañoGrande(e.target.value));
      setPage(1);
    } else if (e.target.value === "all") {
      e.preventDefault();
      dispatch(traerMascotas(e.target.value));
      setPage(1);
    }
  }

  function handleOrderByName(e) {
    if (e.target.value === "asc") {
      dispatch(orderByNameAsc(e.target.value));
      setPage(1);
    } else if (e.target.value === "des") {
      dispatch(orderByNameDes(e.target.value));
      setPage(1);
    }
  }

  function handleOrderByEdad(e) {
    dispatch(orderByEdad(e.target.value));
    setPage(1);
  }

  return (
    <div>
      <select
        onChange={(e) => handleFilterBySexo(e)}
        defaultValue="Filtrar por sexo"
      >
        <option disabled>Filtrar por sexo</option>
        <option value="masc">Masculino</option>
        <option value="fem">Femenino</option>
      </select>

      <select
        onChange={(e) => handleFilterByTamaño(e)}
        defaultValue="Filtrar por tamaño"
      >
        <option disabled>Filtrar por tamaño</option>
        <option value="all">Todos los tamaños</option>
        <option value="peque">Pequeño</option>
        <option value="media">Mediano</option>
        <option value="grande">Grande</option>
      </select>

      <select
        onChange={(e) => handleOrderByName(e)}
        defaultValue="Ordenar por nombre"
      >
        <option disabled>Ordenar por nombre</option>
        <option value="asc">A-Z</option>
        <option value="des">Z-A</option>
      </select>

      <select
        onChange={(e) => handleOrderByEdad(e)}
        defaultValue="Ordenar por edad"
      >
        <option disabled>Ordenar por Edad</option>
        <option value="max">Mayor Edad</option>
        <option value="min">Menor Edad</option>
      </select>
    </div>
  );
}
