import { CardActionArea, CardContent, Typography, Card, Box, Divider} from "@mui/material";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

type ClassRoomCardProps = {
  onClick?: () => void  
}

export default function ClassRoomCard({ onClick }: ClassRoomCardProps) {

  return (
    <Box  sx={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      mx: 1,p: 1,gap:1
    }}>

    <Card sx={{
        width: '100%',
        maxWidth: 500,
        borderRadius: 3,
        boxShadow: 1,
        border: '1px solid #e0e0e0',
        '@media (max-width: 600px)': {maxWidth: '90%'},
        
      }}>
        <CardActionArea onClick={onClick}>
          <CardContent sx={{ backgroundColor: '#f5f5f5', borderRadius: 3 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#333', fontWeight: 'bold' }}>
            Materia X
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocationOnIcon sx={{ color: '#1976d2', mr: 1 }} />
              <Typography variant="body2" sx={{ color: '#666' }}>
                Aula: 101 - Edificio A
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PersonIcon sx={{ color: '#1976d2', mr: 1 }} />
              <Typography variant="body2" sx={{ color: '#666' }}>
                Profesor: Cosme Fulanito
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <AccessTimeIcon sx={{ color: '#1976d2', mr: 1 }} />
              <Typography variant="body2" sx={{ color: '#666' }}>
                Horario: 08:00 - 10:00
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: '#1976d2' }}>
              Carreras: Tecnicatura en Programación Informática
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      
    </Box>

    
  )

}