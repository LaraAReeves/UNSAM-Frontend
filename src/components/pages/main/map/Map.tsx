import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material"

import { Controller, useForm } from "react-hook-form"
import { Outlet, useNavigate } from "react-router-dom"

import './map.css'

export default function Map() {
  const { control, watch } = useForm({
    defaultValues: {
      building: '', // Valor inicial, índice del array de componentes
      level: '' // Valor inicial, índice del array de componentes
    }
  })
  const navigate = useNavigate()

   // Observamos los valores seleccionados
   const selectedBuilding = watch('building')
   /* const selectedLevel = watch('level') */

  const buildings = [
    {
      text:'Tornavías',
      path:'mapa/tornavias-planta-baja',
      children: [
        {
          text: 'Subsuelo',
          path: 'tornavias-subsuelo',
        },
        {
          text: 'Primer piso',
          path: 'tornavias-primer-piso',
        },
        {
          text: 'Planta baja',
          path: 'tornavias-planta-baja',
        }
      ]
    }
  ]

  const buildingLevels = buildings.find(building => building.path === selectedBuilding)?.children || []

  const handleLevelChange = (path: string) => {
    navigate(`/mapa/${path}`)
  }

  return (
    <main className="map-page">
    {/* Select del edificio */}
    <Controller
      name="building"
      control={control}
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id="building-select-label">Edificio</InputLabel>
          <Select
            {...field}
            labelId="building-select-label"
            label="Edificio"
            onChange={(e) => {
              field.onChange(e) // Actualiza el valor en react-hook-form
              navigate(`/${e.target.value}`) // Redirige a la ruta seleccionada
            }}
          >
            {buildings.map((building, index) => (
              <MenuItem key={index} value={building.path}>
                {building.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />

    {/* RadioGroup de niveles */}
    {selectedBuilding && (
      <Controller
        name="level"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <FormLabel id="building-levels-label">Niveles</FormLabel>
            <RadioGroup
              {...field}
              aria-labelledby="building-levels-label"
              name="levels-group"
              onChange={(e) => {
                field.onChange(e) // Actualiza el valor en react-hook-form
                handleLevelChange(e.target.value) // Redirige a la ruta
              }}
            >
              {buildingLevels.map((level, index) => (
                <FormControlLabel
                  key={index}
                  value={level.path}
                  control={<Radio />}
                  label={level.text}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}
      />
    )}

    <section className="map-container">
        <Outlet />
    </section>
  </main>
  )
}

