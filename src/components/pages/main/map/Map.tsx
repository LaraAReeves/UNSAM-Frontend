import ClassRoomCard from "@/components/common/ClassRoomCard";
import ClassInfoModal from "@/components/common/Modal";
import { Box, Button, InputBase, Typography } from "@mui/material";
import React from "react";

export default function Map() {

  // Datos de ejemplo para pasar a ClassRoomCard
  const classData = {
    className: "Conceptos de Arquitectura y Sistemas Operativos",
    // classroomType : "Aula",
    commission: "C-TI09",
    classroom: "A9",
    building: "Tornavias",
    teacher: ["Cosme Fulanito","Mr. X"],
    careers: ["Tecnicatura en Programación Informática", "Tecnicatura en Redes","Diagnóstico por Imágenes","Tecnicatura en Programación Informática"],
    schedules: "08:00 - 10:00"
  }

  const classData2 = {
    className: "Algoritmos 3",
    // classroomType : "Aula",
    commission: "C-TI10",
    classroom: "A9",
    building: "Tornavias",
    teacher: ["Cosme Fulanito","Mr. X"],
    careers: ["Tecnicatura en Programación Informática", "Tecnicatura en Redes","Ciencia de Datos","Tecnicatura en Programación Informática",],
    schedules: "08:00 - 10:00"
  }

  const [open, setOpen] = React.useState(false)
  const [modalContent, setModalContent] = React.useState<"map" | "card" | null>(null)

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
    <>
      <Button variant="contained" sx={{mb:4}} onClick={handleOpen}>Mapa</Button>
   
      <ClassRoomCard onClick={handleOpenCard}
        className={classData.className}
        // classroomType={classData.classroomType}
        commission={classData.commission}
        classroom={classData.classroom}
        building={classData.building}
        teacher={classData.teacher}
        careers={classData.careers}
        schedules={classData.schedules}
        viewType="standard"/>

      <ClassInfoModal open={open} handleClose={handleClose}>
      {modalContent === "map" ?(
        <>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
              sx={{ ml: 1, flex: 1 ,fontSize: '22px', padding: '10px 12px'}}
              placeholder='Buscar fecha'
              aria-label='Buscar fecha'
              type="date" 
            />
          </Box>
          <ClassRoomCard onClick={() => {}} 
            className={classData2.className}
            // classroomType={classData2.classroomType}
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
              Mapa Torna
            </Typography>
            <ClassRoomCard onClick={() => {}} // Hay que desactivar el onClick cuando se esta dentro del modal
              className={classData2.className}
              // classroomType={classData2.classroomType}
              commission={classData2.commission}
              classroom={classData2.classroom}
              building={classData2.building}
              teacher={classData2.teacher}
              careers={classData2.careers}
              schedules={classData2.schedules}
              viewType="modal"
              /> 
          </>
        ): null}
      </ClassInfoModal>
      
    </>
  )
}

