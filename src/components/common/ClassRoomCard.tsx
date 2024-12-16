import { CardActionArea, CardContent, Typography, Card, Box, Divider } from "@mui/material";
import { MapPin,Clock,User,BookOpenText} from '@phosphor-icons/react'


export default function ClassRoomCard() {

  return (
    <Box  sx={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      mx: 2,p: 2,gap:2
    }}>

    <Card sx={{
        width: '100%',
        maxWidth: 450,
        borderRadius: 3,
        boxShadow: 1,
        border: '1px solid #e0e0e0',
        '@media (max-width: 600px)': {maxWidth: '90%'}
      }}>
        <CardActionArea>
          <CardContent sx={{ backgroundColor: '#f5f5f5', borderRadius: 3 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#333', fontWeight: 'bold' }}>
            Modelo 4.0
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <MapPin size={24} color='#1976d2' style={{ marginRight:'8px'}}/>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Aula: 101 - Edificio A
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <User size={24} color='#1976d2' style={{ marginRight:'8px'}}/>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Profesor: Cosme Fulanito
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Clock size={24} color='#1976d2' style={{ marginRight:'8px'}}/>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Horario: 08:00 - 10:00
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
              <BookOpenText size={24} color='#1976d2' style={{ marginRight: '8px', alignSelf: 'flex-start' }} />
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#1976d2', 
                  display: 'inline-block', 
                  maxWidth: 'calc(100% - 32px)', 
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                }}>
                Carreras: Tecnicatura en Programación Informática
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box> 
  )
}