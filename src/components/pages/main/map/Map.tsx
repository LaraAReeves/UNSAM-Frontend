import ClassRoomCard from "@/components/common/ClassRoomCard";
import ClassInfoModal from "@/components/common/Modal";
import { Button, Typography } from "@mui/material";
import React from "react";


export default function Map() {
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
      {/*
      <ClassInfoModal open={open} handleClose={handleClose}>
        <ClassRoomCard/>
      </ClassInfoModal> 
      */}
      <ClassRoomCard onClick={handleOpenCard}/>

      <ClassInfoModal open={open} handleClose={handleClose}>
      {modalContent === "map" ? 
          ( <ClassRoomCard /> ) 
        : modalContent === "card" ? (// Contenido cuando se abre desde el mapa
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
              Mapa Torna
            </Typography>
            <ClassRoomCard onClick={() => {}} /> {/* Hay que desactivar el onClick cuando se esta dentro del modal */}
          </>
        ): null}
      </ClassInfoModal>
      
    </>
  )
}

