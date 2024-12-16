import ClassRoomCard from "@/components/common/ClassRoomCard"
import SearchBar from "@/components/common/SearchBar"
import { ClassData } from "@/data/mock/ClassData"
import { Box, Divider, Typography } from "@mui/material"

const search = () => {
  console.log('Result')
}

export function Search() {
  return (
    <Box display='flex' flexDirection='column' height='100vh' overflow='hidden'>
      <Box flexShrink='0' paddingTop='2rem'>
        <Typography variant="h5" fontWeight="bold">Búsqueda</Typography>
        <SearchBar onSearch={() => search()} />
      </Box>
      <Divider variant='middle' flexItem/>
      <Box sx={{overflowY: 'auto'}} paddingBottom='4rem'>
        <ClassRoomCard
          className={ClassData.className}
          commission={ClassData.commission}
          classroom={ClassData.classroom}
          building={ClassData.building}
          teacher={ClassData.teacher}
          careers={ClassData.careers}
          schedules={ClassData.schedules}
          viewType={ClassData.viewType}
        />
        <ClassRoomCard
          className={ClassData.className}
          commission={ClassData.commission}
          classroom={ClassData.classroom}
          building={ClassData.building}
          teacher={ClassData.teacher}
          careers={ClassData.careers}
          schedules={ClassData.schedules}
          viewType={ClassData.viewType}
        />
        <ClassRoomCard
          className={ClassData.className}
          commission={ClassData.commission}
          classroom={ClassData.classroom}
          building={ClassData.building}
          teacher={ClassData.teacher}
          careers={ClassData.careers}
          schedules={ClassData.schedules}
          viewType={ClassData.viewType}
        />
      </Box>
    </Box>
  )
}