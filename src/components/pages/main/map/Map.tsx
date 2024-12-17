import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material"

import { Controller, useForm } from "react-hook-form"
import { Outlet, useNavigate } from "react-router-dom"

import './map.css'
import ClassInfoModal from "@/components/common/Modal";
import { Box, Button, InputBase, Typography } from "@mui/material";

import React, { useEffect } from "react";

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

  const handleLevelChange = (path: string) => navigate(`/mapa/${path}`)

  const [open, setOpen] = React.useState(false)
  const [modalContent, setModalContent] = React.useState<"map" | "card" | null>(null)
  const [date, setDate] = React.useState(new Date().toISOString().split('T')[0])

  const handleClose = () => setOpen(false)

  const handleOpen = () => {
    setModalContent("map") //Para que abra el modal correspondiente a botón mapa
    setOpen(true)
  }

  const handleOpenCard = () => {
    setModalContent("card") //Para que abra el modal correspondiente a la card
    setOpen(true)
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
    {/* <>

      <ClassInfoModal open={open} handleClose={handleClose} classroom={classData2.classroom} classroomType={classData2.classroomType}>
      {modalContent === "map" ?(
        <>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
              sx={{ ml: 1, flex: 1 ,fontSize: '22px', padding: '10px 12px',
                '&:focus': {
                  borderColor: '#3f51b5',  // Cambio de color de borde cuando el input está en foco
                  boxShadow: '#7072bb', // Sombra en foco
                },}}
              aria-label='Buscar fecha'
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Box>
          <ClassRoomCard onClick={() => {}}
            className={classData2.className}
            commission={classData2.commission}
            classroom={classData2.classroom}
            building={classData2.building}
            teacher={classData2.teacher}
            careers={classData2.careers}
            schedules={classData2.schedules}
            viewType="modal"
          />
        </>

        ): modalContent === "card" ? (// Contenido cuando se abre desde el mapa
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
              Mapa {classData.building}
            </Typography>
            <ClassRoomCard onClick={() => {}} // Hay que desactivar el onClick cuando se esta dentro del modal
              className={classData.className}
              commission={classData.commission}
              classroom={classData.classroom}
              building={classData.building}
              teacher={classData.teacher}
              careers={classData.careers}
              schedules={classData.schedules}
              viewType="modal"
              />
          </>
        ): null}
      </ClassInfoModal>

    </> */}
  </main>
  )
}

