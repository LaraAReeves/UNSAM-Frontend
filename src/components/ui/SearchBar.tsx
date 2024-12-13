import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function SeachBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  }


  return (
    <div className="contenedor-barra">
    <div className="p-inputgroup">
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        size="small"
      >
        Buscar
      </Button>
    </div>
  </div>
  )

}