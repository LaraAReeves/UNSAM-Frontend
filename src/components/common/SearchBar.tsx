import { Box, Divider, IconButton, InputAdornment, TextField} from "@mui/material"
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
        sx={{ml: 1, flex: 1}}
        slotProps={{
          input: {
            endAdornment: 
            <InputAdornment position="end">
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                  sx={{ padding: 1,
                    fontSize: 32,
                    height: '56px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                   }}
                   color='secondary'
                  aria-label="Buscar"
                  onClick={handleSearch}>
               <MagnifyingGlass size={32} alt='Lupa' color='#5f83b1'/>
              </IconButton> 
            </InputAdornment>,
          },
        }}
        aria-label='Ingresar búsqueda'
      />
    </Box>
  )

}