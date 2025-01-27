import { Autocomplete, Box, Divider, IconButton, InputAdornment, TextField} from "@mui/material"
import { useState } from "react"
import { MagnifyingGlass} from '@phosphor-icons/react'
import { classes } from "@/data/mock/ClassData"


interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }:SearchBarProps) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const handleSearch = () => {
    onSearch(query)
  }

  const handleInputChange = (_: React.SyntheticEvent, newInputValue: string) => {
    setQuery(newInputValue)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch()
      setOpen(false)
    }
  }

  //Ordenar la lista desplegable en orden alfabético
  const sortedClasses = classes.map((classItem) => classItem.name).sort((a, b) => a.localeCompare(b))

  return (
    <Box  sx={{ display: 'flex', alignItems: 'center', mx: 2,p: 2,}}>
      <Autocomplete
        freeSolo
        id="search-autocomplete"
        disableClearable
        fullWidth 
        value={query}
        onInputChange={handleInputChange}
        //Control de la lista desplegable
        open={open}
        onOpen={() => setOpen(true)} 
        onClose={() => setOpen(false)}
        options={sortedClasses}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Clase / Comisión / Profesor / Carrera'
            onKeyDown={handleKeyDown}
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
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
                  </InputAdornment>
              },
            }}
            aria-label='Ingresar búsqueda'
          />
        )}
      />
    </Box>
  )
}