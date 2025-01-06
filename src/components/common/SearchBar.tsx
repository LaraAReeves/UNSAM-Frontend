import { Autocomplete, Box, Divider, IconButton, InputAdornment, TextField} from "@mui/material"
import { useState } from "react"
import { MagnifyingGlass} from '@phosphor-icons/react'
import { classes } from "@/data/mock/ClassData"


interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }:SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onSearch(query)
  }

  // const handleChange = (newValue: string | null) => {
  //   setQuery(newValue || '')
  // }

  const handleInputChange = (event: React.SyntheticEvent, newInputValue: string) => {
    setQuery(newInputValue)
  }

  return (
    <Box  sx={{ display: 'flex', alignItems: 'center', mx: 2,p: 2,}}>
      <Autocomplete
        freeSolo
        id="search-autocomplete"
        disableClearable
        fullWidth 
        value={query}
        // onChange={(_, newValue) => handleChange(newValue)}
        onInputChange={handleInputChange}
        options={classes.map((classItem) => classItem.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Clase / Comisión / Profesor / Carrera'
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