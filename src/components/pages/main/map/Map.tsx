import ClassRoomCard from "@/components/common/ClassRoomCard";
import ClassInfoModal from "@/components/common/Modal";
import { Button, Typography } from "@mui/material";
import React from "react";


export default function Map() {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  const handleOpenCard = () => setOpen(true)
  const handleCloseCard = () => setOpen(false)

  return (
    <>
      <Button variant="contained" sx={{mb:4}} onClick={handleOpen}>Mapa</Button>
      <ClassInfoModal open={open} handleClose={handleClose}>
        <ClassRoomCard/>
      </ClassInfoModal>


      <ClassRoomCard onClick={handleOpenCard}/>
      <ClassInfoModal open={open} handleClose={handleCloseCard}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
              Hola Mundo
        </Typography>
      </ClassInfoModal>
    </>
  )
}

