import { Box, IconButton, TextField} from "@mui/material"
import { useState } from "react"
import { MagnifyingGlass} from '@phosphor-icons/react'

interface SeachBarProps {
  onSearch: (query: string) => void
}

export default function SeachBar({ onSearch }:SeachBarProps) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <Box  sx={{ display: 'flex', alignItems: 'center', mx: 2,p: 2,}}>
      <TextField
        label='Clase / Comisión / Profesor / Carrera'
        id="filled-hidden-label-normal"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) =>setQuery(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {borderRadius:'4px 0 0 4px',height: '56px',
          '&.Mui-focused fieldset': {borderColor: '#5f83b1'},
          '& .MuiInputLabel-root': {top: '-8px'} // Ajuste de la etiqueta para que quede centrada verticalmente
        }}}
        aria-label='Ingresar búsqueda'
      />
      <IconButton
          sx={{ padding: 1,
            fontSize: 32,
            height: '56px',
            backgroundColor: '#7da1c4',
            borderRadius: '0 4px 4px 0',
            '&:hover': {backgroundColor: '#5f83b1'},
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
           }}
           color='secondary'
          aria-label="Buscar"
          onClick={handleSearch}>
       <MagnifyingGlass size={32} alt='Lupa'/>
      </IconButton>
    </Box>
  )

}