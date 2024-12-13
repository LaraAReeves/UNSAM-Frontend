import { Box, IconButton, TextField} from "@mui/material"
import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function SeachBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    //onSearch(searchTerm)
    console.log('Realizando búsqueda:',searchTerm);
  }

  return (
    <Box  sx={{ display: 'flex', alignItems: 'center', gap: 2 , mx: 2,p: 2,
        backgroundColor: '#f0f0f0', 
        borderRadius: '8px', 
        boxShadow: 2,
    }}>
      <TextField
        label="Clase / Comisión / Profesor / Carrera"
        // hiddenLabel
        id="filled-hidden-label-normal"
        variant="outlined"
        fullWidth
        style={{width: '100%'}}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton 
          sx={{ padding: 1,fontSize: 30 }}
          aria-label="Buscar"
          onClick={handleSearch}>
       <SearchOutlinedIcon  sx={{ fontSize: 30 }}  />
      </IconButton>
    </Box>
  )

}