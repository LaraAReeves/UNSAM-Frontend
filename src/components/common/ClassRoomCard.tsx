import { CardActionArea, CardContent, Typography, Card, Box, Chip, Divider } from "@mui/material";
import { User} from '@phosphor-icons/react'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Clock } from "@phosphor-icons/react/dist/ssr";


import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';


export default function ClassRoomCard() {

  return (
    <Box  sx={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      mx: 2,p: 2,gap:2
    }}>

    <Card sx={{ width: '100%', 
          maxWidth: 450,  
          borderRadius: 2, 
          boxShadow: 3, 
          mt: 2,
          '@media (max-width: 600px)': { maxWidth: '90%'}, }}>
      <CardActionArea>
        <CardContent sx={{ backgroundColor: '#5f83b1', color: 'white', borderRadius: 2 }}>
          <Typography gutterBottom variant="h5" component="div">
            Modelo 1
          </Typography>
        </CardContent>
        {/* Aula - Edificio */}
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOnIcon sx={{ color: 'text.secondary', mr: 1 }} />
            {/* <LocationOnIcon sx={{ color: 'text.secondary', mr: 1 }} /> */}
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Aula: 101 - Edificio A
            </Typography>
          </Box>
          {/* Profesor y Horario*/}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <User size={25} weight='fill'/>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Profesor: Cosme Fulanito
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', mx: 2 }}>
              {/* <AccessTimeIcon sx={{ color: 'text.secondary', mr: 1 }} /> */}
              <Clock size={25} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                08:00 - 10:00
              </Typography>
            </Box>
          </Box>
          {/* Carreras */}
          <Chip label="Tecnicatura en Programación Informática" color="primary" size="small" sx={{ mt: 1 }} />
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width: '100%', 
          maxWidth: 450,
          '@media (max-width: 600px)': {maxWidth: '90%'} }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ mb: 2 }}>
            Modelo 2
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {/* Aula - Edificio */}
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            Aula 101 - Edificio A
          </Typography>
          
          {/*Profesor y Horario*/}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Profesor: Cosme Fulanito
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', mx: 2 }}>
              08:00 - 10:00
            </Typography>
          </Box>

          {/* Carreras */}
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            Carreras: Tecnicatura en Programación Informática
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
    <Card sx={{width: '100%', 
          maxWidth: 450,
          borderRadius: 2, 
          boxShadow: 3, 
          mt: 2,
          '@media (max-width: 600px)': {maxWidth: '90%'}}}>
      <CardActionArea>
        <CardContent sx={{ backgroundColor: '#5f83b1', color: 'white', borderRadius: 2, mb: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            Modelo 3
          </Typography>
        </CardContent>
        
        <CardContent sx={{ p: 2 }}>
          {/* Aula - Edificio */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Aula: 101 - Edificio A
            </Typography>
          </Box>
          
          {/* Profesor y Horario*/}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Profesor: Cosme Fulanito
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', mx: 2 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                08:00 - 10:00
              </Typography>
            </Box>
          </Box>
          {/* Carreras */}
          <Chip label="Carreras: Tecnicatura en Programación Informática" color="primary" size="small" sx={{ mt: 1 }} />
        </CardContent>
      </CardActionArea>
    </Card>


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
            Modelo 4
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
      
      <Card sx={{
        width: '100%',  
        maxWidth: 450, 
        borderRadius: 2,
        boxShadow: 2,
        border: '1px solid #e0e0e0',
        '@media (max-width: 600px)': {maxWidth: '90%'},
      }}>
        <CardActionArea>
          <CardContent sx={{ backgroundColor: '#fafafa', borderRadius: 2 }}>
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#3e4f6a' }}>
            Modelo 5
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Aula: 101 - Edificio A
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Profesor: Cosme Fulanito
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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