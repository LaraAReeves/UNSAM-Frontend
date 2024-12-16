import { Modal, Box, Typography, Divider, IconButton, Fade } from "@mui/material";
import React from "react";
import {X} from '@phosphor-icons/react'


type ModalProps = {
  children: React.ReactNode  // Permite múltiples hijos de cualquier tipo
  open: boolean             // Propiedad para manejar el estado del Modal
  handleClose: () => void    // Función para cerrar el Modal
}


export default function ClassInfoModal({ children, open, handleClose }: ModalProps){
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Fade in={open}>
        <Box sx={{position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          bgcolor: 'background.paper',
          boxShadow: 3,
          p: 4,
          borderRadius: '24px'}}>

          <Box sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
            <Typography id="modal-modal-title" variant="h6" component="h2" >
              Nombre Aula <br />Tipo Aula
            </Typography>
            <IconButton
                  aria-label='Cerrar Ventana'
                  onClick={handleClose}
                  edge="end">

              <X weight='bold'/>
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <>
            {children}
          </>
        </Box>
      </Fade>    
    </Modal>
    
  )

}