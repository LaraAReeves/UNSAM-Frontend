import { CardActionArea, CardContent, Typography, Card, Box, Divider } from "@mui/material";
import { MapPin,Clock,User,BookOpenText} from '@phosphor-icons/react'

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
      mx: 0,
      p: 0
    }}>

    <Card sx={{
        width: '100%',
        maxWidth: 500,
        borderRadius: 3,
        boxShadow: 1,
        border: '1px solid #e0e0e0'
      }}>
        <CardActionArea onClick={onClick}>
          <CardContent sx={{ backgroundColor: '#f5f5f5', borderRadius: 3 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#333', fontWeight: 'bold' }}>
            Materia X
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