import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Axios from "axios";

const FormDialog = (props) => {
  const [editValues, setEditValues] = React.useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category,
  });

  const handleUpdateValues = () => {
    Axios.put("http://localhost:3001/update", {
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost,
      category: editValues.category,
    });
    handleClose();
  };

  const handleDelete = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListData(
        props.listData.filter((value) => {
          return value.id != editValues.id;
        })
      );
    });
    handleClose();
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome"
          defaultValue={props.name}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="cost"
          label="Valor R$"
          defaultValue={props.cost}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="category"
          label="Categoria"
          defaultValue={props.category}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleDelete}>Deletar</Button>
        <Button onClick={handleUpdateValues}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
