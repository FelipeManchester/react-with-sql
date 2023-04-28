import React, { useState } from "react";
import FormDialog from "./FormDialog";

const Cards = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickCard = () => {
    setOpen(true);
  };

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        cost={props.cost}
        category={props.category}
        listData={props.listData}
        setListData={props.setListData}
        id={props.id}
      />
      <div className="Cards" onClick={handleClickCard}>
        <h1>Título: {props.name}</h1>
        <h3>Preço: {props.cost}</h3>
        <h3>Categoria: {props.category}</h3>
      </div>
    </>
  );
};

export default Cards;
